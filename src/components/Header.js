import React, { useState } from "react";
import styled from "styled-components";

import { BsPinterest } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BiFace } from "react-icons/bi";
import { GrDown } from "react-icons/gr";

function Header(props) {
  const [input, setInput] = useState("");
  const onSearchSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(input);
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <BsPinterest color="#BD081C" size={32} title="Pinterest" />
      </LogoWrapper>
      <HomeButton>
        <a href="/">Home Page</a>
      </HomeButton>
      <FollowingButton>
        <a href="/">Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <BsSearch />
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <BsFillBellFill className="icon-item" />
        <BsFillChatLeftTextFill className="icon-item" />
        <BiFace className="icon-item" />
        <GrDown className="icon-item" />
      </IconsWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
  position: fixed;
  width: 100%;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
`;

const HomeButtons = styled.div`
  display: flex;
  height: 40px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

const HomeButton = styled(HomeButtons)`
  background-color: rgb(17, 17, 17);
  a {
    text-decoration: none;
    color: white;
  }
`;

const FollowingButton = styled(HomeButtons)`
  background-color: white;
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: grey;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  padding-left: 20px;
  border: none;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 10px;
    font-size: 16px;
    focus: none;
  }

  input:focus {
    outline: none;
  }

  form > button {
    display: none;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 30px;

  .icon-item {
    padding-left: 16px;
    font-size: 28px;
    cursor: pointer;
  }
`;
