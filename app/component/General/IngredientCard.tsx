import Link from "next/link";

interface IngredientCardProps {
  datalist: {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    strType: string;
  }[];
}

const IngredientCard: React.FC<IngredientCardProps> = ({ datalist }) => {
  return (
    <>
      <div className="grid grid-cols-2 mx-auto max-w-[75%] gap-6">
        {datalist.map((list) => (
          <div key={list.idIngredient}>
            <div className=" rounded-lg bg-white flex border-2 text-left mr-4">
              <div className="bg-[#3AEAC1] w-[10%] rounded-l-lg"></div>
              <div className="py-3 px-4 flex flex-col gap-10 justify-between w-[90%]">
                <div>
                  <p className="text-xl font-semibold">{list.strIngredient}</p>
                  <p className="overflow-hidden line-clamp-2">
                    {list.strDescription}
                  </p>
                </div>
                <div className="w-full justify-end flex ">
                  <Link
                    href={`/ingredient/filter-ingredient?query=${list.strIngredient}`}
                    className="px-8 py-1.5 rounded-lg border-2 border-[#3AEAC1] transition duration-300 hover:bg-[#3AEAC1] hover:text-white"
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

export default IngredientCard;
