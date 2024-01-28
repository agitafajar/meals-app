"use client";
import React, { useState, useEffect } from "react";
import SearchComponent from "@/app/component/General/SearchComponent";
import FilterIngredientCard from "@/app/component/General/FilterIngredientCard";
import Pagination from "../../component/General/Pagination";

type FilterIngredientProps = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export default function FilterIngredientPage() {
  const [lists, setLists] = useState<FilterIngredientProps[]>([]);
  const [filteredLists, setFilteredLists] = useState<FilterIngredientProps[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 8;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("query");

    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (queryParam) {
          const response = await fetch(
            `/api/ingredient/filter-ingredient?query=${queryParam}`
          );
          const data = await response.json();
          setLists(data.meals);
          setFilteredLists(data.meals);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = lists.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLists(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLists.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="text-center my-12">
      <SearchComponent onSearch={handleSearch} />
      {isLoading ? (
        <div className="w-full h-[50%] absolute flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-[#3AEAC1] border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <FilterIngredientCard datalist={currentItems} />
          <Pagination
            totalItems={filteredLists.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
