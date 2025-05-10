import React, { useState } from 'react';
import Navbar from '../../Navbar';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

function SignUp() {
    const [signUp, setSignUp] = useState({
        ID: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handle = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
    };

    const { ID, name, email, password, confirmPassword } = signUp;

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

        Swal.fire({
            title: "Processing...",
            text: "Please wait while we confirm your booking.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/sign-up`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signUp),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Signup successfuly!",
                    icon: "success",
                    customClass: {
                        popup: "small-popup",
                        title: "small-title",
                        icon: "small-icon",
                        confirmButton: "small-button"
                    }
                }).then(() => {
                    window.location.href = '/';
                    setContact({ ID: '', name: '', email: '', password: '', confirmPassword: '' });
                })
                // alert('Sign up successful');

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                // alert(data.message || 'Sign up failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Server error');
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ID:</label>
                            <input
                                type="text"
                                name="ID"
                                value={signUp.ID}
                                onChange={handle}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />


                            <label className="block text-sm font-medium text-gray-700 mb-1">User Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={signUp.name}
                                onChange={handle}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={signUp.email}
                                onChange={handle}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={signUp.password}
                                onChange={handle}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={signUp.confirmPassword}
                                onChange={handle}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
