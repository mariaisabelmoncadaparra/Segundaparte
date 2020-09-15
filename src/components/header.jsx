import React from "react";
import './header.css';

function header() {
  return (
    <div>
      <header className="navbar navbar-light bg-light shadow-sm">
        <section className="navbar-brand border border-dark w-70 m-0 pl-3">
          {" "}
          RECAPITO{" "}
        </section>
        <section className="navbar-brand text-center border border-dark w-30 m-0">
          {" "}
          ALGUIEN{" "}
        </section>
      </header>
    </div>
  );
}
export default header;