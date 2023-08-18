import React from 'react';
import PizzaData from "./PizzaData"
const pizzaobj = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
const Menu = () => {
    const pizzanum=pizzaobj.length;
   
   
    return (
<main className='menu'>
     <h2>Our Menu</h2>
     {
        pizzanum>0?(<ul className='pizzas'>
        {
            pizzaobj.map((pizza,index)=>

                 (<PizzaData key={index} pizzadata={pizza} />   )
                //  we will use exact pizzadata name to destruct props
            
                )
        }
     
    </ul> ): <p>Not available</p>
     }
      
    
    
</main>
    
    );
}
 
export default Menu;

// console.log(pizzaobj.map((m)=>
// {
//     return m;
// }))