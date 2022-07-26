import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const CustomChevron = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;
`;

const CustomSelect = styled.select`
  appearance: none;
  border: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  font-family: "Roboto";
  color: inherit;
  cursor: pointer;
  width: calc(16px + ${(p) => p.numChars}ch + 52px);
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <CustomSelect
        value={value}
        onChange={onChange}
        numChars={displayedValue.length}
      >
        {children}
      </CustomSelect>
      <CustomChevron id="chevron-down" strokeWidth={2} />
    </Wrapper>
  );
};

export default Select;
