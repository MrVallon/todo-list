import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import './DisplayTodo.css';

const DisplayTodo = ({
   isOpen,
   formData,
   handleCloseButton,
   handleEditTodo,
   handleRemoveTodo
}) => (
   <Dialog onClose={handleCloseButton} open={isOpen}>
       <MuiDialogTitle>
           <div className="display-todo-title">Your Todos</div>
       </MuiDialogTitle>
      <MuiDialogContent>
         <div>
            <h2>{formData.todoName}</h2>
            <div>{formData.todoNote}</div>
         </div>
      </MuiDialogContent>

      <MuiDialogActions>
         <div className="display-buttons-wrapper">
            <Button color="secondary" variant="outlined" onClick={handleRemoveTodo}>Remove</Button>

            <div>
               <Button color="primary" onClick={handleCloseButton}>Close</Button>
               <Button color="primary" onClick={handleEditTodo}>Edit</Button>
            </div>
         </div>
      </MuiDialogActions>
   </Dialog >
)

export default DisplayTodo;