import React, { useEffect, useState } from "react";
import AvatarLogo from "./2nd_logo.png";

import "./card-styles.css";
function Card(props) {
  const hiddenFileInput = React.useRef(null);
  const [logo, setLogo] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    setDetails(props.details);

    return () => {};
  }, [props]);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log("*****", fileUploaded);
    setLogo(URL.createObjectURL(fileUploaded));
  };
  return (
    <>
      {details && (
        <div class="card_container">
          <div class="card_content">
            <div class="card_header">
              {/* <Tooltip title="upload Logo"> */}
              <div class="logo">
                {(logo || AvatarLogo) && (
                  <img
                    class="logo_img"
                    onClick={handleClick}
                    src={logo != null ? logo : AvatarLogo}
                    // src="data:image/png;base64,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"
                  />
                )}
                {/* <AddCircleOutlineRoundedIcon /> */}

                <input
                  type="file"
                  onChange={handleChange}
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={hiddenFileInput}
                />
              </div>
              {/* </Tooltip> */}
              <div class="brand_container">
                <div class="brand_title" style={{ color: details.themeColor }}>
                  {details.company}
                </div>
                <div class="brand_subtitle">{details.subTitle}</div>
              </div>
            </div>
            <div
              class="card_body"
              style={{
                borderBottom: `3px solid ${details.themeColor}`,
              }}
            >
              <div class="body_details">
                <div class="full_name" style={{ color: details.themeColor }}>
                  {details.name}
                </div>
                <div class="designation">{details.designation}</div>
                <div class="email">{details.email}</div>
              </div>
            </div>
          </div>
          <div class="card_footer">
            <div class="footer_address">
              <div class="address_line1">{details.address1}</div>
              <div class="address_line2">{details.address2}</div>
              <div class="website">{details.website}</div>
            </div>
            <div class="footer_phone">{details.mobile}</div>
          </div>
        </div>
      )}{" "}
    </>
  );
}

export default Card;
