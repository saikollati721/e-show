import React, { useState } from "react";
import "./home-styles.css";
import Card from "./Card";

const initialValues = {
  company: "Arrow Digital",
  subTitle: "Towards Growth",
  name: "Sai Kumar Kollati",
  designation: "FullStack Developer",
  email: "saikumar@gmail.com",
  address1: "2nd Floor, Techno Hub",
  address2: "HitechCity - 500081",
  website: "www.google.com",
  mobile: "+91 8466818663",
  themeColor: "#2596be",
};

function Home() {
  const [values, setValues] = useState(initialValues);
  const [details, setDetails] = useState(initialValues);

  const handleSubmit = () => {
    setDetails(values);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div class="home">
      <div class="left_panel">
        <Card details={details} />
      </div>
      <div class="right_panel">
        <div class="input_container">
          <div class="company_title">Company Name</div>
          <div class="input_field">
            <input
              type="text"
              value={values.company}
              onChange={handleInputChange}
              name="company" //IMPORTANT
            />
          </div>
        </div>
        <div class="input_container">
          <div class="company_title">Subtitle</div>
          <div class="input_field">
            <input
              type="text"
              value={values.subTitle}
              onChange={handleInputChange}
              name="subTitle"
            />
          </div>
        </div>

        <div class="input_container">
          <div class="company_title">Contact Name</div>
          <div class="input_field">
            <input
              type="text"
              value={values.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
        </div>

        <div class="input_container">
          <div class="company_title">Designation</div>
          <div class="input_field">
            <input
              type="text"
              value={values.designation}
              onChange={handleInputChange}
              name="designation"
            />
          </div>
        </div>

        <div class="input_container">
          <div class="company_title">Email</div>
          <div class="input_field">
            <input
              type="email"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
        </div>

        <div class="input_container">
          <div class="company_title">AddresLine1</div>
          <div class="input_field">
            <input
              type="text"
              value={values.address1}
              onChange={handleInputChange}
              name="address1"
            />
          </div>
        </div>

        <div class="input_container">
          <div class="company_title">AddresLine2</div>
          <div class="input_field">
            <input
              type="text"
              value={values.address2}
              onChange={handleInputChange}
              name="address2"
            />
          </div>
        </div>

        <div class="input_container">
          <div class="company_title">Website/other</div>
          <div class="input_field">
            <input
              type="text"
              value={values.website}
              onChange={handleInputChange}
              name="website"
            />
          </div>
        </div>

        <div class="input_container">
          <div class="company_title">Mobile</div>
          <div class="input_field">
            <input
              type="text"
              value={values.mobile}
              onChange={handleInputChange}
              name="mobile"
            />
          </div>
        </div>

        <div class="input_container">
          <div class="company_title">Theme color</div>
          <div class="color_field">
            <input
              type="color"
              value={values.themeColor}
              onChange={handleInputChange}
              name="themeColor"
            />
          </div>
        </div>

        <div class="input_container">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
