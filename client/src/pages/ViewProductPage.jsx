import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ViewProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const userData = useContext(UserContext);

  const product = products.filter((p) => p.id == params.id)[0];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title</h2>
        <p>Content</p>
        <div className="product">
          <div className="product-preview">
            <img src={product.image} alt={product.name} width="250" height="250" />
          </div>
          <div className="product-detail">
            <h1>Product name: {product.name}</h1>
            <h2>Product price: {product.price}</h2>
            <p>Product description: {product.description}</p>
            <div className="product-actions"></div>
          </div>
        </div>
      </div>

      <div className="product-promotion-box">
        <h2>คุณคือสมาชิกในระดับ {userData.level} ดังนั้นคุณได้สิทธิพิเศษลด 50%</h2>
        <button onClick={() => alert("ล้อลเล่น สมน้ำหน้า!!🥳🥳🥳🥳")}>กดรับสิทธิ</button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
