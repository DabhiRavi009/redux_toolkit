import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/userSlice";

export const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      {data?.map((user, id) => (
        <div key={id} className="container">
          <li>{user}</li>
          <button className="btn-delete" onClick={() => deleteUser(id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
  }
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    color: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 5px;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .delete-icon {
    font-size: 1.5rem;
  }
`;

export default DisplayUser;
