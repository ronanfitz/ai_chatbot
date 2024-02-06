import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          padding: 20,
          maxHeight: "30vh",
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", margin: "15px" }}>
          Built by Ronan Fitzpatrick
          {/* Built by
          <span>
            <Link style={{color:"white"}} className="nav-link" to={'https://etc'}>Ronan Fitzpatrick</Link>
          </span> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
