import { useState } from 'react';
import { useLocation } from 'react-router-dom';


function Data()
{
    let location = useLocation();
    var[data,setData]=useState(location.state)
    // setData(data.name)
    // console.log("location is",location)
    
    
    return(
        <div>
       <div >THE DETAILS ARE</div>
       <div className='details'>
        <div >
       <div >NAME="{data.name}"</div>
       <div>EMAIL="{data.email}"</div>
       <div>MESSAGE="{data.message}"</div>
       </div>
       {/* <button onClick={g}>show</button></div> */}
       </div>
       </div>
    )

}

export default Data;