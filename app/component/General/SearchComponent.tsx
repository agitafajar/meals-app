import React, { useState, ChangeEvent } from "react";

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="mb-8">
      <p className="mb-2 font-semibold text-2xl uppercase">Search Ingredient</p>
      <input
        type="text"
        className="border-[#84FADF] p-2 rounded-xl w-[50%] text-center border-2"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchComponent;
