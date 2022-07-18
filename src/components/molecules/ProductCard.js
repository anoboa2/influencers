import Button from '../atoms/Button';
import Card from '../atoms/Card';

// create a product card component
const ProductCard = ({ product, onClick }) => {

  const { name, description, price } = product;

  return (
    <Card>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <Button text="Buy Now" onClick={onClick} />
    </Card>
  );
}

export default ProductCard;