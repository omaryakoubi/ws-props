import Nav from "./components/Nav";
import ItemList from "./components/ItemList";

function App() {
  const handleClick = (name) => {
    alert(name);
  };

  const cart = [
    {
      img: "https://www.tunisianet.com.tn/188050-large/telephone-portable-apple-iphone-12-pro-max-5g-256-go-bleu.jpg",
      name: "Iphone 12 Pro Max",
      price: 1100,
    },
    {
      img: "https://www.tunisianet.com.tn/149762-large/samsung-galaxy-s20-plus-gris.jpg",
      name: "Samsung Galaxy S20",
      price: 900,
    },
    {
      img: "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=XI229c1",
      name: "Redmi Note 10 Pro",
      price: 300,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Nav />
      <ItemList cart={cart} handleClick={handleClick} />
    </div>
  );
}

export default App;
