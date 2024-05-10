import React from "react";
import styled from "styled-components";
// import { clearAllUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/actions/index";

export const DeleteUser = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    // dispatch(clearAllUser());
    dispatch(clearAllUsers());
  };
  return (
    <Wrapper>
      <div>
        <button className="btn clear-btn" onClick={deleteUsers}>
          Clear Users
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn{
    text-transform:capitalize,
    background-color:#db338a;
    margin-top:2rem;
  }

`;
