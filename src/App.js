import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodosList from './components/todolist';
import TodoDetail from './components/tododetails';
import NewTodo from './components/newtodo';




const AppWrapper = styled.div `
`;

function App() {
  return (
    <AppWrapper>
      <TodosList></TodosList>
      <TodoDetail></TodoDetail>
      <NewTodo></NewTodo>
    </AppWrapper>
  );

}

export default App;
