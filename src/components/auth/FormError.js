import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const SFormError = styled.span`
  color: red;
  font-weight: 600;
  font-size: 12px;
  margin: 5px 0px 10px 0px;
`;

const FormError = ({ message }) => {
  return message === "" || !message ? null : <SFormError>{message}</SFormError>;
};

FormError.propTypes = {
  message: PropTypes.any,
};

export default FormError;
