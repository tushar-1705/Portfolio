import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields");
      return;
    }

    // Create form data object
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const response = await fetch('https://getform.io/f/bqompngb', {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        toast.success("Your message has been sent!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section name='Contact' className="max-w-screen-md mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">📬 Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Toast Notification */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default Contact;
