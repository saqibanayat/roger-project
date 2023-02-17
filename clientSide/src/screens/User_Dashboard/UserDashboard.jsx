import React, { useState,useEffect } from 'react'
import techmain from "../../resources/techmain.jpg"
import tech from '../../resources/tech.jpg'
import "../LandingPage/landingPage.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Dashboard() {


    const [product,setProduct]=useState([])

    const navigate = useNavigate()

    useEffect(() => {
        let mount = true;
        if (mount) {
          axios.get(`http://192.168.0.102:8000/api/showpackages`)
            .then((response) => {
                console.log(response.data)
                return(setProduct(response.data))
             
            });
    
        }
        return () => {
         return mount = false;
        };
      }, []);




const summary = () => {
    navigate('/user-summary')

}
const editProfile = () => {
    navigate('/user-editProfile')

}

const message = () => {
    navigate('/user-message')

}





  return (
    <>
    
      <div className="container-lg">
        <div>
            <img className="w-100 img-fluid" src={techmain} alt="no responding" style={{height:"500px"}}/>
        </div>
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb pt-3">
                    <li className="breadcrumb-item" style={{fontSize: "small"}}><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" style={{fontSize: "small"}} aria-current="page">Dashboard
                    </li>
                </ol>
            </nav>
        </div>

        <div>
            <h2>User Dashboard</h2>
        </div>
        <div className="col-12 d-flex">
            <div className="col-2">
                
               <div className=" col-12 side_menu">
                <div className="col-9">
            <div className="col mt-3">
                <button className='btn btn-dark rounded-0 w-100' onClick={summary}>Summary</button>
            </div>
            <div className="col mt-3">
                <button className='btn btn-dark rounded-0 w-100' onClick={editProfile}>Edit Profile</button>
            </div>
            <div className="col mt-3">
                <button className='btn btn-dark rounded-0 w-100' onClick={message}>Messages</button>
            </div>
            </div>
               </div>
            </div>

            <div className="col-10 ">
                <div className="col-12">
                    <div className="row">


                        {/* {console.log(product)} */}



                        {
                            product.map((items,index)=>{
                                   return <>
                                   
                                   <div className="col pe-0 mt-3" key={index}>
                        <div className="pe-0">
                        <div className=" card text-center m-0 " style={{width: "15rem"}}>
                            <div className="hexagon ">
                                <div className="shape" key={index}>
                                <img className="img-fluid " src={tech} alt="nopic" height="100%" width="100%" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{items.pack_title}</h5>

                                <a href="/">{items.pack_description}</a><br/>
                                <p style={{color: "orange"}}><small>${items.pack_price}</small></p>
                            </div>
                        </div>
                    </div>
                        </div>
                                   
                                   </>
                            })
                        }

                      

                      
                       

                       

                       
                        
                    </div>
                    
                </div>
            </div>

        </div>
    </div>

    </>
  )
}
