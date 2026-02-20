import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setStatus("");
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });

      setStatus("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setStatus("Error sending message.");
    }
    
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center px-4 py-6" id="contact">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Contact</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit} 
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1 relative">
              <FiUser className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 transition ${
                  errors.name
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Your name"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative">
              <FiMail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <div className="mt-1 relative">
              <FiMessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 transition resize-none ${
                  errors.message
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Write your message..."
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && (
          <p className="mt-5 text-sm text-center text-green-600">{status}</p>
        )}
      </div>
    </div>
  );
}