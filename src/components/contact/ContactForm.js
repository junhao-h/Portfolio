import Button from '../reusable/Button';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cyn6k0e', 'template_gef1dw1', form.current, 'bqJ7iIBNQJbUyjMQ1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
				ref={form}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<div className="font-general-regular">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="name"
						>
							Full Name
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="name"
							name="name"
							type="text"
							required
							placeholder="Your Name"
							aria-label="Name"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="company"
						>
							Company
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="company"
							name="company"
							type="text"
							required
							placeholder="Your Company"
							aria-label="Company"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="email"
							name="email"
							type="text"
							required
							placeholder="Your Email"
							aria-label="Email"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="subject"
						>
							Subject
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="subject"
							name="subject"
							type="text"
							required
							placeholder="Subject"
							aria-label="Subject"
						/>
					</div>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
							value="Send"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
