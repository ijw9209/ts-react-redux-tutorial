import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';
import GithubProfileLoader from './component/GithubProfileLoader'
const App = () => {
  return (
    <>
      {/* <CounterContainer />
      <hr />
      <TodoApp /> */}
      <GithubProfileLoader />;
    </>
  );
}

export default App;
