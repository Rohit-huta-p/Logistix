import React from "react";

const Header = ({ LrCopy, letterpad }) => {


  return (
    <div>
      <p style={{ textAlign: "center" }}>JAY SHREE RAM</p>
      <div style={{ outlineStyle: "solid" }}>
        <h6 style={{ textAlign: "center", textDecoration: "underline" }}>
          Subject to Pune Jurisdiction Only
        </h6>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          <h2 
            style={{
              fontSize: "35px",
              color: '#c92c1e',
              fontWeight: "bold"
            }}
          >AKASH</h2>

          <div className="p-2">
            <h2
              style={{
                fontSize: "3rem", // text-2xl is 1.5rem (24px)
                textAlign: "center", // Aligns text to the center
                fontWeight: "bold", // Bold font
                color: "#0d75ba",
                fontStyle: "italic"
              }}
            >
              ROAD CARRIERS
            </h2>

            <h5
              style={{
                textAlign: "center", // Aligns text to the center
                fontSize: letterpad ? "15px" : "13px", // Dynamic font size based on 'letterpad'

                textAlign: "start", // Aligns text to the start (overrides 'center')
              }}
            >
              Shop No. 14, Plot No. 61-62, Sector No. 23, Transport Nagar,
              Nigdi, Pune-44.
            </h5>

            <h5
              style={{
                textAlign: "center", // Overrides 'text-center'
                fontSize: "13px", // 'text-[13px]' takes precedence over 'text-[9px]'

              }}
            >
              Email: akashpune65@gmail.com
            </h5>
          </div>

          <div className="">
            <div>
              <div className="">
                <h6>Ph:</h6>
                <div>
                  <p>020-27651762</p>
                  <p>020-7651804</p>
                </div>
              </div>
            </div>

            <div className="">
              <div>
                <h6>Mob:</h6>
                <div>
                  <p>9890906607</p>
                  <p>7875666607</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
