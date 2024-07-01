import React, { useState, useRef } from 'react'
import { Header, Alert } from '../../components'
import { data } from '../../constants'
import helpSendEmail from '../../helpers/EmailHelper'
import shortid from 'shortid'

const ContactUs = () => {
  const [sending, setSending] = useState(false);
  const [alertState, setAlertState] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const form = useRef();
  const emailRef = useRef();

  const setAlert = (severity, message) => {
    setAlertState(true);
    setAlertSeverity(severity);
    setAlertMessage(message);
  };

  const clearAlert = () => {
    setAlertState(false);
    setAlertSeverity('');
    setAlertMessage('');
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    clearAlert();
    setSending(true);

    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');

    let response = await helpSendEmail(userName, userEmail, message);

    if (response === 'Success') {
      e.target.reset();
      setAlert('success', 'Email sent successfully!');
    } else {
      setAlert('error', response);
    }

    setSending(false);
  };

  return (
    <div id='contact-us' >
      <Header title={data.contactUsPage.title} />
      {(alertState) ?
        (<Alert
          alertSeverity={alertSeverity}
          alertMessage={alertMessage}
          onClose={() => clearAlert()} />
        ) : (
          <React.Fragment />
        )}
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col max-w-5xl min-h-[45vh] justify-center items-center'>
          {/* <p className='text-4xl p-4'>
            {data.contactUsPage.subtitle}
          </p> */}
          {data.contactUsPage.description.map((desc) => (
            <p className='p-4'
              key={shortid.generate()}>
              {desc} <br />
            </p>
          ))}
          <div className="w-full bg-accent-light-50 rounded-md p-4">
            <form className='flex flex-col'
              ref={form}
              onSubmit={sendEmail}>
              <label className='py-2 font-medium'>Name</label>
              <input className='border-2 rounded-md' type="text" name="user_name" required />
              <label className='py-2 font-medium'>Email</label>
              <input className='border-2 rounded-md' type="email" name="user_email" ref={emailRef} required />
              <label className='py-2 font-medium'>Message</label>
              <textarea className='min-h-40 border-2 rounded-md p-2' name="message" required />
              <button
                className="self-center bg-accent-dark-500 hover:bg-accent-dark-300
                text-white font-bold mt-4 py-2 px-4 
                border accent-dark-900 rounded"
                type="submit"
                value="Send"
                disabled={sending}>
                Send Email
              </button>
            </form>
          </div>
          <span className="h-1 w-3/4 mt-4 bg-accent-dark-100 lg:w-1/2"></span>
          <p className='m-8 text-4xl italic'>{data.contactUsPage.subtitle}</p>
          <span className="h-1 w-3/4 mb-8 bg-accent-dark-100 lg:w-1/2"></span>
        </div>
      </div>
    </div>
  )
}

export default ContactUs