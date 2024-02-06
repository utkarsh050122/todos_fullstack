import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [edit, setEdit] = useState({});
  const [addNotificationTitle, setAddNotificationTitle] = useState("");
  const [editNotificationTitle, setEditNotificationTitle] = useState("");
  const [deleteNotificationTitle, setDeleteNotificationTitle] = useState("");

  const [addNotification, setAddNotification] = useState(false);
  const [editNotification, setEditNotification] = useState(false);
  const [deleteNotification, setDeleteNotification] = useState(false);

  const [data, setData] = useState([]);

  const [index,setIndex] = useState(null)
  const [task,setTasks] = useState(data)

  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem("todoItems"))
    setData(items || [])
  },[])

  useEffect(() => {
    fetch('http://localhost:5001/auth/task')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Failed to fetch tasks", error));
  }, [task]);
  

  return (
    <DataContext.Provider value={{
      data,
      setData,
      edit,
      setEdit,
      addNotificationTitle,
      editNotificationTitle,
      deleteNotificationTitle,
      setDeleteNotificationTitle,
      addNotification,
      editNotification,
      deleteNotification,
      setDeleteNotification,
      setAddNotificationTitle,
      setAddNotification,
      setEditNotificationTitle,
      setEditNotification,
      index,
      setIndex
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext



