import React from "react";

import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <h1>Advanced To-Do App</h1>
      {isAuthenticated ? (
        <>
          <TaskList />
        </>
      ) : (
        <p>Please log in to manage tasks.</p>
      )}
    </div>
  );
};

export default Home;
