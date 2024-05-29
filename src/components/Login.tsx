import React,{useState} from "react";
import { UserData } from "../App";
type LoginFormProps = {
  setdata: React.Dispatch<React.SetStateAction<UserData>>;
  data: UserData;
  initialData:UserData
};

const Login: React.FC<LoginFormProps> = (props) => {
    const [errors, setErrors] = useState<UserData>({name:'',password:'',email:''});
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    props.setdata((prev: UserData) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors={name:'',password:'',email:''}
    let valid=true
    if(props.data.name.trim()===''){
        newErrors.name='Enter Name'
        valid=false
    }
    if(props.data.email.trim()===''){
        newErrors.email='Enter Email'
        valid=false
    }
    else if(/\S+@\S+\.+\S/.test(props.data.email)===false){
        newErrors.email='Invalid Email'
        valid=false
    }
    if(props.data.password===''){
        newErrors.password='Enter Password'
        valid=false
    }
    else if(props.data.password.trim().length<8){
        newErrors.password='Password length must be greater than or equal to 8'
        valid=false
    }
    if(valid)
        setErrors({name:'',password:'',email:''})
    else
        setErrors(newErrors)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="username"
        value={props.data.name}
        onChange={handleChange}
      />{" "}
      {
        errors.name!=="" &&<> <br/><span color='red'> {errors.name} </span></> 
      }
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={props.data.password}
        onChange={handleChange}
      />{" "}
      {
        errors.password!=="" &&<><br/> <span color='red'> {errors.password} </span></> 
      }
      <br />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={props.data.email}
        onChange={handleChange}
      />{" "}
      {
        errors.email!=="" &&<><br/> <span color='red'> {errors.email} </span></> 
      }
      <br />
      <input type="submit" value="login" />
    </form>
  );
};

export default Login;
