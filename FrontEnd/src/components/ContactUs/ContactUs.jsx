import React, { useState } from 'react';
import Navbar from '../../Navbar';
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import '../ContactUs/contactus.css'

function ContactUs() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
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
    // console.log('Form submitted:', contact);

    Swal.fire({
            title: "Processing...",
            text: "Please wait while we confirm your booking.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    try {
      const response = await fetch(`http://localhost:8000/api/contact-us`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Sent successfuly!",
          icon: "success",
          customClass : {
            popup: "small-popup",
            title: "small-title",
            icon: "small-icon",
            confirmButton: "small-button"
          }
        }).then(()=>{
          setContact({ name: '', email: '', company: '', message: '' });
          window.location.href = '/';
        })
        // alert('mail sent');
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        // alert(data.message || 'failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-svh bg-gray-200 flex items-center justify-center px-4">
        <div className="min-w-lg min-h-min max-w-2xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contact.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={contact.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={contact.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
