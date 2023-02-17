import { useState, useEffect, useReducer } from "react";
import techmain from "../../resources/techmain.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cspDashboard, attributeList }
  from "../../redux/features/packages/packagesSlice";
import "../LandingPage/landingPage.css";
import { refreshToken } from "../../redux/features/auth/authSlice";

const initialState = {
  packageTitle: "",
  packageDes: "",
  packagePrice: "",
  attribute: [],
}


const updateDashboardValue = (prev, next) => {
  switch (next.type) {
    case 'package':

      {
        const { type, ...element } = next
        return { ...prev, ...element }
      }

    case 'attribute':
      {

        return { ...prev, attribute: ([...prev.attribute, { attribute_id: next.attributeID, value: next.attributeValue, attributeTitle: next.attributeTitle }]) }
      }

    case 'reset': {
      return {
        packageTitle: "",
        packageDes: "",
        packagePrice: "",
        attribute: [],
      }
    }
    default:
      return
  }
}

export default function Dashboard() {


  const [dashboardValue, dispatchDashboardValue] = useReducer(updateDashboardValue, initialState);
  console.log(dashboardValue)

  const [attributeVal, setAttributeVal] = useState({
    attributeID: '',
    attributeTitle: "",
    attributeValue: "",
  });





  const navigate = useNavigate();
  const { packages } = useSelector((state) => state.packages);
  console.log(packages)



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(attributeList());
  }, [dispatch]);



  const onchange = (val) => {
    setAttributeVal((prevValue) => ({
      ...prevValue,
      ...val
    }))

    if (val?.attributeTitle) {
      packages?.attributes.forEach(element => {
        if (val.attributeTitle === element.attribute_name) {
          setAttributeVal((prev) => ({ ...prev, attributeID: element.attribute_id }))
        }
      });
    }
    return
  };









  const submit = (e) => {
    e.preventDefault();
    dispatch(cspDashboard(dashboardValue));
    dispatchDashboardValue({ type: 'reset' })

  };

  const summary = () => {
    navigate("/csp-summary");
  };
  const editProfile = () => {
    navigate("/csp-editProfile");
  };

  const Message = () => {
    navigate("/csp-message");
  };

  return (
    <>
      <div className="container-lg">
        <div>
          <img
            className="w-100 img-fluid"
            src={techmain}
            alt="no responding"
            style={{ height: "500px" }}
          />
        </div>
        <div>
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb pt-3">
              <li className="breadcrumb-item" style={{ fontSize: "small" }}>
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item active"
                style={{ fontSize: "small" }}
                aria-current="page"
              >
                Dashboard
              </li>
            </ol>
          </nav>
        </div>

        <div>{/* <h1>{user?.userName}</h1> */}</div>
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              <div className=" col-12 side_menu">
                <div className="col-9">
                  <div className="col mt-3">
                    <button
                      className="btn btn-dark rounded-0 w-100"
                      onClick={summary}
                    >
                      Summary
                    </button>
                  </div>
                  <div className="col mt-3">
                    <button
                      className="btn btn-dark rounded-0 w-100"
                      onClick={editProfile}
                    >
                      Edit Profile
                    </button>
                  </div>
                  <div className="col mt-3">
                    <button
                      className="btn btn-dark rounded-0 w-100"
                      onClick={Message}
                    >
                      Messages
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10">
              <div className="row">
                <form onSubmit={submit}>

                  <div className="row mt-3">
                    <h4>Add New Package</h4>
                  </div>
                  <div className="row mb-3 mt-3">
                    <div className="col-3 ">
                      <small>
                        <h6>Title</h6>
                      </small>
                    </div>
                    <div className="col-8">
                      <input
                        className="form-control form-control-sm"
                        value={dashboardValue.packageTitle}
                        name="packageTitle"
                        onChange={(e) => { dispatchDashboardValue({ type: 'package', packageTitle: (e.target.value) }) }}
                        type="text"
                        aria-label=".form-control-sm example"
                      />
                      <div style={{ display: "none", color: "red" }} id="error">
                        {" "}
                        <small>
                          <p> Please fill the Credentials</p>{" "}
                        </small>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-3 ">
                      <small>
                        <h6>Price</h6>
                      </small>
                    </div>
                    <div className="col-8 ">
                      <input
                        className="form-control form-control-sm"
                        value={dashboardValue.packagePrice}
                        name="packagePrice"
                        onChange={(e) => { dispatchDashboardValue({ type: 'package', packagePrice: e.target.value }) }}
                        type="number"
                        aria-label=".form-control-sm example"
                      />
                      <div style={{ display: "none", color: "red" }} id="error1">
                        {" "}
                        <small>
                          <p> Please fill the Credentials</p>{" "}
                        </small>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3 description">
                    <div className="col-3 ">
                      <small>
                        <h6>Description</h6>
                      </small>
                    </div>
                    <div className="col-8 ">
                      {" "}
                      <textarea
                        className="form-control"
                        value={dashboardValue.packageDes}
                        name="packageDes"
                        onChange={(e) => { dispatchDashboardValue({ type: 'package', packageDes: e.target.value }) }}
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                      ></textarea>
                      <div style={{ display: "none", color: "red" }} id="error2">
                        {" "}
                        <small>
                          <p> Please fill the Credentials</p>{" "}
                        </small>{" "}
                      </div>
                    </div>


                  </div>
                  <div className="col mt-5 mb-4">
                    <h5>Add Package Attributes</h5>
                  </div>
                  <div className="row attributr_dropdown mb-3">
                    <div className="col-3  ">
                      <small>
                        <h6>Attributes</h6>
                      </small>
                    </div>


                    <div className="col-8">
                      <div className="input-group mb-3">

                        <select className="form-select" id="inputGroupSelect01"
                          value={attributeVal.attributeTitle}
                          onChange={(e) => { onchange({ attributeTitle: e.target.value }) }}
                          name='attributeTitle'


                        >
                          <option disabled={attributeVal.attributeTitle ? true : false}>Select Attributes</option>

                          {packages?.attributes?.map((item, i) => {
                            return (


                              <option key={i} value={item.attribute_name} >
                                {item.attribute_name}
                              </option>

                            );
                          })} 
                        </select>
                      </div>



                    </div>

                  </div>



                  <div className="row mb-3 attributes_values" >
                    <div className="col-3 ">
                      <small>
                        <h6>Value</h6>
                      </small>
                    </div>
                    <div className="col-8 ">
                      <input
                        className="form-control form-control-sm"
                        value={attributeVal.attributeValue}
                        name="attributeValue"
                        onChange={(e) => { onchange({ attributeValue: e.target.value }) }}
                        aria-label=".form-control-sm example"
                      />
                    </div>
                  </div>

                       
                  <div className="col-11 justify-content-end d-flex">
                    <button
                      type="button"
                      className=" btn btn-dark rounded-0  "
                      onClick={() => {
                        dispatchDashboardValue({ type: 'attribute', ...attributeVal })
                        setAttributeVal({
                          attributeTitle: "",
                          attributeValue: "",
                          attributeID: ""
                        }
                        )
                      }}
                    >
                      Add
                    </button>
                  </div>

   <div className="row mt-4 table_of_attributes">
<div className="col-3 ">
  <small>
    <h6>List of Attributes</h6>
  </small>
   </div>

                  <div className="col-8">
                    <table className="table table-bordered text-muted text-center">
                      <thead>
                        <tr>
                          <th scope="col">Attribute</th>
                          <th scope="col">Value</th>
                        </tr>
                      </thead>
                      <tbody className="border">
                        {dashboardValue?.attribute.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.attributeTitle}</td>
                              <td>{item.value}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
   </div>










                  <div className="col-11 justify-content-end d-flex">
                    <button className=" btn btn-dark rounded-0" type="submit">
                      Checkout
                    </button>
                    {/* <button className=" btn btn-dark rounded-0  " type="button" onClick={() => { dispatch(refreshToken()) }}>
                      refresh
                    </button> */}

                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>


      </div>
    </>
  );
}
