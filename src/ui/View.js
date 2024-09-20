import axios from 'axios'
import React, { useState } from 'react'

export default function View() {
    const [result,setResult]=useState('');
    axios.get("http://localhost:8080/allusers",{}).then((res)=>{
        setResult(res.data)
    })
    if(result==null){
  return (
    <div>
        result is fetching 
    </div>
  );
    }
    else{
        return (
            <div>
              {result}  
            </div>
          );
    }
}
