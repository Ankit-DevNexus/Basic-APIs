import React, { useState } from 'react';
import Navbar from '../../Navbar';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

function SignIn() {
  const [signIn, setsignIn] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setsignIn({ ...signIn, [e.target.name]: e.target.value });
  };

   useEffect(() =>{
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11"
      script.async = true;
       script.onload = () => {
      // Safe to use Swal now
      window.Swal = window.Swal || window.swal; // in case of lowercase fallback
    };
      document.body.append(script);
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Signing in with:', signIn);
    // Add login logic/API call here
     Swal.fire({
          title: "Processing...",
          text: "Please wait while we confirm your booking.",
          allowOutsideClick: false,
          didOpen: () => {
              Swal.showLoading();
          }
      });

    try {
      const response = await fetch('http://localhost:8000/api/sign-in',{
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signIn),
      });

      const data = await response.json();
      // console.log("Data", data);
      

      if (response.ok) {
         Swal.fire({
            title: "Success!",
            text: "Login successfuly!",
            icon: "success",
            customClass : {
            popup: "small-popup",
            title: "small-title",
            icon: "small-icon",
            confirmButton: "small-button"
            }
        }).then(()=>{
            window.location.href = '/';
            setContact({ email: '', password :''});
        })
        // window.location.href = '/';
        // console.log("data.message ||", data.message);
        
      }else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        // alert(data.message ||'Sign in failed');
      }
    } catch (error) {
      console.log('Error:', error);
      alert("Server error")
    }
  };

  return (
   <>
   <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={signIn.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={signIn.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
   </>
  );
}

export default SignIn;
