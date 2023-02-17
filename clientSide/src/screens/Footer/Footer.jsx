import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {


  return (
    <>

      <footer className="bd-footer py-4 py-md-5 mt-5 bg-light my-4" >
        <div className="container-fluid py-4 py-md-5 px-4 px-md-3 ">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <Link
                className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
                to='/'
                aria-label="Bootstrap"
              >
                <span className="fs-5">Packages</span>
              </Link>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">
                  This document is based on the information shared by the Client
                  in different documents. A few major documents referred to for
                  this document are listed below
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-4 offset-lg-1 mb-3">
              <h5>Products</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    Cloud
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    Data
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    packages
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    values
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    Business Ideas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-4 mb-3">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    e-Comfort{" "}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    {" "}
                    B2B
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    FAQs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to='/'>
                    Terms of Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
};

export default Footer;
