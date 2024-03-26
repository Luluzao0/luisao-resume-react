{/*



*/}

import emailjs from 'emailjs-com';
import React, {ChangeEvent, FormEvent, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = React.memo(() => {
  // State to hold form data
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // State to hold success message
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Handle form field changes
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setData((prevData) => ({...prevData, [name]: value}));
  };

  // Handle form submission
  const handleSendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      emailjs.send('service_964ukp7', 'template_no03tx8', data as unknown as Record<string, unknown>, 'b4Z4AJlhtJ57rwcYq')
        .then(() => {
          console.log('Email sent successfully');
          setData({name: '', email: '', message: ''}); // Reset form
          setSuccessMessage('Email enviado com sucesso!'); // Set success message
        }, (error) => {
          console.error('Error sending email:', error);
        });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSendMessage}>
      {/* Input fields */}
      <input className="bg-neutral-700 border-0 focus:ring-1 focus:ring-orange-600 rounded-md text-neutral-200 text-sm" name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input autoComplete="email" className="bg-neutral-700 border-0 focus:ring-1 focus:ring-orange-600 rounded-md text-neutral-200 text-sm" name="email" onChange={onChange} placeholder="Email" required type="email" />
      <textarea className="bg-neutral-700 border-0 focus:ring-1 focus:ring-orange-600 rounded-md text-neutral-200 text-sm" maxLength={250} name="message" onChange={onChange} placeholder="Message" required rows={6} />
      {/* Submit button */}
      <button className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-stone-800" type="submit">
        Send Message
      </button>
      {/* Success message */}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
});

export default ContactForm;
