import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Coded by {""}
        <a href="https://github.com/LungiMarcia" target="_blank">
          Lungile Simelane
        </a>
        , is {""}
        <a
          href="https://github.com/LungiMarcia/Weather-App-React"
          target="_blank"
        >
          open-sourced on GitHub
        </a>{" "}
        {""}
        and hosted on {""}
        <a href="https://rococo-pasca-53f289.netlify.app" target="_blank">
          Netlify
        </a>
      </p>
    </div>
  );
}
