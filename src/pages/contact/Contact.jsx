import { useEffect, useState } from "react"
import emailjs from '@emailjs/browser';
import {toast} from "react-toastify"
const Contact = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const formSubmit =async (e) => {
    e.preventDefault()

    // const newValue = { fname, email, subject, message }
    // console.log(newValue)

    try {
      const templateParams = {
        user_name: fname,
        user_email: email,
        user_subject: subject,
        user_message: message,
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        templateParams,
        import.meta.env.VITE_SECRET
      );

      toast.success("Message Sent");
    } catch (e) {
      toast.error("Message Not Sent");
      console.log(e);
    }

    setFname("")
    setLname("")
    setPhone("")
    setEmail("")
    setSubject("")
    setCompany("")
    setMessage("")
  }

  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },[])
  
  return (
    <>
      <section className='mt-16'>
        <div className=' sm:max-w-[95%] md:max-w-[90%] m-auto px-3 md:flex-row flex flex-col'>
          <div className='w-full'>
            <h2 className="text-3xl font-bold">Contact form</h2>
            <p className="text-gray-500 text-sm mt-4">Fill out the form below and we will contact you shortly.</p>

            <form onSubmit={formSubmit} className="mt-4 md:max-w-[95%]">
              <div className='grid grid-cols-2 gap-7'>
                <div className='flex flex-col'>
                  <span className="text-gray-500">
                    First name <label className="text-red-900">*</label>
                  </span>
                  <input className="pl-2 border border-gray-300 py-3 mt-1" type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} minLength={2} maxLength={10} required />
                </div>
                <div className='flex flex-col'>
                  <span className="text-gray-500">
                    Last name
                  </span>
                  <input className="pl-2 border border-gray-300 py-3 mt-1" type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} minLength={2} maxLength={10} />
                </div>
                <div className='flex flex-col'>
                  <span className="text-gray-500">Subject <label className="text-red-900">*</label></span>
                  <input className="pl-2 border border-gray-300 py-3 mt-1" type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} minLength={5} maxLength={50} required />
                </div>
                <div className='flex flex-col'>
                  <span className="text-gray-500">
                    Email <label className="text-red-900">*</label>
                  </span>
                  <input className="pl-2 border border-gray-300 py-3 mt-1" type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} minLength={5} maxLength={30} required />
                </div>
                <div className='flex flex-col'>
                  <span className="text-gray-500">
                  Contact number
                  </span>
                  <input className="pl-2 border border-gray-300 py-3 mt-1" type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} minLength={10} maxLength={10} />
                </div>
                <div className='flex flex-col'>
                  <span className="text-gray-500">Company name</span>
                  <input className="pl-2 border border-gray-300 py-3 mt-1" type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} minLength={5} maxLength={30} />
                </div>
              </div>
              <div className='flex flex-col mt-8'>
                <span className="text-gray-500">
                  Write your message <label className="text-red-900">*</label>
                </span>
                <textarea className="p-2 border border-gray-300 mt-1 h-32" cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)} minLength={10} maxLength={100} required ></textarea>
              </div>
              <button className='px-6 rounded-lg md:px-8 lg:px-10 py-2 md:py-3 mt-5 mb-10 sm:mb-16 md:mb-20 lg:mb-28 bg-[#038c7f] shadow-sm shadow-[#038c7f] text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all'>Contact</button>
            </form>
          </div>

          <div className="mt-8 md:mt-12 ">
            <h3 className="text-xl font-bold mb-2">Visit our location</h3>
            <p className="text-gray-500">HAK, Hiranagar, Hamirpur, Himachal Pradesh 177001</p>
            <br />

            <h3 className="text-xl font-bold mb-2">Message us</h3>
            <span className="text-gray-500">HAK@hotelhak.com</span>
            <br />
            <span className="text-gray-500">+91 99677 84567</span>
            <br />

            <div className='mt-6 mb-16'>
              <h3 className="text-xl font-bold mb-2">Join us</h3>

              <div className='flex_space'>
                <i className='text-xl px-3 py-1 m-1 rounded-md bg-gray-100 border fab fa-facebook-f'></i>
                <i className='text-xl px-3 py-1 m-1 rounded-md bg-gray-100 border fab fa-twitter'></i>
                <i className='text-xl px-3 py-1 m-1 rounded-md bg-gray-100 border fab fa-linkedin'></i>
                <i className='text-xl px-3 py-1 m-1 rounded-md bg-gray-100 border fab fa-instagram'></i>
                <i className='text-xl px-3 py-1 m-1 rounded-md bg-gray-100 border fab fa-pinterest'></i>
                <i className='text-xl px-3 py-1 m-1 rounded-md bg-gray-100 border fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  )
}

export default Contact
