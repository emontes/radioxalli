import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";
import Radio from "../Radio"

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        
        
        <div className="notice-container">
        
          <div className="copyright">
            <h4>{copyright}</h4>
          </div>

          <div className="rss">
            <Radio />
          </div>
          <div className="based-on">
            <h4>
              Desarrollado por{" "}
              <a href="https://enriquemontes.com">
                Enrique Montes
              </a>.
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
