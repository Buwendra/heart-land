"use client";

import { useMemo, useState } from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { Search } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";

const openSans = Open_Sans({
  subsets: ["latin"],
});

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  bestseller?: boolean;
};

type CategoryItem = {
  name: string;
  count: number;
  image: string;
};


const initialProducts: Product[] = [
  { id: 1, title: "Essential Electrolytes", price: 1, category: "Biscuits", image: "/productImage1.png", bestseller: true },
  { id: 2, title: "Essential Electrolytes", price: 2, category: "Snacks", image: "/productImage2.png", bestseller: false },
  { id: 3, title: "Essential Electrolytes", price: 3, category: "Rice", image: "/productImage3.png", bestseller: false },
  { id: 4, title: "Essential Electrolytes", price: 4, category: "Sweets", image: "/productImage2.png", bestseller: false },
  { id: 5, title: "Essential Electrolytes", price: 5, category: "Milk", image: "/productImage1.png", bestseller: false },
  { id: 6, title: "Essential Electrolytes", price: 6, category: "Curry Powder", image: "/productImage3.png", bestseller: true },
  { id: 7, title: "Essential Electrolytes", price: 7, category: "Noodles", image: "/productImage2.png", bestseller: false },
  { id: 8, title: "Essential Electrolytes", price: 8, category: "Coconut Milk", image: "/productImage3.png", bestseller: true },
  { id: 9, title: "Essential Electrolytes", price: 9, category: "Jam", image: "/productImage3.png", bestseller: true },
  { id: 10, title: "Essential Electrolytes", price: 10, category: "Spices", image: "/productImage1.png", bestseller: true },
  { id: 11, title: "Essential Electrolytes", price: 11, category: "Oil & Ghee", image: "/productImage1.png", bestseller: true },
  { id: 12, title: "Essential Electrolytes", price: 12, category: "Dairy Products", image: "/productImage1.png", bestseller: true },
  { id: 13, title: "Essential Electrolytes", price: 13, category: "Biscuits", image: "/productImage1.png", bestseller: true },
  { id: 14, title: "Essential Electrolytes", price: 14, category: "Snacks", image: "/productImage2.png", bestseller: false },
  { id: 15, title: "Essential Electrolytes", price: 15, category: "Rice", image: "/productImage3.png", bestseller: false },
  { id: 16, title: "Essential Electrolytes", price: 16, category: "Sweets", image: "/productImage2.png", bestseller: false },
  { id: 18, title: "Essential Electrolytes", price: 17, category: "Milk", image: "/productImage1.png", bestseller: false },
  { id: 19, title: "Essential Electrolytes", price: 18, category: "Curry Powder", image: "/productImage3.png", bestseller: true },
  { id: 20, title: "Essential Electrolytes", price: 19, category: "Noodles", image: "/productImage2.png", bestseller: false },
  { id: 21, title: "Essential Electrolytes", price: 20, category: "Coconut Milk", image: "/productImage3.png", bestseller: true },
  { id: 22, title: "Essential Electrolytes", price: 21, category: "Jam", image: "/productImage3.png", bestseller: true },
  { id: 23, title: "Essential Electrolytes", price: 22, category: "Spices", image: "/productImage1.png", bestseller: true },
  { id: 24, title: "Essential Electrolytes", price: 23, category: "Oil & Ghee", image: "/productImage1.png", bestseller: true },
  { id: 25, title: "Essential Electrolytes", price: 24, category: "Dairy Products", image: "/productImage1.png", bestseller: true },
  { id: 26, title: "Essential Electrolytes", price: 25, category: "Curry Powder", image: "/productImage3.png", bestseller: true },
  { id: 27, title: "Essential Electrolytes", price: 26, category: "Noodles", image: "/productImage2.png", bestseller: false },
  { id: 28, title: "Essential Electrolytes", price: 27, category: "Coconut Milk", image: "/productImage3.png", bestseller: true },
  { id: 29, title: "Essential Electrolytes", price: 28, category: "Jam", image: "/productImage3.png", bestseller: true },
  { id: 30, title: "Essential Electrolytes", price: 29, category: "Spices", image: "/productImage1.png", bestseller: true },
  { id: 31, title: "Essential Electrolytes", price: 30, category: "Oil & Ghee", image: "/productImage1.png", bestseller: true },
  { id: 32, title: "Essential Electrolytes", price: 31, category: "Dairy Products", image: "/productImage1.png", bestseller: true },
  { id: 33, title: "Essential Electrolytes", price: 32, category: "Biscuits", image: "/productImage1.png", bestseller: true },
  { id: 34, title: "Essential Electrolytes", price: 33, category: "Snacks", image: "/productImage2.png", bestseller: false },
  { id: 35, title: "Essential Electrolytes", price: 34, category: "Rice", image: "/productImage3.png", bestseller: false },
  { id: 36, title: "Essential Electrolytes", price: 35, category: "Sweets", image: "/productImage2.png", bestseller: false },
  { id: 38, title: "Essential Electrolytes", price: 36, category: "Milk", image: "/productImage1.png", bestseller: false },
  { id: 39, title: "Essential Electrolytes", price: 37, category: "Curry Powder", image: "/productImage3.png", bestseller: true },
  { id: 40, title: "Essential Electrolytes", price: 38, category: "Noodles", image: "/productImage2.png", bestseller: false },


];

