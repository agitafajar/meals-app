import Link from "next/link";

export interface DetailMealsCardProps {
  datalist: {
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
  }[];
}

const DetailMealsCard: React.FC<DetailMealsCardProps> = ({ datalist }) => {
  return (
    <>
      <div className="mx-auto max-w-[75%] gap-6">
        {datalist.map((list) => (
          <div key={list.idMeal}>
            <div className=" rounded-lg bg-white border-2 w-full flex flex-col gap-4 p-4">
              <p className="text-left font-semibold uppercase text-2xl text-[#3AEAC1] underline mb-4">
                {list.strMeal}
              </p>
              <div className="flex gap-12">
                <div className="flex flex-col w-[50%]">
                  <img src={list.strMealThumb} className=" rounded-3xl" />
                  <div className="mt-4 flex gap-4">
                    <p className="py-1 px-3 bg-[#FDD171] rounded-xl">
                      {list.strTags ? list.strTags : "Beef"}
                    </p>
                    <p className="py-1 px-3 bg-[#C1FDD7] FC494Drounded-xl">
                      {list.strCategory ? list.strCategory : "Beef"}
                    </p>
                    <p className="py-1 px-3 bg-[#FC494D] rounded-xl">
                      {list.strArea ? list.strArea : "Beef"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-[50%] text-left gap-2">
                  <p className="text-xl text-[#3AEAC1] font-semibold">
                    Instruction
                  </p>
                  <p>{list.strInstructions}</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-1 text-left w-[35%]">
                  <p className="text-xl text-[#3AEAC1] font-semibold mb-2">
                    Recipes
                  </p>
                  <div className="flex gap-2">
                    <p>{list.strIngredient1}</p>
                    <p>{list.strMeasure1}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient2}</p>
                    <p>{list.strMeasure2}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient3}</p>
                    <p>{list.strMeasure3}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient4}</p>
                    <p>{list.strMeasure4}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient5}</p>
                    <p>{list.strMeasure5}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient6}</p>
                    <p>{list.strMeasure6}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient7}</p>
                    <p>{list.strMeasure7}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient8}</p>
                    <p>{list.strMeasure8}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient9}</p>
                    <p>{list.strMeasure9}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient10}</p>
                    <p>{list.strMeasure10}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient11}</p>
                    <p>{list.strMeasure11}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient12}</p>
                    <p>{list.strMeasure12}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient13}</p>
                    <p>{list.strMeasure13}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient14}</p>
                    <p>{list.strMeasure14}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient15}</p>
                    <p>{list.strMeasure15}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient16}</p>
                    <p>{list.strMeasure16}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient17}</p>
                    <p>{list.strMeasure17}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient18}</p>
                    <p>{list.strMeasure18}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient19}</p>
                    <p>{list.strMeasure19}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{list.strIngredient20}</p>
                    <p>{list.strMeasure20}</p>
                  </div>
                </div>
                <div className="w-[65%] gap-1 text-left ">
                  <p className="text-xl text-[#3AEAC1] font-semibold mb-2">
                    Tutorials
                  </p>
                  <iframe
                    src={list.strYoutube}
                    className="w-full h-96 md:h-[500px] lg:h-[400px] rounded-lg"
                    title={list.strMeal}
                    allowFullScreen
                  />
                </div>
              </div>
              <p>Source : {list.strSource}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailMealsCard;
