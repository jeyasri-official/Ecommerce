// services/productsService.js
import { createContext, useContext,useState,useEffect} from "react";
const Context=createContext(null);
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=1000");
  // const res =await fetch("/realistic_books.json")
  const data = await res.json();
  // console.log(data,"this is my name")
  return data.products; // or just `return data` if you want the full object
}

function ProductList({children}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

//  if (loading) return <p>Loading...</p>;

  return (
    <Context.Provider value={{products,setProducts}}>
        {children}
    </Context.Provider>
  );
}
export const useProduct =()=>useContext(Context)
export default ProductList;
