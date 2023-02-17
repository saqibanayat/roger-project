import React, { useState } from "react";
import { API, cx } from "../SearchBar/searchAPIkey";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import maindigital from "../../resources/maindigital.jpg";

export default function LandingPage() {
//   const [productData, setProductData] = useState([]);

  const [item, setItem] = useState("");
  const [result, setResult] = useState("");

  const navigate = useNavigate()

  const onchange = (e) => {
    setItem(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      let data = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${API}&cx=${cx}&q=${item}`
      );

      setResult(data);
      setItem("");
    } catch (error) {
      console.log(error);
    }

    //    navigate(`/search?${item}`, { replace: false })
  };

  const closeWindow = () => {
    console.log("this is cloase");
    setResult("");
  };

  const comparePkg =(e) => {
    e.preventDefault()
    navigate('/compare-package')
  }
  

  const filter = () =>{
    console.log('logging');
    document.getElementById('btn-filter').style.display = "flex";
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
                    <input type="text" className="form-control" placeholder="Have a question? Ask Now" value={item} onChange={onchange} />
                  </div>
                </form>
              </div>
              <div className="col-2 Filter_btn">
      <button className="btn btn-dark  w-100 rounded-5" onClick={submit} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Search</button>
              </div>

              <div className="col-2 col-sm Search_btn" >
                <button className="btn btn-dark w-100 rounded-5" onClick={filter} >Add Filter</button>
              </div>

             {/* {Add Filter Button Results} */}

             
             <div className="form-check text-center mt-4 filter border" id="btn-filter" style={{width:'600px',display:'none'}}>
            <div style={{width:'30px'}}>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label" >Processor</label>
              </div>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">Memory</label>
              </div>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">Disk</label>
              </div>
              
              </div>  
              <div style={{width:'30px'}}>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">Bandwidth</label>
              </div>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">Uplink</label>
              </div>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">Addon</label>
              </div>
              
              </div> 
              <div style={{width:'30px'}}>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">Basic</label>
              </div>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">DataCenter</label>
              </div>
              <div className="col mt-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">Mobility</label>
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
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body w-100">
                    {/* {Search Results} */}

                    {/* {console.log(result)}  */}


                     {result?.data?.items.map((item, index) => {

                      return (
                        <div key={index}>
                          <div className="col-12 border-bottom pt-3" key={index}>
                            <a href={item.displayLink} key={index}>{item.displayLink}</a>
                            <a href={item.formattedUrl}>
                              <h4 style={{ color: "#1e57bf" }}>{item.title}</h4>
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

            

            {/* {Package Details} */}

            <div className="col-8 d-flex">
            <div className="text-muted mt-5 d-flex"><h4>Package Details</h4>
            <td><button className='btn btn-secondary w-0 mx-3 btn-sm rounded-pill' onClick={comparePkg}>Compare</button></td>

            </div>
            </div>

            
                <div className="container col-8">
                <table className="table table-borderless text-muted mt-3">
  <thead>
    <tr>
     <th scope="col"><h5>Service Provider</h5></th>
      <th scope="col">Cloud Merger</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Processor</th>
      <td>Intel Xeon 1 Core</td>
      <th scope="row">Uplink Speed</th>
      <td>Intel Xeon 1 Core</td>
    </tr>
    <tr>
      <th scope="row">Memory</th>
      <td>4 GB</td>
      <th scope="row">Paid Addon</th>
      <td>2 GB</td>
    </tr>
    <tr>
      <th scope="row">Hard Disk</th>
      <td>60 GB SSD</td>
      <th scope="row">Basic Management</th>
      <td>40 GB HDD</td>

    </tr>
    <tr>
      <th scope="row">Bandwidth</th>
      <td>Intel Xeon 1 Core</td>
      <th scope="row">International DataCenter</th>
      <td>Intel Xeon 1 Core</td>
    </tr>
    <tr>
      <th scope="row">Uplink Speed</th>
      <td>4 GB</td>
      <th scope="row">Processor</th>
      <td></td>
    </tr>
    
    <tr className="mt-5">
      <th scope="row"></th>
      <td><button className='btn btn-secondary w-75 btn-sm rounded-pill'>Subscribe</button></td>
      <td><button className='btn btn-info w-50 btn-sm rounded-pill'>Chat</button></td>

    </tr>
    
  </tbody>
</table>
                </div>














            
          </div>
        </div>
      </div>
    </div>
  </>
);
                                                    }