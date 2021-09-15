import React, { useState } from 'react';
import TodoActions from '../TodoActions/TodoActions';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodosRender from '../TodosRender/TodosRender';
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

const initialFormData = {
  isEdit: false,
  todoName: '',
  todoNote: '',
  isFinished: false,
  id: '',
  index: null
}

const getIsFinishedTodosCount = (todos) => todos.reduce((acc, curr) => {
  acc.total = todos.length;

  if (curr.isFinished) {
    acc.finished = acc.finished + 1;
  }

  return acc;
}, { total: 0, finished: 0 });

const setFilterTab = (tab, todos) => {
  if (tab === 0) {
    return todos;
  } else if (tab === 1) {
    return todos.filter((todo) => !todo.isFinished)
  } else if (tab === 2) {
    return todos.filter((todo) => todo.isFinished)
  }
}

const Todo = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false);
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const todosCount = getIsFinishedTodosCount(todos);

  const sortedTodos = setFilterTab(tab, todos);
  
  const resetFormData = () => setFormData(initialFormData);

  const resetAll = () => {
    setIsOpen(false);
    setIsOpenDisplayTodo(false);
    resetFormData();
  }

  const handleChangeTab = (tabValue) => setTab(tabValue);

  const handleOpenDialog = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOpenTodo = (todo) => {
    setIsOpenDisplayTodo(true);
    setFormData(todo);
  }

  const handleEditTodo = () => {
    setFormData((prevState) => ({ ...prevState, isEdit: true }))
    setIsOpenDisplayTodo(false);
    handleOpenDialog();
  }

  const handleSetFieldValue = (fieldName, value) => setFormData((prevState) => ({ ...prevState, [fieldName]: value }));

  const handleSetTodoOnSubmit = (e) => {
    e.preventDefault();

    if (formData.isEdit) {
      const editedTodos = todos;
      editedTodos.splice(formData.index, 1, { ...formData, isEdit: false, index: null })

      setTodos(editedTodos);
    } else {
      setTodos((prevTodos) => [...prevTodos, { ...formData, id: uuidv4() }]);
    }

    resetAll();
  };

  const handleRemoveTodo = () => {
    setTodos(todos.filter((item) => item.id !== formData.id));
    resetAll();
  }

  const handleMarkTodo = (isChecked, index) => {
    const updatedTodos = todos.slice();
    updatedTodos.splice(index, 1, { ...todos[index], isFinished: isChecked })
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-wrapper">
      <TodoHeader
        handleOpenDialog={handleOpenDialog}
        isOpen={isOpen}
        handleSubmit={handleSetTodoOnSubmit}
        handleSetFieldValue={handleSetFieldValue}
        formData={formData}
        isOpenDisplayTodo={isOpenDisplayTodo}
        handleCloseButton={resetAll}
        handleEditTodo={handleEditTodo}
        handleRemoveTodo={handleRemoveTodo}
        todosCount={todosCount}
      />

      <TodoActions handleChangeTab={handleChangeTab} tab={tab} />

      <TodosRender
        todos={sortedTodos}
        handleOpenTodo={handleOpenTodo}
        handleMarkTodo={handleMarkTodo}
      />
    </div>
  );
}

export default Todo;
