'use client'
import React, { useState } from 'react'

export default function ContactForm() {
    // State for form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                });
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="px-1 md:px-20 py-10">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col mx-auto space-y-5 text-sm font-roboto font-light max-w-xl"
            >
                {/* First name & Last name */}
                <section className="flex flex-col md:flex-row w-full gap-4">
                    <div className="input-group flex-1">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                            className="input w-full border p-2 rounded"
                        />
                        <label className="user-label">First Name</label>
                    </div>
                    <div className="input-group flex-1">
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                            className="input w-full border p-2 rounded"
                        />
                        <label className="user-label">Last Name</label>
                    </div>
                </section>

                {/* Email */}
                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                        className="input w-full border p-2 rounded"
                    />
                    <label className="user-label">Email</label>
                </div>

                {/* Phone Number */}
                <div className="input-group">
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                        className="input w-full border p-2 rounded"
                    />
                    <label className="user-label">Phone Number</label>
                </div>

                {/* Message */}
                <div className="input-group">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        autoComplete="off"
                        required
                        className="input w-full border p-2 rounded"
                    ></textarea>
                    <label className="user-label">Message</label>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white hover:bg-blue-600 p-3 font-medium rounded-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
