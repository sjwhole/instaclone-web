import React from "react";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";
const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | SJsta</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
