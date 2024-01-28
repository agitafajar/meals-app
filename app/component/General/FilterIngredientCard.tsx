import Link from "next/link";

interface FilterIngredientCardProps {
  datalist: {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }[];
}

const FilterIngredientCard: React.FC<FilterIngredientCardProps> = ({
  datalist,
}) => {
  return (
    <>
      <div className="grid grid-cols-4 mx-auto max-w-[75%] gap-6">
        {datalist.map((list) => (
          <div key={list.idMeal}>
            <div className=" rounded-lg bg-white flex flex-col border-2 text-left mr-4 p-4 h-[450px]">
              <img src={list.strMealThumb} className="rounded-lg mb-4" />
              <div className="flex flex-col gap-10 justify-between h-[90%] ">
                <p className="text-lg font-semibold ">{list.strMeal}</p>
                <div className="w-full justify-end flex ">
                  <Link
                    href={`/ingredient/detail-meal?query=${list.idMeal}`}
                    className="px-8 py-1.5 rounded-lg border-2 border-[#3AEAC1] bg-[#3AEAC1] text-white transition duration-300 hover:bg-white hover:text-[#3AEAC1]"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterIngredientCard;
