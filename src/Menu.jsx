const Menu = () => {




  return (
    <div className="menuCard">
      <h1>Menu</h1>
      <ul>
        <p>Can be made substituted almond or oat milk</p>
        <h3 className="menuTitle">Drinks</h3>
        <li>Latte</li>
        
        <li>Mocha</li>
        <li>Espresso</li>
        <li>Mimosa</li>
        <li>Green Tea</li>
        <li>Coffee</li>
        <li>Macha</li>
      </ul>
      <ul>
        <h3 className="menuTitle">Food</h3>
        <article className="item"><p >Honey Croissants</p><p className="price"></p>$9.99</article>
        <p>comes with 5</p>
        <article className="item"><p>Bagel</p><p className="price">$5.99</p></article>
        <li>Salad</li>
        <li>Toast</li>
        <li>Pastry</li>
        <li>Donut</li>
      </ul>
    </div>
  );
}

export default Menu;