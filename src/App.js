
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './productSlice';


function App() {
useEffect(()=>{
  fetch('api/todo',{
    method:'post',
    body:JSON.stringify({id:2, text:'test222', done:true})
  })
  
},[])
  
    
  const {count} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  console.log(count)

  const add = ()=>{
    
    
  }
  return (
    <div className="App">
      {count}
      <button onClick={()=>dispatch(increment(10))}>추가</button>
      <button onClick={()=>dispatch(decrement(5))}>빼기</button>
    </div>
  );
}

export default App;
