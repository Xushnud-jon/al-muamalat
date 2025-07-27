import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className=" max-w-7xl min-h-[705px] mx-auto px-3 md:px-0 py-16 flex flex-col md:flex-row">
      {/* Left Column - Contact Info */}
      <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
        <div className="mb-12">
          <h1 className="text-[64px] font-bold text-[#333] mb-6">Let's Talk</h1>
          <p className="text-lg text-[#666] leading-relaxed">
            Have some big idea or brand to develop and need help?<br />
            Then reach out we'd love to hear about your project and provide help
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Email</h2>
            <Link 
              to="mailto:beebs@gmail.com" 
              className="text-lg text-[#555] hover:text-[#009688] transition-colors"
            >
              beebs@gmail.com
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Socials</h2>
            <div className="flex space-x-6 md:flex-col gap-3">
              <Link to="/" className="text-[#555] hover:text-[#009688] transition-colors underline">
                <span className="text-lg">Instagram</span>
              </Link>
              <Link to="/" className="text-[#555] hover:text-[#009688] transition-colors underline">
                <span className="text-lg">Twitter</span>
              </Link>
              <Link to="/" className="text-[#555] hover:text-[#009688] transition-colors underline">
                <span className="text-lg">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="w-full md:w-1/2">
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center h-full flex items-center justify-center">
            <div>
              <h3 className="text-2xl font-medium text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-600">Your message has been submitted successfully.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 h-full">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#555] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border  border-[#ddd] rounded-md focus:ring-2 focus:ring-[#009688] focus:border-[#009688]"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#555] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#009688] focus:border-[#009688]"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#555] mb-2">
                What service are you interested in
              </label>
              <select
                id="service"
                {...register('service')}
                className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#009688] focus:border-[#009688] bg-white"
              >
                <option value="">Select project type</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="design">UI/UX Design</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-[#555] mb-2">
                Budget
              </label>
              <select
                id="budget"
                {...register('budget')}
                className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#009688] focus:border-[#009688] bg-white"
              >
                <option value="">Select project budget</option>
                <option value="<1000">Under $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-20000">$5,000 - $20,000</option>
                <option value="20000+">$20,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#555] mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="w-full px-4 py-3 border border-[#ddd] rounded-md focus:ring-2 focus:ring-[#009688] focus:border-[#009688]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#009688] hover:bg-[#00796b] text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}