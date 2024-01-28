import { NextResponse } from "next/server";

interface DetailMealResponse {
  meal: any[];
}

async function detailMeal(request: Request): Promise<DetailMealResponse> {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`,
    {
      method: "GET",
    }
  );

  const detailMeal: DetailMealResponse = await response.json();
  return detailMeal;
}

export async function GET(request: Request): Promise<NextResponse> {
  const detailMeals = await detailMeal(request);
  return NextResponse.json(detailMeals);
}
