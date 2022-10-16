import React from "react";

function Nav({ handlePageChange }) {
  return (
    <nav className="self-center pt-11">
      <img
        src="/assets/images/logo.svg"
        id="header-logo"
        title="media"
        className="w-80 cursor-pointer"
        alt="RandoMarvel Logo"
        onClick={handlePageChange}
      />
    </nav>
  );
}

export default Nav;
