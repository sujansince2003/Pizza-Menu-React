import React, { cloneElement } from "react";
 const PizzaData = (props) => {
   
      
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
      <li className="pizza">
        <img src={props.pizzadata.photoName} alt="" />
        <div>

        <h3>{props.pizzadata.name}</h3>
        <p>{props.pizzadata.ingredients}</p>
        <span>{props.pizzadata.price}</span>
        </div>
      </li>
     );
}
//  export const a=4;
export default PizzaData;