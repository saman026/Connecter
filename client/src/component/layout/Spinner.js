import React, { Fragment } from "react";

import spinner from "../auth/spinner.gif";

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt='Loading...'
    />
  </Fragment>
);
