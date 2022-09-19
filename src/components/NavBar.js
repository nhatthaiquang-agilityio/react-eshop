import React from "react";
import background from '../assets/images/header.jpg';
import logo_color from '../assets/images/logo_color.svg';

function NavBar() {
  return (
    <header className="esh-app-header" style={{ backgroundImage: `url(${background})` }}>
      <div className="esh-app-header-promo">
        <span className="esh-app-header-promo-title">All T-SHIRTS</span>
        <span className="esh-app-header-promo-subtitle">
          On sale this weekend
        </span>
      </div>
      <div className="container">
        <article className="d-flex align-content-center justify-content-between">
          <section>
            <a>
              <img
                className="esh-app-header-brand"
                src={logo_color}
              />
            </a>
          </section>

          <section className="d-flex align-content-center justify-content-between"></section>
        </article>
      </div>
    </header>
  );
}
export { NavBar };