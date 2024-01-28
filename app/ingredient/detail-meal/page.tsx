"use client";
import DetailMealsCard from "@/app/component/General/DetailMealsCard";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export interface DetailMealProps {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: any;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: any;
  strCreativeCommonsConfirmed: any;
  dateModified: any;
}

export default function DetailMealPage() {
  const [lists, setLists] = useState<DetailMealProps[]>([]);
  const [filteredLists, setFilteredLists] = useState<DetailMealProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const urlParams = new URLSearchParams(window.location.search);
  const queryParam = urlParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (queryParam) {
          const response = await fetch(
            `/api/ingredient/detail-meal?query=${queryParam}`
          );
          const data = await response.json();
          const limitedMeals = data.meals.slice(0, 50);
          setLists(limitedMeals);
          setFilteredLists(limitedMeals);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryParam]);

  return (
    <div className="text-center my-12">
      {isLoading ? (
        <div className="w-full h-[50%] absolute flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-[#3AEAC1] border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <DetailMealsCard datalist={filteredLists} />
      )}
    </div>
  );
}
