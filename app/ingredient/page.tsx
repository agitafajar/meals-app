"use client";
import { useState, useEffect } from "react";
import IngredientCard from "../component/General/IngredientCard";
import SearchComponent from "../component/General/SearchComponent";
import Pagination from "../component/General/Pagination";

type IngredientCardProps = {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
};

export default function IngredientPage() {
  const [lists, setLists] = useState<IngredientCardProps[]>([]);
  const [filteredLists, setFilteredLists] = useState<IngredientCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/ingredient");
        const data = await response.json();
        setLists(data.meals);
        setFilteredLists(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = lists.filter((meal) =>
      meal.strIngredient.toLowerCase().includes(searchTerm.toLowerCase())
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
          <IngredientCard datalist={currentItems} />
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
