import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Routes,Route,Link,useNavigate } from 'react-router-dom';
import db from "./firebase";
function Get(){
  const router=useNavigate();
  var [data,setData]=useState([]);
  useEffect(()=>{
    console.log("helllllllllllllp i am from useeffect")
    getData();
  },[])
  async function getData(){
      var d=[]
const querySnapshot = await getDocs(collection(db, "class"));
querySnapshot.forEach((doc) => {
  d=d.concat(doc.data());
});
console.log("data is",d)
setData(d)
  }
  const viewbutton=(l)=>{
    router('/data',{state:l})

  }


  return(
    <div >
      {/* <div>ebwjebsjfkjwekjfnkewjnskd{data.length}</div> */}
      <div className="mainsheet">  {
          data.map((l,index)=>{
            return(
              
              <div key={index} className="sheet">
        <div>id</div>
        <div> name : {l.name}</div>
        <div>email:{l.email}</div>
        <div> message:{l.message}</div>
        <div className="viewButton">
          <button onClick={()=>{
            console.log(l)
            viewbutton(l)
          }} className="b1tton">View</button>
          </div>
       </div>
            )
          })
        }</div>
       
    </div>
  )
}
export default Get;    