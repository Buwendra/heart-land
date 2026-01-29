"use client";

import { useMemo, useState } from "react";
import { openSans } from "@/app/fonts";
import Image from "next/image";
import { Search } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";


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
  // Jams
  { id: 1, title: "Pine Apple (450g)", price: 0, category: "Jams", image: "/products/_DSC0228.JPG" },
  { id: 2, title: "Woodapple (450g)", price: 0, category: "Jams", image: "/products/_DSC0224.JPG" },
  { id: 3, title: "Mixed Fruit (450g)", price: 0, category: "Jams", image: "/products/_DSC0226.JPG" },

  // Rice
  { id: 4, title: "Red Raw Rice (1Kg & 5Kg)", price: 0, category: "Rice", image: "/products/_DSC0207_.jpg" },
  { id: 5, title: "White Nadu Rice (5Kg)", price: 0, category: "Rice", image: "/products/_DSC0208.JPG" },
  { id: 6, title: "Keeri Samba Rice (1Kg)", price: 0, category: "Rice", image: "/products/_DSC0210.JPG" },
  { id: 7, title: "White Raw Rice (1Kg)", price: 0, category: "Rice", image: "/products/_DSC0211.JPG" },
  { id: 8, title: "Samba Rice (1Kg)", price: 0, category: "Rice", image: "/products/_DSC0212.JPG" },
  { id: 9, title: "Red Raw Samba Rice (1Kg)", price: 0, category: "Rice", image: "/products/_DSC0213.JPG" },

  // Noodles
  { id: 10, title: "Kottu Noodles (400g)", price: 0, category: "Noodles", image: "/products/_DSC0201.jpg" },
  { id: 11, title: "Special Noodles (400g)", price: 0, category: "Noodles", image: "/products/_DSC0202.jpg" },
  { id: 12, title: "Kurakkan Noodles (400g)", price: 0, category: "Noodles", image: "/products/_DSC0204.jpg" },
  { id: 13, title: "Noodles (400g)", price: 0, category: "Noodles", image: "/products/_DSC0205.jpg" },

  // Flour
  { id: 14, title: "Kurakkan Flour (400g)", price: 0, category: "Flour", image: "/products/_DSC0230.jpg" },
  { id: 15, title: "String Hopper Flour (700g)", price: 0, category: "Flour", image: "/products/_DSC0232_.jpg" },
  { id: 16, title: "Thosai Mix (400g)", price: 0, category: "Flour", image: "/products/_DSC0233_.jpg" },
  { id: 17, title: "Easy Hopper Flour (400g)", price: 0, category: "Flour", image: "/products/_DSC0235_.jpg" },
  { id: 18, title: "Special Papadam (50g)", price: 0, category: "Flour", image: "/products/_DSC0237.JPG" },

  // Bottled Items
  { id: 19, title: "Chinese Chilli Paste (325g)", price: 0, category: "Bottled Items", image: "/products/_DSC0220.JPG" },
  { id: 20, title: "Mango Chutney (450g)", price: 0, category: "Bottled Items", image: "/products/_DSC0221.JPG" },
  { id: 21, title: "Maldive Fish Sambol (250g)", price: 0, category: "Bottled Items", image: "/products/_DSC0222.JPG" },
  { id: 22, title: "Sinhalese Pickle (350g)", price: 0, category: "Bottled Items", image: "/products/_DSC0223.JPG" },
  { id: 23, title: "Katta Sambol (350g)", price: 0, category: "Bottled Items", image: "/products/_DSC0225.JPG" },

  // Dry Fish
  { id: 24, title: "Katta Fish Fry (100g)", price: 0, category: "Dry Fish", image: "/products/_DSC0244.JPG" },
  { id: 25, title: "Maldive Fish Chips (100g)", price: 0, category: "Dry Fish", image: "/products/_DSC0247.JPG" },
  { id: 26, title: "Sprats Badum (100g)", price: 0, category: "Dry Fish", image: "/products/_DSC0257.JPG" },
  { id: 27, title: "Dried Fish Talapath (200g)", price: 0, category: "Dry Fish", image: "/products/_DSC0273.jpg" },
  { id: 28, title: "Dried Fish - Keeramin (200g)", price: 0, category: "Dry Fish", image: "/products/_DSC0284.jpg" },
  { id: 29, title: "Dried Sprats (200g)", price: 0, category: "Dry Fish", image: "/products/_DSC0286_.jpg" },
  { id: 30, title: "Dried Fish - Shrimp (100g)", price: 0, category: "Dry Fish", image: "/products/_DSC0284.jpg" },
  { id: 31, title: "Dried Fish - KATTA (200g)", price: 0, category: "Dry Fish", image: "/products/_DSC0291.JPG" },

  // Spices
  { id: 32, title: "Crushed Pepper (100g)", price: 0, category: "Spices", image: "/products/_DSC0246.JPG" },
  { id: 33, title: "Roaster Curry Powder (Black) (100g)", price: 0, category: "Spices", image: "/products/_DSC0248.JPG" },
  { id: 34, title: "Mustard Seeds (100g)", price: 0, category: "Spices", image: "/products/_DSC0249.JPG" },
  { id: 35, title: "Chilli Powder (100g)", price: 0, category: "Spices", image: "/products/_DSC0250.jpg" },
  { id: 36, title: "Turmeric Powder (100g)", price: 0, category: "Spices", image: "/products/_DSC0251.jpg" },
  { id: 37, title: "Jaffna Curry Powder (100g)", price: 0, category: "Spices", image: "/products/_DSC0253.jpg" },
  { id: 38, title: "Plain Curry Powder (100g)", price: 0, category: "Spices", image: "/products/_DSC0254.jpg" },
  { id: 39, title: "Sago Seeds (100g)", price: 0, category: "Spices", image: "/products/_DSC0256.JPG" },
  { id: 40, title: "Coriander Seeds (100g)", price: 0, category: "Spices", image: "/products/_DSC0260.JPG" },
  { id: 41, title: "Crushed Chilli (100g)", price: 0, category: "Spices", image: "/products/_DSC0261.JPG" },
  { id: 42, title: "Cinnamon Stick (100g)", price: 0, category: "Spices", image: "/products/_DSC0262.JPG" },
  { id: 43, title: "Cummin Seeds (100g)", price: 0, category: "Spices", image: "/products/_DSC0263.JPG" },
  { id: 44, title: "Calumba Wood / Venivelgata (100g)", price: 0, category: "Spices", image: "/products/_DSC0264.JPG" },
  { id: 45, title: "Goraka / Black Tamarind (100g)", price: 0, category: "Spices", image: "/products/_DSC0265.jpg" },
  { id: 46, title: "Fenugreek (100g)", price: 0, category: "Spices", image: "/products/_DSC0267.jpg" },
  { id: 47, title: "Pepper Powder (100g)", price: 0, category: "Spices", image: "/products/_DSC0275.JPG" },
  { id: 48, title: "Dried Chilli (100g)", price: 0, category: "Spices", image: "/products/_DSC0290.JPG" },
  { id: 49, title: "Tamarind (100g)", price: 0, category: "Spices", image: "/products/_DSC0279.jpg" },
  { id: 50, title: "Pepper Whole (100g)", price: 0, category: "Spices", image: "/products/_DSC0299.jpg" },
  { id: 51, title: "Curd Chilli (100g)", price: 0, category: "Spices", image: "/products/_DSC0277.jpg" },
  { id: 52, title: "Dehydrated Jack Fruit (100g)", price: 0, category: "Spices", image: "/products/_DSC0280.JPG" },

  // Savoury
  { id: 53, title: "Appalam (50g)", price: 0, category: "Savoury", image: "/products/_DSC0238.JPG" },
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
  Jams: "/productImage1.png",
  Rice: "/productImage3.png",
  Noodles: "/productImage2.png",
  Flour: "/productImage1.png",
  "Bottled Items": "/productImage2.png",
  "Dry Fish": "/productImage3.png",
  Spices: "/productImage1.png",
  Savoury: "/productImage2.png",
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
