import PropTypes from "prop-types";

const Item = ({ cart, handleClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {cart.map((product) => {
        return (
          <div key={product.name} onClick={() => handleClick(product.name)}>
            <img
              src={product.img}
              alt={product.name}
              height={160}
              width={200}
            />
            <h4 style={{ textAlign: "center" }}>{product.name}</h4>
            <h5 style={{ textAlign: "center" }}>{product.price}$</h5>
          </div>
        );
      })}
    </div>
  );
};

Item.propTypes = {
  cart: PropTypes.array,
  handleClick: PropTypes.func,
};

export default Item;
