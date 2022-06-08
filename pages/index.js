import { useState } from "react"
import { getDatabase, ref, set } from "firebase/database";

export default function Home() {
  const [inputs, setInputs] = useState({});
  const [successmsg, setsuccessmsg] = useState(null);

  // input change event
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    if (successmsg) {
      setsuccessmsg(null);
    }
  }

  // submit button event
  const handleSubmit = (event) => {
    event.preventDefault();
    
    writeUserData({...inputs, date: new Date().toString()});
  }

  const writeUserData = (data) => {
    console.log(data);
    const db = getDatabase();
    set(
      ref(db, 'query/' + Date.now()), 
      data
    )
    .then(() => {
      console.log('// Data saved successfully!');
      setInputs({});
      if (!successmsg) {
        setsuccessmsg(true);
      }
    })
    .catch((error) => {
      console.log('// The write failed...', error);
      setsuccessmsg(false);
    });

    
  }

  return (
    <main>
      <h1 className="text-3xl font-bold flex items-center justify-center text-[#6B7280] pt-4 border-[#e0e0e0]">
        Submit your query
      </h1>
      
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input type="text" name="fullname" id="name" placeholder="Full Name" value={inputs.fullname || ""} onChange={handleChange} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                Email Address
              </label>
              <input type="email" name="email" id="email" placeholder="example@domain.com" value={inputs.email || ""} onChange={handleChange} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                Subject
              </label>
              <input type="text" name="subject" id="subject" placeholder="Enter your subject" value={inputs.subject || ""} onChange={handleChange} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                Message
              </label>
              <textarea rows={4} name="message" id="message" placeholder="Type your message" value={inputs.message || ""} onChange={handleChange} className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
            
            {/* Success Message */}
            <div className={`bg-green-100 rounded-md p-3 flex mt-3 ${successmsg ? '' : 'hidden'}`}>
              <svg className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 0h24v24H0z" stroke="none" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div className="text-green-700">
                <div className="font-bold text-xl">Your query is submitted succcessfully!</div>
                <div>We will get back to shortly.</div>
              </div>
            </div>

            {/* Error message */}
            <div className={`flex gap-4 bg-red-100 p-4 rounded-md mt-3 ${successmsg === false ? '' : 'hidden'}`}>
              <div className="w-max">
                <div className="h-10 w-10 flex rounded-full bg-gradient-to-b from-red-100 to-red-300 text-red-700 inline-flex items-center justify-center">
                  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-red-700"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" /></svg>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <h6 className="font-medium text-red-900">Permission denied</h6>
                <p className="text-red-700 leading-tight"> - please complete all the fields above</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
  