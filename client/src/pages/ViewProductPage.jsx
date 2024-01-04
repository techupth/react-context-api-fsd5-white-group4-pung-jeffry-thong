import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import UserContext from "../components/UserContext";

function ViewProductPage() {
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  const level = userData.level;
  const { id } = useParams();

  let viewProduct;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === parseInt(id)) {
      viewProduct = products[i];
      break;
    }
  }
  const { name, price, image, description } = viewProduct;
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title: {name}</h2>
        <p>Content: {description}</p>
        <p>Price: {price}</p>
        <img src={image} alt={name} width="250px" height="250px" />
      </div>

      <div className="product-promotion-box">
        <h2>คุณคือสมาชิกในระดับ {level} ดังนั้นคุณได้สิทธิพิเศษลด 50%</h2>
        <button
          onClick={() =>
            alert("You are entitled to a special discount of 50% 🥳🥳🥳🥳")
          }
        >
          กดรับสิทธิ
        </button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
