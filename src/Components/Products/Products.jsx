import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const {products} = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-5 mt-4">
            
        {
            products.map(product => <Product key={products.id} product={product}></Product>)
        }
        </div>
    );
};

export default Products;