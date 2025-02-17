import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#0B093A] text-base-content p-4">
      <aside>
        <p> Copyright © 2025 - All right reserved by <Link to={'/'}> <b>Asad Ullah Shamim</b> </Link> </p>
      </aside>
    </footer>
  );
};

export default Footer;