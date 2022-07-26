/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const BaseWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const LargeWrapper = styled(BaseWrapper)`
  border-radius: 8px;
  height: 24px;
  padding: 4px;
`;

const MediumWrapper = styled(BaseWrapper)`
  border-radius: 4px;
  height: 12px;
`;

const SmallWrapper = styled(BaseWrapper)`
  border-radius: 4px;
  height: 8px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  const Wrapper = {
    large: LargeWrapper,
    medium: MediumWrapper,
    small: SmallWrapper,
  }[size];
  return (
    <Wrapper role="progressbar" aria-valuenow={value}>
      <BarWrapper>
        <Bar style={{ width: `${value}%` }} />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
