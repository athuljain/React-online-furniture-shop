import { useParams } from "react-router-dom";
import { products } from "./products"

export default function ViewProduct(){
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);

  console.log(product);

  if (!product) {
    return <div>No Product Found</div>;
  }

    return(

        <div>
        <div>
            <h1>Product</h1>
        </div>
        <h2>{product.title}</h2>
        <h4>category:{product.category}</h4>
        <h4>Price:{product.price}</h4>
        <button>add to cart</button>
        <button>add to wishlist</button>
        </div>
    )
}