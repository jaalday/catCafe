const Menu = () => {




  return (
    <div className="menuCard">
      <h1 className="menuTitle">Menu</h1>
      <section>
   
       
        
        <h3 className="drinks">Drinks</h3>
        <article className="item"><p>Latte</p><p className="price">$3.99</p></article>
        
        <article className="item"><p>Mocha</p><p className="price">$3.99</p></article>
        <article className="item"><p>Espresso</p><p className="price">$4.99</p></article>
        <article className="item"><p>Tea</p><p className="price">$2.99</p></article>
        <article className="item"><p>Smoothie</p><p className="price">$5.99</p></article>
        <article className="item"><p>Coffee</p><p className="price">$3.99</p></article>
        <article className="item"><p>Mimosa</p><p className="price">$6.99</p></article>
      
      </section>
      <br/>
      <section>
   
        <h3 className="drinks">Food</h3>
        <article className="item"><p>Honey Croissants</p><p className="price">$9.99</p></article>
     
        <article className="item"><p>Bagel</p><p className="price">$5.99</p></article>
        <article className="item"><p>House Salad</p><p className="price">$7.99</p></article>
       <article className="item"><p>French Toast</p><p className="price">$11.99</p></article> 
       <article className="item"><p>Avocado Toast</p><p className="price">$8.99</p></article>
     
   
      </section>
      <section>
        <h3 className="drinks">Desserts</h3>
        <article className="item"><p>Pastry</p><p className="price">$4.99</p></article>
        <article className="item"><p>Donut</p><p className="price">$3.99</p></article>
        <article className="item"><p>Chocolate Cake</p><p className="price">$6.99</p></article>
        <article className="item"><p>Cheese Cake</p><p className="price">$6.99</p></article>
        <article className="item"><p>Strawberry Tart</p><p className="price">$6.99</p></article>
      </section>
    </div>
  );
}

export default Menu;