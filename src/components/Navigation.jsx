import { FaMagnifyingGlass } from "react-icons/fa6";
import {NavLink} from 'react-router-dom';

let Navigation=()=>{
    return(
        <div className="w-full md:w-[90%] flex justify-between p-2 m-auto py-4 bg-black text-white md:bg-transparent">
                <NavLink to='/home'>
            <img src="images/Noble-Plastic-SVG-Logo.svg" alt="Noble Plastics" className="w-1/2 my-4 md:z-50 lg:w-2/5"/>
            </NavLink>
            <ul className="lg:w-3/5 xl:2/5 lg:flex lg:justify-between lg:text-2xl lg:my-8 lg:relative md:hidden hidden">
                <NavLink to='/about'>
                <li className="hover:text-[#a7cf48]">About</li>
                </NavLink>
                <NavLink to='/approach'>
                <li className="hover:text-[#a7cf48]">Approach</li>
                </NavLink>
                <NavLink to='/work'>
                <li className="hover:text-[#a7cf48]">Work</li>
                </NavLink>
                <NavLink to='/impact'>
                <li className="hover:text-[#a7cf48]">Impact</li>
                </NavLink>
                

                <li className="relative group"><FaMagnifyingGlass className="mt-2 text-[#a7cf48] "/>
                    <span className="flex justify-between absolute top-0 right-0 w-[80vh] bg-white p-2 invisible group-hover:visible">
                    <FaMagnifyingGlass className="mt-2 text-[#a7cf48] w-1/5 "/>
                    <input type="text" name="search" placeholder="Search" className="w-4/5 outline-none  text-[#a7cf48] "/>
                    </span>
                </li>
            </ul>

            {/* mobile and tablet view */}
            <span className="group  mt-4 relative lg:hidden">
                <FaMagnifyingGlass className="mt-2 text-[#a7cf48] md:text-2xl md:mt-8 md:z-50"/>
                <span className="flex justify-between absolute top-0 -right-1 w-[40vh] bg-white p-2 invisible group-hover:visible md:top-4">
                    <FaMagnifyingGlass className="mt-2 text-[#a7cf48] w-1/5 "/>
                    <input type="text" name="search" placeholder="Search" className="w-4/5 outline-none  text-[#a7cf48]"/>
                    </span>
            </span>

        </div>
    )
}
export default Navigation 