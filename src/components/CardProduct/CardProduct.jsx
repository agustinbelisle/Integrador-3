
import { Card } from "./CardProductStyles";

const CardProduct = ({ name, price, image, onClick }) => {
  return (
    <Card onClick={onClick}>
      <img src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <span>${price}</span>
      </div>
    </Card>
  );
};

export default CardProduct;
