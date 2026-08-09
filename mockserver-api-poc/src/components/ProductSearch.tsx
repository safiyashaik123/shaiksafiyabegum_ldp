import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
};

function ProductSearch() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    let url = "http://localhost:3000/products";

    if (category !== "") {
      url += `?category=${category}`;
    }

    console.log(url);

    const response = await fetch(url);
    const data = await response.json();


    setProducts(data);
  }

  return (
    <div>
      <h1>Product Search</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Earbuds">Earbuds</option>
      </select>

      <button onClick={fetchProducts}>
        Search
      </button>

      <hr />

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductSearch;