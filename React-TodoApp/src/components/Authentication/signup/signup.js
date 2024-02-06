import { useState } from "react";
//import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [data, setData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    passwordConfirm:""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { password, confirmPassword } = data;
  
    // Check if passwords match
    if (data.password !== data.passwordConfirm) {
      setError('Passwords do not match.');
      return; // Stop the handleSubmit function from proceeding
    }
       fetch('http://localhost:5001/auth/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      // const responseData = await response.json();
      // console.log(responseData.message);
      navigate('/login'); // Navigate to login page upon successful registration
    }) 
    .catch (error=> console.error('Error:', error))
      // const errorData = await response.json();
      // throw new Error(error.message);
    };

  
  
    // try {
    //   const url = "localhost:5001/auth/register";
    //   const { data: res } = await axios.post(url, data);
    //   console.log(res.message);
    //   navigate("/login"); // Assuming you're using React Router for navigation
    // } catch (error) {
    //   if (error.response && error.response.status >= 400 && error.response.status <= 500) {
    //     setError(error.response.data.message);
    //   }
    // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = "/api/users";
  //     const { data: res } = await axios.post(url, data);
  //     navigate("/login");
  //     console.log(res.message);
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       setError(error.response.data.message);
  //     }
   // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
        <div>
  <label htmlFor="first-name" className="sr-only">First Name</label>
  <input
    id="first-name"
    name="f_name" // Ensure this matches the state property name
    type="text"
    autoComplete="given-name" // Standard value for first name
    required
    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    placeholder="First Name"
    onChange={handleChange}
    value={data.f_name}
  />
</div>

<div>
  <label htmlFor="last-name" className="sr-only">Last Name</label>
  <input
    id="last-name"
    name="l_name" // Match this with the state property name
    type="text"
    autoComplete="family-name" // Standard value for last name
    required
    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    placeholder="Last Name"
    onChange={handleChange}
    value={data.l_name}
  />
</div>

          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
          </div>
          <div>
       <label htmlFor="passwordConfirm" className="sr-only">Confirm Password</label>
        <input
          id="passwordConfirm" // Unique ID
          name="passwordConfirm" // Corrected name attribute, matching the state property
          type="password"
          autoComplete="new-password" // Changed to "new-password" for the confirm password field
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={data.passwordConfirm}
      />
</div>

        </div>

        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>




/* <div>
            <label htmlFor="f_name" className="sr-only">First Name</label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              autoComplete="f_name"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
              onChange={handleChange}
              value={data.f_name}
            />
          </div>
          <div>
            <label htmlFor="l_name" className="sr-only">Last Name</label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              autoComplete="l_name"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last Name"
              onChange={handleChange}
              value={data.l_name}
            />
  </div> */
  //   <div className={styles.signup_container}>
  //     <div className={styles.signup_form_container}>
  //       <div className={styles.left}>
  //         <h1>Welcome Back</h1>
  //         <Link to="/login">
  //           <button type="button" className={styles.white_btn}>
  //             Sign in
  //           </button>
  //         </Link>
  //       </div>
  //       <div className={styles.right}>
  //         <form className={styles.form_container} onSubmit={handleSubmit}>
  //           <h1>Create Account</h1>
  //           <input
  //             type="text"
  //             placeholder="First Name"
  //             name="firstName"
  //             onChange={handleChange}
  //             value={data.firstName}
  //             required
  //             className={styles.input}
  //           />
  //           <input
  //             type="text"
  //             placeholder="Last Name"
  //             name="lastName"
  //             onChange={handleChange}
  //             value={data.lastName}
  //             required
  //             className={styles.input}
  //           />
  //           <input
  //             type="email"
  //             placeholder="Email"
  //             name="email"
  //             onChange={handleChange}
  //             value={data.email}
  //             required
  //             className={styles.input}
  //           />
  //           <input
  //             type="password"
  //             placeholder="Password"
  //             name="password"
  //             onChange={handleChange}
  //             value={data.password}
  //             required
  //             className={styles.input}
  //           />
  //           {error && <div className={styles.error_msg}>{error}</div>}
  //           <button type="submit" className={styles.green_btn}>
  //             Sign Up
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  );
};

export default Signup;