export default function ProductsSection() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<
    "bestselling" | "price-asc" | "price-desc" | "alpha"
  >("bestselling");
  const [showImageOnly, setShowImageOnly] = useState(false);

  // pagination state
  const pageSize = 9; 
  const [page, setPage] = useState(0);

  // derive categories from product data
 const categories = useMemo<CategoryItem[]>(() => {
  const map = new Map<string, number>();

  initialProducts.forEach((p) => {
    const cat = p.category.trim();
    map.set(cat, (map.get(cat) ?? 0) + 1);
  });

  const categoryImageMap: Record<string, string> = {
  Biscuits: "/productImage1.png",
  Snacks: "/productImage2.png",
  Rice: "/productImage3.png",
  Sweets: "/productImage1.png",
  Milk: "/productImage2.png",
  "Curry Powder": "/productImage3.png",
  Noodles: "/productImage1.png",
  "Coconut Milk": "/productImage2.png",
  Jam: "/productImage3.png",
  Spices: "/productImage2.png",
  "Oil & Ghee": "/productImage3.png",
  "Dairy Products": "/productImage1.png",
};


  return Array.from(map.entries()).map(([name, count]) => ({
    image: categoryImageMap[name] || "/productImage1.png",
    name,
    count,
  }));
}, []);



  // toggle category selection
  function toggleCategory(cat: string) {
    if (cat === "View All") {
      setSelectedCategories([]); 
      setPage(0);
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setPage(0);
  }

  // filtered + sorted products
const filtered = useMemo(() => {
  let list = initialProducts.slice();

  //   Category filter
  if (selectedCategories.length > 0) {
  list = list.filter((p) =>
    selectedCategories.includes(p.category.trim())
  );
}


  //   Search filter
if (query.trim()) {
  const q = query.toLowerCase();
  list = list.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

  //   Sorting
  if (sortBy === "bestselling") {
    list = list.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
  } else if (sortBy === "price-asc") {
    list = list.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    list = list.sort((a, b) => b.price - a.price);
  } else if (sortBy === "alpha") {
    list = list.sort((a, b) => a.title.localeCompare(b.title));
  }

  return list;
}, [query, selectedCategories, sortBy]);


  // pagination helpers
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const clampPage = (p: number) => Math.max(0, Math.min(totalPages - 1, p));
  const goToPage = (p: number) => setPage(clampPage(p));
  const paginated = filtered.slice(page * pageSize, (page + 1) * pageSize);

  const [showFilters, setShowFilters] = useState(false);


  return (
    <div
  className={`${openSans.className} w-full max-w-[1200px] mx-auto py-8 px-4`}
>
  <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 justify-center">

 {/* ================= MOBILE SEARCH BAR ================= */}
<div className="lg:hidden mb-6">
  <div className="flex items-center gap-3">
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search category"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full border px-4 py-3 pr-10 text-sm"
      />

      <Search
        size={19}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B0000]"
      />
    </div>

    <button
  onClick={() => setShowFilters(!showFilters)}
  className="px-5 py-3 rounded-full bg-red-100 flex items-center justify-center"
>
  <SlidersHorizontal size={18} className="text-red-600" />
</button>

  </div>

  {/* Filter panel inline under search bar */}
  {showFilters && (
    <div className="bg-white rounded-2xl p-5 shadow-md mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">All categories</h3>
         
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
  key={cat.name}
  onClick={() => {
    toggleCategory(cat.name); 
  }}
  className={`flex items-center justify-between gap-3 p-3 rounded-2xl border shadow-sm transition
  ${
    selectedCategories.includes(cat.name)
      ? "border-[#8B0000] bg-red-50"
      : "border-gray-200 bg-gray-50"
  }`}

>
<div className="flex items-center justify-between gap-3 w-full">
  
  {/* TEXT */}
  <div className="text-left flex-1 min-w-0">
    <p className="text-sm font-bold truncate">
      {cat.name}
    </p>
    <p className="text-xs text-gray-500 whitespace-nowrap">
      {cat.count} products
    </p>
  </div>

  {/* IMAGE */}
  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
    <Image
      src={cat.image}
      alt={cat.name}
      width={40}
      height={40}
      className="object-cover"
    />
  </div>

</div>

  
</button>

        ))}
      </div>
    </div>
  )}
