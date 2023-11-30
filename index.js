The .map() method allows you to run a function on each item in the array, returning a new array as the result.

In React, map() can be used to generate lists.

  As DSA : 
let myArr = ['mango', 'banana', 'litchi'];

const myList = myArr.map((item)=>{
  console.log(item);
   return item;
})


console.log(myList);

In react:
import React from 'react'

const App = () => {
let myArr = ['mango', 'banana', 'apple', 'litchi', 'pinapple'];
let myList = myArr.map((item)=>{
    return <li>{item}</li>;
})
  return (
    <div>
       <ol>
       {myList}
       </ol>
    </div>
  )
}

export default App;
