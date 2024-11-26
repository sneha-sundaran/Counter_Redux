import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice';

function Counter() {

  const[amount,setAmount]=useState(0)

  const dispatch=useDispatch()

 const{count}= useSelector((state)=>state.counterReducer)

 const handleincrementAmount=()=>{
  if (amount){

    dispatch(incrementByAmount(Number(amount)))

  }else{
    alert("please enter the amount")
  }
 }
  return (
    <>
     <div className="main bg-black"style={{minHeight:'100vh',color:'white'}}>
     <h1 style={{textAlign:'center'}}>Counter App</h1>
    <div className="content" style={{height:'400px',width:'800px',backgroundColor:'black',border:'1px solid white',marginLeft:'20%'}}>
    <h1  style={{textAlign:'center'}}>{count}</h1>

    <div className="buttons d-flex justify-content-around mt-5" style={{alignItems:'center'}}>
    <Button onClick={()=>dispatch(decrement())} variant="warning" style={{width:'150px' ,borderRadius:'5px'}}>Decrement</Button>
    <Button onClick={()=>dispatch(reset())} variant="danger" style={{width:'150px' ,borderRadius:'5px'}}>Reset</Button>
    <Button onClick={()=>dispatch(increment())} variant="success" style={{width:'150px' ,borderRadius:'5px'}}>Increment</Button>
    </div>

 <div className='inputfield d-flex' style={{marginLeft:'13%',marginTop:'100px'}}>
        <Form.Group className="mb-3" controlId="amount">
           
            <Form.Control type="text" placeholder="Enter counter amount" onChange={(e)=>setAmount(e.target.value)} style={{height:'40px' ,width:'450px',borderRadius:'5px'}} />
            
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleincrementAmount} style={{height:'40px' ,width:'120px',fontSize:'12px',marginLeft:'10px',borderRadius:'5px'}}>
            Increment By the value 
          </Button>
 </div>
    </div>
     </div>
    </>
  )
}

export default Counter