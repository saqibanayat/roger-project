import React ,{useState , useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../redux/features/auth/authSlice';







export default function ResetPassword() {


    const [reset, setReset] = useState({
        email: "",
        newPassword: "",
        confirmPassword:""

      });

      const {  isError, message,isSuccess,user} = useSelector(state => state.auth)
      console.log(message)



    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(()=>{
      if(isError || message){
        if(message){
          document.getElementById("error3").style.display = "block";
        }
      }
      if(isSuccess || user){
        document.getElementById("error3").style.display = "block";
        navigate('/login')
      }
    },[isError,message,isSuccess,user,navigate])

    const onChange = (e) => {
        setReset((prevValue) => ({
          ...prevValue,
          [e.target.name]: e.target.value,
        }));
      };


    const submit = (e) => {
        e.preventDefault();
    
        dispatch(resetPassword(reset))
    
    
        setReset({
        email: "",
        newPassword: "",
        confirmPassword:''
        }) 

        // navigate('/login')
              }







  return (
    <>
     <form action="post" >
        <div className="container-fluid">
          <div className="col-12">
            {/* Payment From */}
            <div className="row border justify-content-center w-100">
              <div className="col-md-5 col-12  align-content-center">
                <div className="col-md-12  ">
                  <div className="row justify-content-center">
                    <div className="col-md-12 text-center mt-5">
                      <h4 className="fw-bold">
                        <small>Enter Your New Password</small>
                      </h4>
                    </div>
                    <hr />

                    {/* main form  */}

                    <div className="col-md-10 email_part mt-4">

                    <div className="col mb-3 ">
                        <label htmlFor="l-name-Input">
                          <small>Email</small>
                        </label>
                        <input
                          className="form-control form-control-sm rounded-0"
                          value={reset.email}
                          name="email"
                          onChange={onChange}
                          type="email"

                          placeholder="Email"
                          aria-label=".form-control-sm example"
                        />

                      </div>

                      <div className="col mb-3 ">
                        <label htmlFor="l-name-Input">
                          <small>Password</small>
                        </label>
                        <input
                          className="form-control form-control-sm rounded-0"
                          value={reset.newPassword}
                          name="newPassword"
                          onChange={onChange}
                          type="password"

                          placeholder="Password"
                          aria-label=".form-control-sm example"
                        />

                      </div>
                     

                      <div className="col mb-3 ">
                        <label htmlFor="l-name-Input">
                          <small>Confirm Password</small>
                        </label>
                        <input
                          className="form-control form-control-sm rounded-0"
                          value={reset.confirmPassword}
                          name="confirmPassword"
                          onChange={onChange}
                          type="Password"

                          placeholder="confirm password"
                          aria-label=".form-control-sm example"
                        />

                      </div>
                     

                       <div style={{ display: 'none', color: 'red' }} id='error3'> <small><p>{message}</p>
                      </small> </div> 


                     

                      
                    


                    </div>
                    {/*  main form */}





                    {/*  bottom buttons  */}
                    <div className="col-md-10 sendEmail_btns">
                      <div className="row pt-3 pb-5">
                        
                        <div className="col text-end">
                          <button
                            type="submit"
                            className="btn btn-dark btn-sm rounded-5"
                            onClick={submit}
                          >
                            Set
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* bottom buttons  */}
                </div>
              </div>
              {/* payment Form  */}
            </div>
          </div>
        </div>
      </form>
    
    
    </>
  )
}
