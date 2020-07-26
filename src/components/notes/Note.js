import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';


const Contain = styled.div`
  display: block;
  margin: 10px;
  border-radius: 6px;
  background-color: rgba(232, 237, 223, .6);

  p {
    padding-bottom: 10px;
    margin: 0 10px 0 10px;
  }
`;

const TitleAndIcon = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  height: 45px;

  svg {
    color: #333533;
    cursor: pointer;

    &:hover {
      font-size: 1.7rem;
      color: red;
    }
  }
`;

export const Note = ({ name, body }) => {
  return (
    <Contain>
      <div>
        <TitleAndIcon>
          <h2>{name}</h2>
          <DeleteIcon />
        </TitleAndIcon>
          <p>{body}</p>
      </div>
    </Contain>
  )
}
