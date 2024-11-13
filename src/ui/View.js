import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function View() {
  const [result ,setResult] = useState(null)


    function handleDelete(email){
       axios.delete("https://jfsd-spring-hosting-production-2a1b.up.railway.app/delete",{params:{
        email:email
       }}).then((res)=>{
       alert(res.data)
       setResult(null)
       })
    }

    
    function funUpdate (name, role, email, password) {
      document.getElementsByName("e_name")[0].value = name;
      document.getElementsByName("e_role")[0].value = role;
      document.getElementsByName("e_password")[0].value = password;
      document.getElementsByName("e_email")[0].value = email;
      document.getElementById("edit").style.display = "block";
  }


  
    function hadleUpdate(){
      axios.put("https://jfsd-spring-hosting-production-2a1b.up.railway.app/update",{
        name: document.getElementsByName("e_name")[0].value,
        role: document.getElementsByName("e_role")[0].value,
        email: document.getElementsByName("e_email")[0].value,
        password: document.getElementsByName("e_password")[0].value
      }).then((res)=>{
        alert(res.data)
        setResult(null)
      })
    }



  //rendering
  useEffect(() => {
    if (result === null) {
      axios.get("https://jfsd-spring-hosting-production-2a1b.up.railway.app/allusers", {})
        .then((res) => {
          setResult(res.data)
        })
    }
  }, [result])

  if(result == null){
    return (
      <div>
        Result is fetching...
      </div>
    );
  } else {
    return (
      <div>
        <table border="1" style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
              <th style={{ padding: '12px' }}>Name</th>
              <th style={{ padding: '12px' }}>Role</th>
              <th style={{ padding: '12px' }}>Email</th>
              <th style={{ padding: '12px' }}>Password</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {result.map((obj, index) => {
              const rowStyle = index % 2 === 0 ? { backgroundColor: '#f2f2f2' } : { backgroundColor: '#ffffff' };
              return (
                <tr key={index} style={rowStyle}>
                  <td style={{ padding: '12px', textAlign: 'center' }}>{obj.name}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>{obj.role}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>{obj.email}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>{obj.password}</td>
                  <td><button onClick={()=>handleDelete(obj.email)}>Delete</button></td>
                  <td><button onClick={()=>funUpdate(obj.name,obj.role,obj.email,obj.password)}>Edit</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div id='edit'style={{display:"none"}}>
          Name:<input type='text' name='e_name'/>
          <br/>
        Role: <select name = "e_role">
              <option value = {1}> Admin </option>
              <option value = {0}> Guest </option>
              <option value = {2}> User </option>
              </select>
            email:<input type = "text" name = "e_email" />
        <br/>
        password: <input type = "password" name = "e_password" />
          <br/>
          <button onClick={() => hadleUpdate()}> SAVE EDIT </button>
        </div>
      </div>
    );
  }
}
