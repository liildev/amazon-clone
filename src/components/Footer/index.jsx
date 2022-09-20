import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { footerLinks } from "../../utils/links";

import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__block">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
      
      <div className="footer__menu">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="menu">
            <h4>{footerlink.title}</h4>
            <ul>
              {footerlink.links.map((link) => (
                <li key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
