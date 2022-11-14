import React from 'react'
const Hello=props=>{
   console.log("Hello被调用了");
   let {name}=props;
    return (
       <>
          <h3>Hello组件</h3>
          <p>name:{name}</p>
       </>
    )
}
export default Hello;
