import './home.css';
import { Routes,Route,Link,useNavigate } from 'react-router-dom';
import {useState} from 'react'
function Page()
{
// {  var[x,setX]=useState()
//   var[y,setY]=useState()
    const router=useNavigate();
    function ad(){
        router('/form')
    }
    function ge(){
        router('/get')
    }
    // function a(e)
    // {
    //   setX(e.target.value)
    // }
    // function g(e)
    // {
    //    setY(e.target.value)
    // }
    
  return(
    <div className='vamsi' >
      {/* <input placeholder='enter to add data'></input>
      <input placeholder='enter to get data'></input> */}
        <div   className='home_container'>
          <div className='mahi'>
        <button onClick={ad} className="b1styling">AddData</button>
       <button onClick={ge} className="b2styling">GetData</button>
       </div>
       </div>
    </div>
  )
}
export default Page;    