</div>
  

    {/* Categories (left) */}
        <aside className="hidden lg:block mt-5  leading-14">
          <div className="space-y-3">
            <div className="flex items-center  justify-between ">
              <h4 className="font-bold mb-7 text-[28px]">Categories</h4>
            </div>

            <div className="flex flex-col gap-9">
              {categories
  .filter((c) => c.name !== "View All")
  .map((cat) => {
    const checked = selectedCategories.includes(cat.name);

    return (
      <label
        key={cat.name}
        className="flex items-center gap-6 text-lg cursor-pointer select-none"
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() => toggleCategory(cat.name)}
          className="w-4 h-4 cursor-pointer"
        />
        <span className={checked ? "font-medium" : "text-[#495057]"}>
          {cat.name}
        </span>
      </label>
    );
  })}

            </div>
          </div>
        </aside>

        {/* Product grid */}
        <main>
          <div className="mb-6 mt-9 text-center lg:text-left">
  <p className="uppercase text-black tracking-[0.5em] text-sm font-bold mb-5">
    Product
  </p>

  <h3 className="text-xl lg:text-4xl font-bold tracking-tight">
    PICK YOUR FAVORITE FOOD
  </h3>

  <p className="text-black mt-2 text-base lg:text-lg font-normal max-w-5xl leading-9 mx-auto lg:mx-0">
    Discover our wide range of authentic Sri Lankan products, thoughtfully sourced
    and carefully packaged to meet international standards. This section is designed to
    help supermarket owners, distributors, and trade partners explore our product
    portfolio and gain insight into the quality and variety we deliver across the UAE and
    beyond.
  </p>
</div>


          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 px-8 md:px-0">
            {paginated.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-20">No products found.</div>
            ) : (
              paginated.map((p) => (
                <article
                key={p.id}
                className="bg-white rounded-xl shadow-sm p-2 md:p-0 hover:shadow-lg transition-shadow duration-200"
>

  <div
  className="
    rounded-2xl overflow-hidden mb-3
    flex items-center justify-center 
    w-[85%] mx-auto
    h-[250px]
    bg-white
    md:w-full md:h-[350px] md:bg-black
  "
>
  <div
    className="
      relative w-full
      h-[200px] md:h-[350px]
      rounded-2xl overflow-hidden
      flex items-center justify-center
      bg-white md:bg-black
    "
  >
    <Image
      src={p.image}
      alt={p.title}
      fill
      className="object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>


  {!showImageOnly ? (
  <div className="bg-gray-100 rounded-b-xl p-4">
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-semibold text-sm">{p.title}</h4>
    </div>
    <div className="text-3xl font-bold">${p.price}</div>
  </div>
) : (
  <div className="h-0 m-0 p-0"></div>
)}

                </article>
              ))
            )}
          </div>

          {/* Slider Controls: arrows + dots */}
          <div className="w-full flex items-center justify-center gap-96 mt-10">
            {/* Left Arrow */}
            <button
              onClick={() => goToPage(page - 1)}
              className="text-xl font-bold px-4 py-2 cursor-pointer transition-all duration-300 ease-out hover:scale-120 hover:-translate-y-1"
              aria-label="Previous page"
            >
             &#x2190;
            </button>

            {/* Dots */}
<div className="flex items-center gap-0">
  {Array.from({ length: totalPages }).map((_, i) => (
    <button
      key={i}
      onClick={() => goToPage(i)}
      aria-label={`Go to page ${i + 1}`}
      className="relative w-4 h-4 flex items-center cursor-pointer justify-center"
    >
      {/* Outer Ring */}
      <span
        className={`absolute w-4 h-4 rounded-full transition 
          ${i === page ? "border border-black" : "border border-transparent"}`}
      />

      {/* Inner Dot */}
      <span
        className={`absolute w-1 h-1 rounded-full transition cursor-pointer 
          ${i === page ? "bg-black" : "bg-black"}`}
      />
    </button>
  ))}
</div>


            {/* Right Arrow */}
            <button
              onClick={() => goToPage(page + 1)}
              className="text-xl font-bold px-4 py-2 cursor-pointer transition-all duration-300 ease-out hover:scale-120 hover:-translate-y-1"
              aria-label="Next page"
            >
              &#x2192;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
