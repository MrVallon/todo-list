import React from 'react';
import ListIcon from '@material-ui/icons/List';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckIcon from '@material-ui/icons/Check';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './TodoActions.css';

const TodoActions = ({ handleChangeTab, tab }) => {
   return (
      <div className="actions-wrapper">
         <Tabs
            value={tab}
            onChange={(e, tabValue) => handleChangeTab(tabValue)}
            indicatorColor="primary"
            textColor="primary"
         >
            <Tab label={(<ListIcon />)} />
            <Tab label={(<RadioButtonUncheckedIcon />)} />
            <Tab label={(<CheckIcon />)} />
         </Tabs>
      </div>
   )
}

export default TodoActions;