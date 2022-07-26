import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Label = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const InputBase = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  font-family: "Roboto";
  font-weight: 700;
  width: var(--width);
  color: currentColor;
  margin: 0;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    opacity: 1;
  }

  &:focus-visible {
    outline-offset: 2px;
  }
`;

const LargeInput = styled(InputBase)`
  font-size: ${18 / 16}rem;
  padding: 8px 0 8px 36px;
`;

const SmallInput = styled(InputBase)`
  font-size: ${14 / 16}rem;
  padding: 4px 0 4px 24px;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  height: fit-content;
  margin-top: auto;
  margin-bottom: auto;

  ${LargeInput} & {
    left: 4px;
  }

  ${SmallInput} & {
    left: 2px;
  }
`;

const variants = {
  small: SmallInput,
  large: LargeInput,
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const Input = variants[size];
  return (
    <Label style={{ "--width": `${width}px` }}>
      <IconWrapper
        id={icon}
        size={size === "small" ? 16 : 20}
        strokeWidth={size === "small" ? 1 : 2}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input type="text" placeholder={placeholder} />
    </Label>
  );
};

export default IconInput;
