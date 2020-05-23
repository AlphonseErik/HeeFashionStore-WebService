import React, { Component } from "react";
import classes from './FooterStyle.module.scss';

const Footer = props => {
  return (
    <div className={classes.contentclass}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <a href="#">Help and Support</a>
            </div>
            <div>
              <a href="#">Affliate</a>
            </div>
            <div>
              <a href="#">About us</a>
            </div>
          </div>
          <div className="col-6">
            <div>
              <a href="#">Carees</a>
            </div>
            <div>
              <a href="#">Blog</a>
            </div>
            <div>
              <a href="#">Sitemap</a>
            </div>
            <div>
              <a href="#">Featured courses</a>
            </div>
          </div>
          {/* <div className="col-3">
            <button className="btn">EngLish</button>
          </div> */}
        </div>
      </div>
      <hr className="mt-3"></hr>
      <div className="container">
        <div className="row">
          <div className="col-5 col-md-6 col-sm-6">
            {/* <i className="fa fa-angellist" style={{ fontSize: 50 }}></i> */}
            <span className="ml-3 pt-2">Copyright © 2020 HeeFashionStore, Inc.</span>
          </div>
          <div className="col-7 col-md-6 col-sm-6">
            <div className="text-right pt-3">
              <a href="#">Terms</a>
              <a className="mx-2" href="#">Privacy Policy and Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
