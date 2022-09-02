import { useState } from 'react';
import './form.css';
import db from './firebase';
import { collection, doc, setDoc,addDoc } from "firebase/firestore";

function Form(){
    
      
var[x,setX]=useState()
var[y,setY]=useState()
var[z,setZ]=useState()
    function Name(e){
        setX(e.target.value)
    
}
function Email(e){
    
    setY(e.target.value)
}
function Message(e){
    setZ(e.target.value)
    
}
 const handleClick=async ()=>{
    console.log(x,y,z)
    await addDoc(collection(db, "class"), {
        name:x,
        email:y,
        message:z
    });
 }
    return(
        <div className='mainC'>
            <h2 className='container'>CONTACT</h2>
            <div className='text'>Fan? Drop a note!</div>
            <div className='mainC1'>
            <div className='c1'>
                <div className='h'>
                <div> Chicago, US</div>
                <div>Phone: +00 151515</div>
                <div>Email: mail@mail.com</div>
                </div>
            </div>
            <div  className='c2'>
                <div className='i4'>
                <input onChange={Name} className='i1' placeholder='Name'></input>
                <input onChange={Email} className='i2' placeholder='Email'></input>
                </div>
                <input onChange={Message} className='i3' placeholder='Message'></input>
                <button className='button'   onClick={handleClick} >SEND</button>
            </div>
            </div>
        </div>
    )
}
export default Form;