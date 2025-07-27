"use client";
import { slideIn } from "@/app/utils/motion";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Trim all form values
		const trimmedName = form.name.trim();
		const trimmedEmail = form.email.trim();
		const trimmedMessage = form.message.trim();

		// Check if any field is empty
		if (!trimmedName || !trimmedEmail || !trimmedMessage) {
			toast.error("Please fill in all fields!");
			return;
		}

		// Validate name (at least 2 words with minimum 2 characters each)
		const nameWords = trimmedName.split(/\s+/);
		if (nameWords.length < 2) {
			toast.error("Please enter your full name (first and last name)");
			return;
		}
		
		// Check if each name part has at least 2 characters
		if (nameWords.some(word => word.length < 2)) {
			toast.error("Each part of your name should be at least 2 characters long");
			return;
		}

		// Validate email format with more comprehensive regex
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(trimmedEmail)) {
			toast.error("Please enter a valid email address!");
			return;
		}

		// Validate message (at least 10 words and 30 characters)
		const messageWords = trimmedMessage.split(/\s+/);
		if (messageWords.length < 10 || trimmedMessage.length < 30) {
			toast.error("Message must be at least 10 words and 30 characters long");
			return;
		}

		setLoading(true);
		axios.post("https://getform.io/f/broowzqa", {
			name: trimmedName,
			email: trimmedEmail,
			message: trimmedMessage
		})
			.then(() => {
				setLoading(false);
				toast.success(
					"A humble thanks for reaching me out. I will respond to you as soon as possible.",
				);
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				toast.error("Sorry!! Something went wrong!!");
			});
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				style={{ zIndex: 9999 }}
			/>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h3 className="heroHeadText">Contact.</h3>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name.</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Enter your full name (first and last name)"
							required
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email.</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email address?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message.</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say? (minimum 10 words and 30 characters)"
							required
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");