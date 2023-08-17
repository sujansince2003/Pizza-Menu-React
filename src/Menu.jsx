import React from 'react';
import PizzaData from "./PizzaData"

const Menu = () => {
    return ( <main className='menu'>
<h2>Our Menu</h2>
    <PizzaData name="hello" image="./pizzas/funghi.jpg" ingredients="hel" price={20} />
    <PizzaData />
    <PizzaData />
    
    
    </main>
    
    );
}
 
export default Menu;
