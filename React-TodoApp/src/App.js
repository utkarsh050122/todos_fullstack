import React from "react";
import Signup from "./components/Authentication/signup/signup";
import Login from "./components/Authentication/Login/login";
import Main from "./components/Authentication/main";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import { Route, Routes, Navigate } from "react-router-dom";
import EditTodo from "./components/EditTodo";
import TaskDetails from "./components/TaskDetails";
import { DataProvider } from "./context/DataContext";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const user = localStorage.getItem("token");
  return (
    <DataProvider>
      <div>
        <Routes>
          {user && <Route path="/main" element={<Main/>} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addTodo" element={<AddTodo />} />
          <Route path="/edit" element={<EditTodo />} />
          <Route path="/todo/:id" element={<TaskDetails />} />
          <Route path="*" element={<PageNotFound />}/>
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </DataProvider>
  );
};

export default App;
