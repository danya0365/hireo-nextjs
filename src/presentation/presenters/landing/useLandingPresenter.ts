"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import type { LandingViewModel } from "@/src/presentation/presenters/landing/LandingPresenter";
import { LandingPresenterFactory } from "@/src/presentation/presenters/landing/LandingPresenter";
import { useLandingStore } from "@/src/presentation/stores/landingStore";

const presenter = LandingPresenterFactory.createClient();

export interface LandingPresenterState {
  viewModel: LandingViewModel | null;
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCategoryId: string | null;
  featuredOnly: boolean;
}

export interface LandingPresenterActions {
  loadData: () => Promise<void>;
  setSearchTerm: (value: string) => void;
  setSelectedCategoryId: (value: string | null) => void;
  toggleFeaturedOnly: () => void;
  resetFilters: () => void;
}

export function useLandingPresenter(initialViewModel?: LandingViewModel): [
  LandingPresenterState,
  LandingPresenterActions
] {
  const [viewModel, setViewModel] = useState<LandingViewModel | null>(initialViewModel ?? null);
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  const landingStore = useLandingStore();
  const { searchTerm, selectedCategoryId, featuredOnly } = landingStore;

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ";
      setError(errorMessage);
      console.error("Error loading landing data", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!initialViewModel) {
      void loadData();
    }
  }, [initialViewModel, loadData]);

  const filteredFreelancers = useMemo(() => {
    if (!viewModel) return [];

    return viewModel.freelancers.filter((freelancer) => {
      const matchesCategory = selectedCategoryId
        ? freelancer.categories.includes(selectedCategoryId)
        : true;

      const matchesSearch = searchTerm
        ? [freelancer.name, freelancer.role]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        : true;

      const matchesFeatured = featuredOnly ? freelancer.rating >= 4.9 : true;

      return matchesCategory && matchesSearch && matchesFeatured;
    });
  }, [featuredOnly, searchTerm, selectedCategoryId, viewModel]);

  const derivedState: LandingViewModel | null = useMemo(() => {
    if (!viewModel) return null;

    return {
      ...viewModel,
      featuredFreelancers: filteredFreelancers.slice(0, 3)
    };
  }, [filteredFreelancers, viewModel]);

  return [
    {
      viewModel: derivedState,
      loading,
      error,
      searchTerm,
      selectedCategoryId,
      featuredOnly
    },
    {
      loadData,
      setSearchTerm: landingStore.setSearchTerm,
      setSelectedCategoryId: landingStore.setSelectedCategoryId,
      toggleFeaturedOnly: landingStore.toggleFeaturedOnly,
      resetFilters: landingStore.resetFilters
    }
  ];
}
