import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Style from "./Firstpage.module.css"
import { useState , ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addlogin } from '../../Redux/user';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';


const Firstpage = () => {
  const navigate = useNavigate();
  
  interface UserData {
    name: string;
    phone: number;
    email: string;
  }
    const initialUserData: UserData = {
    name: "",
    phone: 0, // You can replace this with an appropriate default value
    email: ""
  };
  const [data, setdata] = useState<UserData>(initialUserData);

const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
setdata({...data, [event.target.name]:event.target.value})
}
type RootState = {
  user: UserData; // Assuming 'user' is the reducer key
  // Other reducers...
}

const dispatch = useDispatch()
const users = useSelector((state: RootState) =>state.user);

const HandleSubmit =(event:React.FormEvent<HTMLFormElement>)=>{
event.preventDefault()

if (users.name && users.phone && users.email) { 
 dispatch(addlogin(data))
 navigate("/Secondpage") 
} else {
  alert('Please fill in all details.');

}
}


return (
  <div className={Style.main}>

    <div className={Style.maincontainor}>
      <form onSubmit={HandleSubmit} >
        <h3 className={Style.heanding}> Login Page..</h3>
      <TextField id="standard-basic" name='name' type='text' value={data.name} label="Name :" variant="standard" onChange={handleChange}/><br/>
      <TextField id="standard-basic" name='phone' type="number"value={data.phone} label="Phone :" variant="standard" onChange={handleChange}/>
      <br/>
      <TextField id="standard-basic" name='email' type='email' value={data.email} label="Email :" variant="standard" onChange={handleChange}/>
<br/>
<Button variant="contained" type='submit' style={{marginTop:"20px"}}>Submit Now</Button >
<Link to="/Secondpage">
<Button variant="contained" type='button' style={{marginTop:"20px" , marginLeft:"20px"}}>Second Page</Button >
</Link>
      </form>

    </div>
   
    </div>
  )
}

export default Firstpage
