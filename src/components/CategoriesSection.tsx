import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        Our Categories
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Silk Staller"
          image="product image 6.jpg"
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Arabic Naqab"
          image="product image 10.jpg"
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Abaya"
          image="luxury category 3.png"
          link="summer-edition"
        />
        <CategoryItem
          categoryTitle="Half Naqab"
          image="luxury category 4.png"
          link="special-edition"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
