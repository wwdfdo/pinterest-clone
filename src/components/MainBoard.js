import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function MainBoard(props) {
  let { pins } = props;
  return (
    <div>
      <Wrapper>
        <Container>
          {pins.map((pin, index) => {
            let { urls } = pin;
            return <Pin key={index} urls={urls} />;
          })}
        </Container>
      </Wrapper>
    </div>
  );
}

export default MainBoard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  background-color: white;

  column-count: 5;
  column-gap: 5px;
  margin: 0 auto;
  height: 100%;
  max-width: 1260px;
`;
