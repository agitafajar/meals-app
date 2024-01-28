import { NextResponse } from "next/server";

interface FilterIngredientResponse {
  ingredient: any[];
}

async function filterIngredient(
  request: Request
): Promise<FilterIngredientResponse> {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
    {
      method: "GET",
    }
  );

  const filterIngredient: FilterIngredientResponse = await response.json();
  return filterIngredient;
}

export async function GET(request: Request): Promise<NextResponse> {
  const detailMeals = await filterIngredient(request);
  return NextResponse.json(detailMeals);
}
