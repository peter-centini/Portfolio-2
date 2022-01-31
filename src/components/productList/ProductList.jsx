import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Création & Inspiration. Sa c'est Peter</h1>
        <p className="pl-desc">
          Peter est un développeur créatif que votre travail attendait.
          De belles Créations, de superbes styles Design et bien plus encore vous attendent si vous avez le courage de le prendre comme dev junior.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;