import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";
import PropTypes from "prop-types";

const SBottomBox = styled(BaseBox)`
  padding: 20px 40px;
  text-align: center;
  width: 100%;
  a {
    font-weight: 600;
    color: ${(props) => props.theme.blue};
    margin-left: 2px;
  }
`;

const BottomBox = ({ cta, link, linkText }) => {
  return (
    <SBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
};

BottomBox.propTypes = {
  cta: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default BottomBox;
