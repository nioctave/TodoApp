import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, deleteTodo }) => {
  return (
      <div className='Todo'>
          <p>{task.Task}</p>
          <div>
              <FontAwesomeIcon icon={faPenToSquare} />
              <FontAwesomeIcon icon={faTrash} onclick={() =>
                  deleteTodo(task.id)}/>
          </div>
      </div>
  )
}
