import React from "react";
import footer from "./footer";
import { Container } from "react-bootstrap";

let Services = () => {
  return (
    <>


      <div
        // className="container-fluid about-heading bg-light shadow"
        // style={{ height: 300, display: "flex", alignItems: "center" }}
      >
        <div className="container">
          {/* <h1>Services</h1> */}
          {/* <p>Online softwares on monthly subscriptions</p> */}
        </div>
      </div>
      <Container fluid className="px-5">
      <div className="row row-col-2 row-colsm-2 row-cols-md-3 row-cols-lg-4 g-3 d-flex justify-content-center my-5">
          <div className="col">
            <div className="card h-30">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/trademanagementerp.html"
                >
                  <i className="fa-solid fa-trademark w-100 fs-3 text-primary mb-2"></i>
                  <h5 className="card-title text-secondary ">
                    Online Shopping
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-40">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/schoolmanagementerp.html"
                >
                  <i className="fa-solid fa-school w-100 fs-3 text-primary mb-2"></i>
                  <h5 className="card-title text-secondary">
                  Safe Delivery
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-70">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/petrolpumpmanagement.html"
                >
                  <i className="fa-solid fa-gas-pump w-100 fs-3 text-primary mb-2"></i>
                  <h5 className="card-title text-secondary">
                    30% discount                 </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-70">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/constructionmanagement.html"
                >
                  <i className="fa-solid fa-building w-100 fs-3 text-primary mb-2"></i>
                  <h5 className="card-title text-secondary">
                    Special offer 
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/hospitalmanagement.html"
                >
                  <i className="fa-solid fa-hospital w-100 fs-3 text-primary mb-2"></i>
                  <h5 className="card-title text-secondary">
                    Responsible price
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/restaurantmanagement.html"
                >
                  <i className="fa-solid fa-burger w-100 fs-3 text-primary mb-2"></i>
                  <h5 className="card-title text-secondary">
                    New Arrivals
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/banquetmanagement.html"
                >
                  <i className="fa-solid fa-calendar-check w-100 fs-3 text-primary mb-2"></i>
                  <h5 className="card-title text-secondary">
                    Delivery as soon as possible
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/oilchangemanagement.html"
                >
                  <i className="fa-solid fa-oil-can w-100 fs-3 text-primary mb-2"></i>
                  <h5 className="card-title text-secondary">
                    Branded Items
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        </Container>
      <footer />
    </>
  );
};

export default Services;
