import React, { useContext } from 'react';
import {NotesContext} from '../../context/notesContext'
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


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
  margin: 0 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;

  svg:first-child {
    margin-right: 5px;
  }

  svg {
    cursor: pointer;
    color: #333533;

    transition: 100ms ease font-size;

    &:hover:first-child {
      font-size: 1.7rem;
      color: #1D75BF;
    }
    &:hover:nth-child(2) {
      font-size: 1.7rem;
      color: red;
    }
  }
`;

export const Note = ({ name, body, id }) => {
  
  const { deleteNote, setActiveNote, setEditingNote } = useContext(NotesContext);
  const handleClickDelete = () => {
    deleteNote(id)

  }

  const handleClickEdit = () => {
    setActiveNote({
      name,
      body,
      id
    });
    setEditingNote(true);
  }

  return (
    <Contain>
      <div>
        <TitleAndIcon>
          <h2>{name}</h2>
          <div>
            <EditIcon
              onClick={handleClickEdit}
            />
            <DeleteIcon
              onClick={handleClickDelete}
            />
          </div>
        </TitleAndIcon>
          <p>{body}</p>
      </div>
    </Contain>
  )
}
