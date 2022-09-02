import logo from './logo.svg';
import './App.css';
import Page from './home';
import Add from './adddata';
import Get from './getdata';
import Form from './form'
import Data from './data'
import db from './firebase';
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from 'react';
import { Routes,Route,Link,useNavigate } from 'react-router-dom';


function App() {

  
  return (
    // <Page/>
    
    // <div>Appppppppppppppppppppp</div>
     <Routes>
      <Route path='/' element={<Page/>} > </Route>
      <Route path='data' element={<Data/>}></Route>
         <Route path="/form" element={<Form/>} ></Route>
         <Route path="/get" element={<Get/>} ></Route>

     </Routes>
    // <Form/>
  );
}

export default App;
























// const App1=()=>{
//   const router=useNavigate();
//   const handleClick=()=>{
//       router('/form')
//   }
//   return(
//     <div>
//         <h1>helo dashboard</h1>
//         <button  onClick={handleClick} >form</button>
//         {/* <a href='/form' >form</a> */}
//         {/* <Link to="/form" >form</Link> */}
//     </div>
//   )
// }