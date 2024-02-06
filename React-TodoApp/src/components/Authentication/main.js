const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col items-center justify-center">
      <nav className="p-5 bg-blue-500 text-white w-full flex justify-between items-center">
        {/* <h1 className="text-xl">Logged In Successfully</h1> */}
        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100 transition duration-200 ease-in-out" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
    // <div className={styles.main_container}>
    //   <nav className={styles.navbar}>
    //     <h1>Logined Successfull</h1>
    //     <button className={styles.white_btn} onClick={handleLogout}>
    //       Logout
    //     </button>
    //   </nav>
    // </div>
  );
};

export default Main;
