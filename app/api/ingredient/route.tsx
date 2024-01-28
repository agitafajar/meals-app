import { NextResponse } from "next/server";

async function fetchIngredient() {
  const response = await fetch(
    "http://www.themealdb.com/api/json/v1/1/list.php?i=list",
    {
      method: "GET",
    }
  );

  const meals = await response.json();
  return meals;
}

export async function GET() {
  const meals = await fetchIngredient();
  return NextResponse.json(meals);
}
