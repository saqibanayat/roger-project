import React, { useEffect } from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileUser } from "../../../redux/features/auth/authSlice";

import tech4 from "../../../resources/tech4.png";

const EditProfile = () => {
  const { user,isSuccess,isError,message } = useSelector((state) => state.auth);
  console.log(user);

  const [editValue, setEditValue] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: user?.userEmail,
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log(editValue);

    setEditValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
  
    if (isError || message) {
      if (message) {
        document.getElementById('error3').style.display = 'block'
      }
    }
    if (isSuccess || user) {
      if (message) {
        document.getElementById('error3').style.display = 'block'
      }
    }


   
  }, [isError, isSuccess, message, user])


  const submit = (e) => {
    e.preventDefault();
    dispatch(editProfileUser(editValue));

    setEditValue({
      firstName: "",
      lastName: "",
      phoneNo: "",
    });
  };

  return (
    <>
      <form action="post" onSubmit={submit}>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5 img-fluid"
                  src={tech4}
                  alt=""
                  style={{ width: "200px" }}
                />
                <h2 className="font-weight-bold mt-3">{user?.userName}</h2>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editValue.firstName}
                      name="firstName"
                      onChange={onChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editValue.lastName}
                      name="lastName"
                      onChange={onChange}
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Contact Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={editValue.phoneNo}
                      name="phoneNo"
                      onChange={onChange}
                      placeholder="Contact Number"
                    />
                  </div>
              
                  <div className="col-md-12 mt-3">
                    <label className="labels">Email</label>
                    <input
                      type="email"
                      disabled
                      className="form-control"
                      value={editValue.email}
                      name="email"
                      placeholder={user?.userEmail}
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div style={{ display: 'none', color: 'red' }} id='error3'> <small><p>{message}</p>
                      </small> </div>
         
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-secondary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
