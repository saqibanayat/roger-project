import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { registerUser } from "../../redux/features/auth/authSlice";
import "./signup.css";

export const SignUp = () => {
  const [registerValue, setRegisterValue] = useState({
    name: "",
    email: "",
    password: "",
    role:"",
  });


  const { user, isSuccess, isError, message } = useSelector(state => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate()



  useEffect(()=>{
    if(isError || message){
      if(message){
        document.getElementById("error3").style.display = "block";
      }
    }
    if(isSuccess || user){
      navigate('/login')
    }
  },[isError,message,isSuccess,user,navigate])




 


  const onChange = (e) => {
    setRegisterValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
    
    console.log(registerValue.service);
  };
  
  

  const submit = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerValue));
    setRegisterValue({
      name: "",
      email: "",
      password: "",
      role:""
    });

   


  
   


       
  };

  return (
    <>
      <form action="post">
        <div className="container-fluid">
          <div className="col-12">
            {/* Payment From */}
            <div className="row  justify-content-center w-100">
              <div className="col-md-5 col-12  align-content-center">
                <div className="col-md-12 ">
                  <div className="row justify-content-center">
                    <div className="col-md-12 text-center mt-5">
                      <h4 className="fw-bold">
                        <small>Sign Up to Offer Your Business Services</small>
                      </h4>
                    </div>
                    <hr />

                    {/* main form  */}
                    <div className="col-md-10 email_part mt-3 ">
                      <div className="col mb-3 ">
                        <label htmlFor="l-name-Input">
                          <small>Name</small>
                        </label>
                        <input
                          className="form-control form-control-sm rounded-0"
                          value={registerValue.name}
                          name="name"
                          onChange={onChange}
                          type="text"
                          placeholder="Name"
                          aria-label=".form-control-sm example"
                        />
                      
                      </div>

                      <div className="col mb-3 ">
                        <label htmlFor="l-name-Input">
                          <small>E-mail</small>
                        </label>
                        <input
                          className="form-control form-control-sm rounded-0"
                          value={registerValue.email}
                          name="email"
                          onChange={onChange}
                          type="email"
                          placeholder="E-mail"
                          aria-label=".form-control-sm example"
                        />
                       
                      </div>
                      <div className="col mb-3 ">
                        <label htmlFor="l-name-Input">
                          <small>Password</small>
                        </label>
                        <input
                          className="form-control form-control-sm rounded-0"
                          value={registerValue.password}
                          name="password"
                          onChange={onChange}
                          type="password"
                          minLength={8}
                          placeholder="Password"
                          aria-label=".form-control-sm example"
                        />
                     
                      </div>

                     

                    
  <small><select value={registerValue.role} onChange={onChange} name="role" className="btn btn-secondary btn-sm mt-2"> 
    <option disabled={registerValue.role?true:false}>Select Services</option>
    <option value="service_user" className="user">Use Services</option>
    <option value="service_provider" className="user">Provide Services</option>
  </select> </small>
                    </div>

                    {/*  main form */}

                    {/*  bottom buttons  */}
                    <div className="col-md-10 shipping_btns">
                      <div className="row pt-3 pb-5">

                      <div
                          style={{ display: "none", color: "red" }}
                          id="error3"
                        >
                          <small>
                            <p>{message}</p>
                          </small>
                        </div>

                        <div className="col ">
                          <a
                            href="/"
                            type="button "
                            className="btn btn-transparent p-0"
                            style={{ color: "red" }}
                          >
                            Return to Home
                          </a>
                        </div>


                        <div className="col text-end">
                          <button
                          onClick={submit}
                            type="submit"
                            className="btn btn-dark btn-sm rounded-5"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* bottom buttons  */}
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
