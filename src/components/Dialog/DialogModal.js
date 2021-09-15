import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import './DialogModal.css';

const DialogModal = ({ 
   handleOpenDialog, 
   isOpen, 
   handleSubmit, 
   handleSetFieldValue, 
   formData,
}) => {
   return (
      <Dialog onClose={handleOpenDialog} open={isOpen}>
         <MuiDialogTitle>{formData.isEdit ? 'Edit Todo' : 'Add new Todo'}</MuiDialogTitle>

         <MuiDialogContent>
            <form onSubmit={handleSubmit}>
               <TextField
                  label="Todo"
                  variant="outlined"
                  onChange={(e) => handleSetFieldValue('todoName', e.target.value)}
                  value={formData.todoName}
               />

               <TextField
                  label="Note"
                  multiline
                  rows={4}
                  variant="outlined"
                  onChange={(e) => handleSetFieldValue('todoNote', e.target.value)}
                  value={formData.todoNote}
               />

               <MuiDialogActions>
                  <Button color="primary" onClick={handleOpenDialog}>Close</Button>
                  <Button disabled={!formData.todoName} type="submit" color="primary">{formData.isEdit ? 'Edit' : 'Add'}</Button>
               </MuiDialogActions>
            </form>
         </MuiDialogContent>
      </Dialog>
   )
}

export default DialogModal;