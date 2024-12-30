"use client";

import { fetchRecommendation } from "@/store/slices/recommendationSlice";
import { RootState, AppDispatch } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IRecomendationsProps {
  userId: string;
  topic: string;
}

const Recomendations = ({ userId, topic }: IRecomendationsProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { recommendation, loading, error } = useSelector(
    (state: RootState) => state.recommendation
  );

  useEffect(() => {
    dispatch(fetchRecommendation({ userId, topic }));
  }, [dispatch, userId, topic]);
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold">Personalized Recommendation</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {recommendation && (
        <p className="text-green-600">Recommended: {recommendation}</p>
      )}
    </div>
  );
};

export default Recomendations;
