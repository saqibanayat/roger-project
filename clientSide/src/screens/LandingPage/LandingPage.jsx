import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API, cx } from "../SearchBar/searchAPIkey";
import { attributeList, showPackages, addFilterPackages } from "../../redux/features/packages/packagesSlice";
import axios from "axios";
import "./landingPage.css";

import tech from "../../resources/tech.jpg";
import tech2 from "../../resources/tech2.jpg";
import tech3 from "../../resources/tech3.jpg";
import tech4 from "../../resources/tech4.png";
import maindigital from "../../resources/maindigital.jpg";











export default function LandingPage() {

  ///// state for storing search word value
  const [item, setItem] = useState("");

  ///// state for storing search keyword result Google API
  const [result, setResult] = useState("");


  const [data, setData] = useState([])



  const [attributeVal, setAttributeVal] = useState({ attributeID: [] })
  // const[isChecked,setIsChecked]=useState(false)
  console.log(attributeVal);






  const navigate = useNavigate();
  const dispatch = useDispatch();


  //// getting Data from redux store


  useEffect(() => {
    const getpackages = async () => {

      await dispatch(showPackages())
      await dispatch(attributeList())


    }
    getpackages()
  }, [dispatch]);

  const { packages } = useSelector((state) => state.packages);

  const onchange = (e) => {
    setItem(e.target.value)
  };




  //// showing all features without click on search button 

  useEffect(() => {

    const fetchData = async () =>{

      if (!item) {
        setData(packages.packages)
      }
  

    }

    fetchData()

  }, [packages, item])




  const search = async (e) => {
    e.preventDefault();
    let getData=await packages?.packages.filter((items) => {
      return (item.toLowerCase() === '' ? items : items.pack_title.toLowerCase().includes(item))
    })
    
if(getData.length === 0){
  if(!packages?.filterPackages && item){
    try {
        let data1 = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${API}&cx=${cx}&q=${item}`
        );
  
        setResult(data1);
        setItem("");

      } catch (error) {
        console.log(error);
       }
   }

}

if(getData.length>0){
  setData(getData)

}

   

    




  };

  const closeWindow = () => {
    setResult("");
  };



  const pkgDetails = (e) => {
    e.preventDefault();
    navigate("/package-details");
  }



  const addFilter = async (e) => {
    dispatch(attributeList())
    var add_filter = document.getElementById("btn-filter");
    var showBtn = add_filter.style.display;
    if (showBtn === "block") {
      add_filter.style.display = 'none';
      await dispatch(addFilterPackages({ ...attributeVal }))
      setAttributeVal({
        attributeID : []
      })
      

    }
    else {
      add_filter.style.display = 'block';
      
    }

  }



  return (
    <>
      <div className="col-12 mt-0">
        <img
          className="img-fluid w-100"
          src={maindigital}
          alt=""
          style={{ height: "500px" }}
        />
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="col-md-12 ">
            <div className="row justify-content-center">
              <div className="row justify-content-center mt-5">
                <div className="col-6 Search_bar  ">
                  <form action="">
                    <div className="search">
                      <input
                        type="text"
                        htmlFor=""
                        className="form-control"
                        placeholder="Have a question? Ask Now"
                        value={item}
                        onChange={onchange}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-2 Filter_btn">
                  <button
                    className="btn btn-dark  w-100 rounded-5"
                    onClick={search}
                    
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  >
                    Search
                  </button>
                </div>

                <div className="col-2 col-sm Search_btn">
                  <button
                    className="btn btn-dark w-100 rounded-5"
                    onClick={addFilter}
                  // onClick={()=>{ dispatchValue( {type:'attributeVal', ...attributeVal  } ) } }

                  >
                    Add Filter
                  </button>
                </div>

                {/* {Add Filter Button Results} */}

                <div
                  className="form-check text-center mt-4 filter border"
                  id="btn-filter"
                  style={{ width: "600px", display: "none" }}
                >
                  <div className="col-12">
                    {" "}
                    <div className="row p-2 ">

                      {packages?.attributes?.map((item, i) => {
                        return (
                          <div className="col-4 mb-3" key={i}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={item.attribute_id}
                                name="attributeValue"
                                
                                onChange={(e) => {setAttributeVal((prev) => ({ ...prev, attributeID: [...prev.attributeID, { attribute_id: e.target.value }] }))
                               }}
                                id="flexCheckDefault"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                {item.attribute_name}
                              </label>


                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>


                </div>
              </div>

              {/* Custom Search Window */}
          
             <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              > 
              <div className="modal-dialog modal-xl"> 
              <div className="modal-content w-100"> 
              <div className="modal-header">
                      <button
                        type="button"
                        onClick={closeWindow}
                        className="btn-close"
                        data-bs-dismiss="modal" 
                      ></button>
                    </div> 
              <div className="modal-body w-100"> 



            

              {result?.data?.items.map((item, index) => {
                         return (
                            <div key={index}>
                              <div className="col-12 border-bottom pt-3">
                                <a href={item.displayLink}>{item.displayLink}</a>
                                <a href={item.formattedUrl}>
                                  <h4 style={{ color: "#1e57bf" }}>
                                    {item.title}
                                  </h4>
                                </a>
                                <p>
                                  <small>{item.snippet}</small>
                                </p>
                              </div>
                            </div>
                         );
                      })} 
              </div> 
              <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>  
              </div> 
              </div>  
              </div>   

              <div className="col-9 mt-5">
                <div className="row ">
                  <div className="col">
                    <img
                      className="img-fluid"
                      src={tech}
                      alt=""
                      style={{ width: "250" }}
                    />
                  </div>
                  <div className="col text-center">
                    <img
                      className="img-fluid"
                      src={tech2}
                      alt=""
                      style={{ width: "250" }}
                    />
                  </div>
                  <div className="col text-end">
                    <img
                      className="img-fluid"
                      src={tech3}
                      alt=""
                      style={{ width: "250" }}
                    />
                  </div>
                </div>
              </div>

              <div className=" col-9  package_heading mt-5 mb-3">
                <h3>Featured Packages</h3>
              </div>

              <div className="col-10  featured_packages">
                <div className="row">

                  {/* {Dynamically showing Feature Package  Details} */}

                  {
                    packages?.filterPackages?

                          data.map((items) => {
                            
                            return (
                    
                              packages.filterPackages.map((res) => {
                    
                    
                                if (res?.pack_id === items.pack_id) {
                                  console.log(items);
                    
                                 return( <>
                                  {/* {Dynamic Featued Package Details} */}
                                  <div className="col-3 pe-0 mt-4">
                                    <div
                                      key={items.pack_id}
                                      className="card text-center border"
                                      onClick={pkgDetails}
                                      style={{ width: "15rem" }}
                                    >
                                      <div className="hexagon">
                                        <div className="shape">
                                          <img
                                            className="img-fluid "
                                            src={tech4}
                                            alt="nopic"
                                          />
                                        </div>
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title">{items.pack_title}</h5>
        
                                        <a href="/" onClick={pkgDetails}>
                                          {items.pack_description}
                                        </a>
                                        <br />
                                        <p style={{ color: "orange" }}>
                                          <small>${items.price}</small>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </>)
                    
                                }
                    
                              })
                            )
                    
                            })
                            :
                          
                    data?.map((items) => {
                      return (
                        <>
                          {/* {Dynamic Featued Package Details} */}
                          <div className="col-3 pe-0 mt-4">
                            <div
                              key={items.pack_id}
                              className="card text-center border"
                              onClick={pkgDetails}
                              style={{ width: "15rem" }}
                            >
                              <div className="hexagon">
                                <div className="shape">
                                  <img
                                    className="img-fluid "
                                    src={tech4}
                                    alt="nopic"
                                  />
                                </div>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">{items.pack_title}</h5>

                                <a href="/" onClick={pkgDetails}>
                                  {items.pack_description}
                                </a>
                                <br />
                                <p style={{ color: "orange" }}>
                                  <small>${items.price}</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </>

                      );
                    })}
                </div>
              </div>

              <div className=" col-9 Rank_provider_heading mt-5 mb-3">

                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button> */}


                {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div> */}
                <h3>Top Rank Provider</h3>
              </div>

              <div className="col-10  top_ranks">
                <div className="row packages_cards card">
                  {/* {1st Rank Provider Details} */}

                  <div className="col pe-0">
                    <div
                      className=" card border text-center m-0 "
                      style={{ width: "15rem" }}
                      onClick={pkgDetails}
                    >
                      <div className="hexagon">
                        <div className="shape">
                          <img className="img-fluid " src={tech4} alt="nopic" />
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Package</h5>

                        <a href="/" onClick={pkgDetails}>
                          Add to Package
                        </a>
                        <br />
                        <p style={{ color: "orange" }}>
                          <small>$1000</small>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* {2nd Rank Provider Details} */}
                  {/* <div className="col pe-0">
                                        <div className=" card text-center m-0 " style={{ width: "15rem" }}>
                                            <div className="hexagon">
                                                <div className="shape">
                                                    <img className="img-fluid " src={tech4} alt="nopic" />
                                                </div>
                                                </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{items.title}</h5>

                                                <a href="/">{items.des}</a><br />
                                                <p style={{ color: "orange" }}><small>${items.price}</small></p>
                                            </div>
                                        </div>
                                                       </div> */}

                  {/* {3rd Rank Provider Details} */}
                  {/* <div className="col pe-0">
                                        <div className=" card text-center m-0 " style={{ width: "15rem" }}>
                                            <div className="hexagon">
                                                <div className="shape">
                                                    <img className="img-fluid " src={tech4} alt="nopic" />
                                                </div>
                                                </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{items.title}</h5>

                                                <a href="/">{items.des}</a><br />
                                                <p style={{ color: "orange" }}><small>${items.price}</small></p>
                                            </div>
                                        </div>
                                                       </div> */}

                  {/* {4th Rank Provider Details} */}
                  {/* <div className="col pe-0">
                                        <div className=" card text-center m-0 " style={{ width: "15rem" }}>
                                            <div className="hexagon">
                                                <div className="shape">
                                                    <img className="img-fluid " src={tech4} alt="nopic" />
                                                </div>
                                                </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{items.title}</h5>

                                                <a href="/">{items.des}</a><br />
                                                <p style={{ color: "orange" }}><small>${items.price}</small></p>
                                            </div>
                                        </div>
                                                       </div>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
