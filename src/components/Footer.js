import React from 'react';
import logo from '../assets/images/logo.svg';

function Footer() {
  return (
    <footer className="esh-app-footer">
      <div className="container">
        <article className="d-flex w-100 h-100 justify-content-between align-items-center">
          <section>
            <img className="esh-app-footer-brand" src={logo} alt="Logo" />
          </section>
          <section>
            © e-Shoponcontainers. All rights reserved
          </section>
        </article>
      </div>
    </footer>
  );
}
export { Footer };