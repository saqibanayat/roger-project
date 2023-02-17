import React,{useState} from 'react'
import axios from 'axios'
import {API,cx} from '../SearchBar/searchAPIkey'
import maindigital from "../../resources/maindigital.jpg";


const ComparePackage = () => {

    const [item, setItem] = useState("")
    const [result, setResult] = useState("");



    const onchange = (e) => {
        setItem(e.target.value);
      }



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
                  onClick={submit}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Search
                </button>
              </div>

              <div className="col-2 col-sm Search_btn">
                <button className="btn btn-dark w-100 rounded-5" data-bs-toggle="modal" data-bs-target="#myModal">
                  Add Filter
                </button>
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
                    //   onClick={closeWindow}
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



            
           
             {/* {Add Filter Button Results} */}
            
             {/* <div className="row mt-5 filter border" style={{width:"500px"}}>
                    <div className="div" style={{width:"30px"}}>
                    <div className="col row mt-2">
                    <input type="checkbox" />

                    </div>
                    <div className="col row mt-3">
                    <input type="checkbox"/>
                    </div>
                    <div className="col row mt-3 mb-2">
                    <input type="checkbox" />
                    </div>
                    
                    </div>
                    <div className="div" style={{width:"30px"}}>
                    <div className="col row mt-2">
                    <input type="checkbox" />

                    </div>
                    <div className="col row mt-3">
                    <input type="checkbox"/>
                    </div>
                    <div className="col row mt-3 mb-2">
                    <input type="checkbox" />
                    </div>
                    
                    </div> 
                    <div className="div" style={{width:"30px"}}>
                    <div className="col row mt-2">
                    <input type="checkbox" />
                    </div>
                    <div className="col row mt-3">
                    <input type="checkbox"/>
                    </div>
                    <div className="col row mt-3 mb-2">
                    <input type="checkbox" />
                    </div>
                    
                    </div>
                    
                </div>  */}




                <div className="row text-center text-muted mt-5"><h3>Compare Package</h3></div>
                <div className="container col-8">
                <table className="table table-borderless text-muted mt-3">
  <thead>
    <tr>
      <th scope="col">Service Provider</th>
      <th scope="col">Cloud Merger</th>
      <th scope="col">Top Cloud Inc.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Processor</th>
      <td>Intel Xeon 1 Core</td>
      <td>Intel Xeon 1 Core</td>
    </tr>
    <tr>
      <th scope="row">Memory</th>
      <td>4 GB</td>
      <td>2 GB</td>
    </tr>
    <tr>
      <th scope="row">Hard Disk</th>
      <td>60 GB SSD</td>
      <td>40 GB HDD</td>

    </tr>
    <tr>
      <th scope="row">Bandwidth</th>
      <td>Intel Xeon 1 Core</td>
      <td>Intel Xeon 1 Core</td>
    </tr>
    <tr>
      <th scope="row">Uplink Speed</th>
      <td>4 GB</td>
      <td>2 GB</td>
    </tr>
    <tr>
      <th scope="row">Paid Addon</th>
      <td>60 GB SSD</td>
      <td>40 GB HDD</td>

    </tr>
    <tr>
      <th scope="row"></th>
      <td><button className='btn btn-secondary  btn-sm rounded-pill'>Subscribe</button></td>
      <td><button className='btn btn-secondary  btn-sm rounded-pill'>Subscribe</button></td>

    </tr>
    <tr>
      <th scope="row"></th>
      <td><button className='btn btn-info w-25 text-center rounded-pill'>Chat</button></td>
      <td><button className='btn btn-info w-25 text-center rounded-pill'>Chat</button></td>

    </tr>
  </tbody>
</table>
                </div>
           
           
           
           
           
           
            </div>
    
    
    
    
    </>
  )
}

export default ComparePackage