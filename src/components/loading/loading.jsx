import React from "react";
import styled from "styled-components";

const LoadingDiv = styled.div`
  //   margin-top: 100px;
  //   height: 550px;
  display: flex;
  justify-content: center;
`;
export function LoadingComponent() {
  return (
    <LoadingDiv>
      <span>Loading</span>
    </LoadingDiv>
  );
}
