import React, { useState,useEffect } from 'react'
import { forgetPassword } from '../../redux/features/auth/authSlice';
import { useDispatch,useSelector } from 'react-redux'

export default function ForgetPassword() {

  const [forget, setForget] = useState({ email: "" })
  const dispatch = useDispatch()


  const { user, isSuccess, isError, message } = useSelector(state => state.auth)
  console.log(message)


  const onChange = (e) => {
    setForget((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }))
  };

  useEffect(() => {
    if (isError || message) {
      if (message) {
        document.getElementById('error3').style.display = 'block'
      }
    }

    if (isSuccess || user) {
      document.getElementById('error3').style.display = 'block'
    }
  }, [isError, isSuccess, message, user])


  const send = (e) => {
    e.preventDefault();

    dispatch(forgetPassword(forget))
    setForget({ email: "" });

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
                        <small>Enter your account Email</small>
                      </h4>
                    </div>
                    <hr />

                    {/* main form  */}

                    <div className="col-md-10 email_part mt-4">
                      <div className="col mb-3 ">
                        <label htmlFor="l-name-Input">
                          <small>E-mail</small>
                        </label>
                        <input
                          className="form-control form-control-sm rounded-0"
                          value={forget.email}
                          name="email"
                          onChange={onChange}
                          type="email"

                          placeholder="E-mail"
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
                            onClick={send}
                          >
                            send
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
