import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { BaseBox } from "../shared";

const Container = styled(BaseBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  #logo {
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    span {
      margin-top: 3px;
    }
  }
  form {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

const FormBox = ({ children }) => {
  return <Container>{children}</Container>;
};

FormBox.propTypes = {
  children: PropTypes.any,
};

export default FormBox;
