import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=["rubel","jasim","salman","maruf","bappi"]
  const products=[
    {name:"Photoshop",price:"$90"},
    {name:"pdf",price:"$10"},
    {name:"design",price:"$60"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>
        <Count></Count>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name={nayoks[0]} job="keraati"></Person>
        <Person name={nayoks[1]} job="petku"></Person>
        <Person name={nayoks[2]} job="xoss"></Person>
        <Person name={nayoks[3]} job="bonduk"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Count(){
  const[count,setCount] = useState(0);
  const handleIncrease = () =>setCount(count+1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease : </button>
      <button onClick={handleIncrease}>Increase : </button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>userList : {users.length}</h3>
      <ul>
        {
               users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    height:'300px',
    width:'400px',
    border:'3px solid cyan',
    borderRadius:'5px',
    padding:'5px'
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h1>Name:{name}</h1>
      <h3>price:{price}</h3>
      <button>Bye me</button>
    </div>
  )
}
function Person(props){
  return (
  <div style={{color:'red',border:'3px solid gray',margin:'10px',padding:'0px 50px'}}>
    <h1>name : {props.name}</h1>
  <h3>title : {props.job}</h3>
  </div>
  )
}

export default App;
