import "../css/menu.css";

const Menu = (props) => {

    const { burgerData } = props;
    

    return (
      <div>
        <h1 className="text-center">Menu</h1>
        {burgerData.map((burger, index) => (
          <div className="row burger-box burger-boxRadius">
          <div key={index} className="burger-box col-4 offset-1">
            <img className = "img" src={'/imgs/'+ burger.Photo} alt={"Burger img"} />
          </div>
          <div className="col-4">
            <h2>{burger.BurgerType}</h2>
            <p>{burger.Description}</p>
            <p>Price: {burger.Price}</p>
            <button>Add to cart</button>
          </div>
          </div>
        ))}
      </div>
    );
  };
 
export default Menu;