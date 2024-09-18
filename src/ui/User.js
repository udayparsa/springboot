import axios from "axios";

export default function User() {

    function handleSubmit() {
        console.log(document.getElementsByName("t1")[0].value);
        axios.get("http://localhost:8080/user", {params:{
            email: document.getElementsByName("t1")[0].value
        }}).then((res)=>{
            console.log(res.data)
        })
    }
    return (
        <div>
            Email: <input type="email" name="t1" />
            <br/><br/>
            <button onClick={handleSubmit}> Get Details </button> 
        </div>
    );
}