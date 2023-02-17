import React from 'react'
import './contactus.css'
import maindigital from '../../resources/maindigital.jpg'

const ContactUs = () => {
  return (
    <>
    <div className="container text-muted">
    <div className="col-12 mt-0">
      <img
        className="img-fluid w-100"
        src={maindigital}
        alt=""
        style={{ height: "450px" }}
      />
    </div>
<div className="row mt-4">
    <div className="col">
<h4>Contact Us</h4>
    </div>
    <div className="col">
<h4>Send Us a Message</h4>
    </div>
    <div className="row mt-2">
        <div className="col">
<h6>111-111-0000</h6>
        </div>
        <div className="col">
            <h6>Name*</h6>
        </div>
        <div className="col">
        <input type="text" htmlFor="" className="form-control" placeholder="" />
        </div>
    </div>
    <div className="row mt-2">
        <div className="col">
<h6>abc@gmail.com</h6>
        </div>
        <div className="col">
            <h6>Email*</h6>
        </div>
        <div className="col">
        <input type="text" htmlFor="" className="form-control" placeholder="" />
        </div>
    </div>
    <div className="row mt-2">
        <div className="col">
<h6>123-Strret 890 City,<br /> Country 34796</h6>
        </div>
        <div className="col">
            <h6>Message*</h6>
        </div>
        <div className="col">
        <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
         </div>
         </div>
    </div>

</div>

<div className="button col mt-3">
<button className="btn btn-secondary">Send</button>
</div>



<h2>Google Map</h2>

    </div>

    
    
    
    
    
    </>
  )
}

export default ContactUs