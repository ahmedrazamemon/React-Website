import React from "react";
import Navbar from "./navbar";
import Example from "./slider";
import style from "./style.css"
import { ImLocation } from 'react-icons/im'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import image11 from './assets/11.jpg'
function contact() {
  return (
    <>
      <div className="main">
        
        <div id="form">

          <Formik
            initialValues={{ email: "", firstName: "" }} //inital value start 

            validationSchema={Yup.object({
              firstName: Yup.string().min(3, "Minimum 3 letters").required(),
              lastName: Yup.string().min(3, "Minimum 3 letters").required(),
              email: Yup.string().email("Invalid email address").required()
            })}
            onSubmit={(value) => {
              console.log(value)
            }}
          >
            <div className="form">
              {/* <!--Section: Contact v.2--> */}
              <section class="mb-4">

                {/* <!--Section heading--> */}
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                {/* <!--Section description--> */}
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                  a matter of hours to help you.</p>

                <div class="row">

                  {/* <!--Grid column--> */}
                  <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                      {/* <!--Grid row--> */}
                      <div class="row">

                        {/* <!--Grid column--> */}
                        <div class="col-md-6">
                          <div class="md-form mb-0">
                          <label for="name" class="">Your name</label>
                            <input type="text" id="name" name="firstName" class="form-control"/>
                            <ErrorMessage name={"firstName"} />
                          </div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div class="col-md-6">
                          <div class="md-form mb-0">
                          <label for="email" class="">Your email</label>
                            <input type="text" id="email" name="email" class="form-control"/>
                          </div>
                        </div>
                        {/* <!--Grid column--> */}

                      </div>
                      {/* <!--Grid row--> */}

                      

                      {/* <!--Grid row--> */}
                      <div class="row">

                        {/* <!--Grid column--> */}
                        <div class="col-md-12">

                          <div class="md-form">
                          <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                          </div>

                        </div>
                      </div>
                      {/* <!--Grid row--> */}

                    </form>

                    <div class="text-center text-md-left">
                      <a class="btn btn-primary" onclick="">Send</a>
                    </div>
                    <div class="status"></div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                      <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        {/* <p>San Francisco, CA 94126, USA</p> */}
                      </li>

                      <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        {/* <p>+ 01 234 567 89</p> */}
                      </li>

                      <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        {/* <p>contact@mdbootstrap.com</p> */}
                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}

                </div>

              </section>

            </div>

          </Formik>


        </div>
      </div>
    </>
  )




} export default contact;















