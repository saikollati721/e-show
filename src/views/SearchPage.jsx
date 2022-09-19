import React from "react";
import useDocumentTitle from "../components/useDocumentTitle";
import HeaderLanding from "../components/header/landing/HeaderLanding";
import HeaderLandingWithSearch from "../components/header/landing/HeaderLandingWithSearch";
import TestimonialFour from "../components/testimonial/TestimonialFour";

const SearchPage = () => {
  useDocumentTitle(" Join our World Largest Community");
  return (
    <div className="main-page-wrapper font-gordita">
      {/* <Header /> */}
      <HeaderLandingWithSearch />

      <div className="client-feedback-slider-four mt-30 md-mt-50" id="feedback">
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2>
                    <span>13,000+</span> Clients love Our product
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
          </div>
          <div className="clientSliderFour slick-nav-none">
            <TestimonialFour />
          </div>
          {/* <img
            src="images/shape/141.svg"
            alt="shape"
            className="shapes shape-one"
          /> */}
          {/* <img
            src="images/shape/142.svg"
            alt="shape"
            className="shapes shape-two"
          /> */}
        </div>
        {/* /.inner-container */}
      </div>
    </div>
  );
};

export default SearchPage;
