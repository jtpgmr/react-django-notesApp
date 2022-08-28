import React from "react";

import { ReactComponent as ReactLogo } from "../assets/react-logo.svg";
import { ReactComponent as DjangoLogo } from "../assets/django-logo.svg";

const Header = () => {
  return (
    <div className="app-header">
      <span><ReactLogo /></span>
      <h1>Notes</h1>
      <span className="django-logo"><DjangoLogo /></span>
    </div>
  );
};

export default Header;
