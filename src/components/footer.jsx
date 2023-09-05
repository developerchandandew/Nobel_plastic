import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
let Footer = () => {
    const [input,setInput] = useState({});
    const submitHandle=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_oxoimf6','template_s01nrcl',e.target,'zTymq1M0_hJIY-eVP').then(res=>console.log(res)).catch(error=>console.log(error));
        setInput({firstname:'',lastname:'',email:'',message:'',robot:''});
        alert('Submit Sucessfully');

    }

    return (
        <div className="bg-black text-white w-full p-1/5 flex flex-wrap lg:justify-between lg:py-6 lg:p-[5%]">
            <div className="touch w-full p-2 lg:w-1/2">
                <img src="images/Noble-Plastic-SVG-Logo.svg" alt="Logo" className="my-3 lg:w-3/5" />
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">This initiative has been supported by an Impact Investor and fashion retailer Marks & Spencer.</p>
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">Fuzhio Health and Business Services Pvt. Ltd.</p>
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">No. 25, RMV</p>
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">2nd Stage, AECS Layout, 1st Main Road,</p>
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">Ashwathnagar,</p>
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">Bangalore – 560094</p>
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">Phone: +91 937981 5394</p>
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">For more information please email</p>
                <p className="my-2 ml-4 md:text-lg lg:ml-0 xl:text-2xl">fuzhio@catalysts.org</p>


            </div>
            <div className="form w-full lg:w-1/2">
                <h1 className="text-2xl font-bold text-center lg:text-left lg:ml-4">Send Us Message</h1>
                <form className="p-4 md:flex md:justify-between md:flex-wrap " onSubmit={submitHandle}>
                    <div className='w-full md:w-[47%]'>
                    <input type="text" name="firstname" placeholder="First Name" autoComplete='off' value={input.firstname} required className=" text-lg w-full bg-gray-600 rounded-md p-3 my-2 " />
                    </div>
                    <div className='w-full md:w-[47%]'>
                    <input type="text" name="lastname" placeholder="Last Name" autoComplete='off' value={input.lastname} required className=" text-lg w-full bg-gray-600 rounded-md p-3 my-2 " />               
                    </div>
                    <div className='w-full'>
                    <input type="email" name="email" placeholder="Enter Email" autoComplete='off' value={input.email} required  className=" text-lg w-full bg-gray-600 rounded-md p-3 my-2" />               
                    </div>
                    <div className='w-full'>
                    <textarea name="message" placeholder="Message" autoComplete='off' value={input.message} required  className=" text-lg w-full h-48 bg-gray-600 rounded-md p-3 my-2 outline-none"></textarea>               
                    </div>

                   <div className="bg-gray-700  w-4/5 my-3 flex justify-between text-white p-2 rounded-md border-2 border-gray-600 md:w-1/2 lg:w-4/5">
                        <label className="p-2 my-3">
                            <input type="checkbox" name='robot' className="w-6 h-6" value={input.robot}/>
                            <span className="ml-2 text-lg ">I am not robot</span>
                        </label>
                        <div >
                            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" className="w-8 h-8 mx-8 mt-2" />
                            <p className="text-center text-xs">reCAPTCHA</p>
                            <p className="text-center text-xs">Privacy - terms</p>
                        </div>
                    </div>

                    <div className="w-full">
                        <button className="rounded-full border-2 border-[#a7cf48] bg-black text-[#a7cf48] p-2 my-3 px-8 text-xl block">Submit</button>
                    </div>
                </form>
            </div>
            <div className="nav border-y-white border-y-2 my-3 w-full md:w-[90%] md:m-auto lg:w-full">
                <div className="w-4/5 m-auto lg:w-2/5">
                    <ul className="flex justify-between p-3 my-4 cursor-pointer">
                        <NavLink to='/about'>
                            <li>About</li>
                        </NavLink>
                        <NavLink to='/approach'>
                            <li>Approach</li>
                        </NavLink>
                        <NavLink to='/work'>
                            <li>Work</li>
                        </NavLink>
                        <NavLink to='/impact'>
                            <li>Impact</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Footer;