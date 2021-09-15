import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DialogModal from '../Dialog/DialogModal';
import DisplayTodo from '../DisplayTodo/DisplayTodo';
import moment from 'moment';
import './TodoHeader.css';

const styles = {
   wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '95%'
   },
   finished: {
      fontSize: '46px',
      color: '#fff'
   },
   total: {
      display: 'flex',
      flexDirection: 'column',
      color: '#fff'
   },
   weekDay: {
      color: '#fff',
      fontSize: '28px',
   },
   date: {
      color: '#fff',
      fontSize: '28px',
      marginLeft: 10
   }
}

const TodoHeader = ({
   handleOpenDialog,
   isOpen,
   handleSubmit,
   handleSetFieldValue,
   formData,
   isOpenDisplayTodo,
   handleCloseButton,
   handleEditTodo,
   handleRemoveTodo,
   todosCount
}) => {
   const weekDay = moment().format('dddd');
   const date = moment().date();
   
   return (
      <div className="todo-header">
         <div style={styles.wrapper}>
            <div className="todos-count">
               <span style={styles.finished}>{todosCount.finished}</span>
   
               <div style={styles.total}>
                  <span>Tasks</span>
                  <span>{`/ ${todosCount.total}`}</span>
               </div>
            </div>

            <div>
               <span style={styles.weekDay}>{weekDay}</span>
               <span style={styles.date}>{date}</span>
            </div>
         </div>


         <div className="add-todo" onClick={handleOpenDialog}>
            <AddCircleIcon color="primary" />
            <span className="icon-background" />
         </div>

         <DialogModal
            handleOpenDialog={handleOpenDialog}
            isOpen={isOpen}
            handleSubmit={handleSubmit}
            handleSetFieldValue={handleSetFieldValue}
            formData={formData}
         />

         <DisplayTodo
            formData={formData}
            isOpen={isOpenDisplayTodo}
            handleCloseButton={handleCloseButton}
            handleEditTodo={handleEditTodo}
            handleRemoveTodo={handleRemoveTodo}
         />
      </div>
   )
}

export default TodoHeader;