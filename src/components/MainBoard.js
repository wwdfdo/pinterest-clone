import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import "./MainBoard.css";

function MainBoard(props) {
  let { pins } = props;
  return (
    <div>
      <Wrapper>
        <Container className="mainboard_container">
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

  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  background-color: white;
  text-align: center;
  column-gap: 5px;
  margin: 100px 10px;
  height: 100%;
`;
