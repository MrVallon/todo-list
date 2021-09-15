import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Checkbox from '@material-ui/core/Checkbox';
import './TodosRender.css';

const Todo = ({
   todo,
   handleOpenTodo,
   index,
   handleMarkTodo
}) => {
   const isFinishedTodo = todo.isFinished && 'todo-finished';
   
   return (
      <div className="todo-container">
         <span>
            <Checkbox
               icon={<RadioButtonUncheckedIcon />}
               checkedIcon={<CheckCircleOutlineIcon color="primary" />}
               onClick={(e: any) => handleMarkTodo(e.target.checked, index)}
               checked={todo.isFinished}
            />
         </span>

         <div className="todo-item" onClick={() => handleOpenTodo({ ...todo, index })}>
            <span className={isFinishedTodo}>{todo.todoName}</span>
            <ArrowForwardIosIcon fontSize="small" />
         </div>
      </div>
   )
}

const TodosRender = ({ todos, handleOpenTodo, handleMarkTodo }) => {
   return (
      <div className="todos-renderer-wrapper">
         {todos.map((todo, index) => (
            <Todo
               key={todo.id}
               todo={todo}
               handleOpenTodo={handleOpenTodo}
               index={index}
               handleMarkTodo={handleMarkTodo}
            />
         ))}
      </div>
   )
}

export default TodosRender;