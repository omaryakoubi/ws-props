import Item from "./Item";

const ItemList = ({ cart, handleClick }) => {
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Item cart={cart} handleClick={handleClick} />;
    </div>
  );
};

export default ItemList;
