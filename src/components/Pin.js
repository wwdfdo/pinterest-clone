import React from "react";
import styled from "styled-components";

function Pin(props) {
  return (
    <div>
      <Wrapper>
        <Container>
          <img src={props.urls?.regular} alt="" />
        </Container>
      </Wrapper>
    </div>
  );
}

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 230px;

  img {
    display: flex;
    width: 100%;
    border-radius: 16px;
    cursor: zoom-in;
    object-fit: cover;
  }
`;
