"use client";

import {ChangeEvent, FormEvent, useState} from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // FIXME: Implement email sending
        e.preventDefault();
        console.log("Form data submitted:", formData);
        setSubmitted(true);
        // Réinitialiser le formulaire après l'envoi
        setFormData({ name: "", email: "", message: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            {submitted && (
                <p className={`w-fit px-3 py-1 rounded-full bg-green-300 text-green-950 mb-4`}>Your message has been sent successfully !</p>
            )}

            <div className={`mb-4`}>
                <label htmlFor={`name`} className={`block text-sm font-medium mb-1`}>
                    Name <span className={`text-main`}>*</span>
                </label>
                <input type={`text`} id={`name`} name={`name`} value={formData.name} onChange={handleChange}
                       required={true}
                       className={`w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main`}/>
            </div>

            <div className={`mb-4`}>
                <label htmlFor="email" className={`block text-sm font-medium mb-1`}>
                    Email <span className={`text-main`}>*</span>
                </label>
                <input type={`email`} id={`email`} name={`email`} value={formData.email} onChange={handleChange}
                       required={true}
                       className={`w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main`}/>
            </div>

            <div className={`mb-4`}>
                <label htmlFor={`message`} className={`block text-sm font-medium mb-1`}>
                    Message <span className={`text-main`}>*</span>
                </label>
                <textarea id={`message`} name={`message`} value={formData.message} onChange={handleChange} rows={4}
                          required={true}
                          className={`w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-main`}></textarea>
            </div>

            <button type={`submit`} className={`w-full bg-black text-white py-2 px-4 rounded-lg hover:opacity-90`}>
                Send
            </button>
        </form>
    );
}
