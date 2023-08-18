import React from "react";
 const PizzaData = ({pizzadata}) => {
   //destructing props here we are using exact name that is used to pass
   //props in menu.jsx
      
      //data ends here
      // const pizzaName=
      // const pizzaName=pizzaData.map(pizname=>
      //   {
      //   return pizname.name
        
      //   }).map(nm=>
      //     {
             
      //        return nm.indexOf(" ")>0? nm.slice(nm.indexOf(" ")):nm;
             
            
      //     })

    return ( 
      <li className={`pizza ${pizzadata.soldOut?"sold-out":null} `}>
        <img src={pizzadata.photoName} alt="" />
        <div>

        <h3>{pizzadata.name}</h3>
        <p>{pizzadata.ingredients}</p>
        <span>{pizzadata.soldOut?"Sold Out":pizzadata.price}</span>
        </div>
      </li>
     );
}
//  export const a=4;
export default PizzaData;