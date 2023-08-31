import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaMagnifyingGlass } from "react-icons/fa6";
import {Link,NavLink} from 'react-router-dom';
import CountUp from "react-countup";
import Navigation from "../Navigation";
import Footer from "../footer";
import MultiCarousel from "../MultiCarousel";


const Home = () => {
  
    return (
        <>
            <div className=" w-full h-[80vh] relative ">
                <Navigation className='md:hidden' />
                <div className="invisible md:visible w-full md:w-[90%] flex justify-between p-2 m-auto py-4 bg-black text-white md:bg-transparent md:absolute md:top-0 md:left-0 z-50">
                    <NavLink to='/home'>
                        <img src="images/Noble-Plastic-SVG-Logo.svg" alt="Noble Plastics" className="w-1/2 my-4 md:z-50 lg:w-2/5" />
                    </NavLink>
                    <ul className="lg:w-3/5 xl:2/5 lg:flex lg:justify-between lg:text-2xl lg:my-8 lg:relative md:hidden hidden">
                        <NavLink to='/about'>
                            <li className="hover:text-[#a7cf48] hover:before:content-[''] hover:before:absolute hover:before:top-14 hover:before:left-8 hover:before:w-3 hover:before:h-3 hover:before:bg-green-100 hover:before:rounded-full">About</li>
                        </NavLink>
                        <NavLink to='/approach'>
                            <li className="hover:text-[#a7cf48] hover:before:content-[''] hover:before:absolute hover:before:top-14 hover:before:left-44 xl:hover:before:left-72 hover:before:w-3 hover:before:h-3 hover:before:bg-green-100 hover:before:rounded-full">Approach</li>
                        </NavLink>
                        <NavLink to='/work'>
                            <li className="hover:text-[#a7cf48] hover:before:content-[''] hover:before:absolute hover:before:top-14 hover:before:right-72 xl:hover:before:right-[29rem] hover:before:w-3 hover:before:h-3 hover:before:bg-green-100 hover:before:rounded-full">Work</li>
                        </NavLink>
                        <NavLink to='/impact'>
                            <li className="hover:text-[#a7cf48] hover:before:content-[''] hover:before:absolute hover:before:top-14 hover:before:right-36 xl:hover:before:right-56  hover:before:w-3 hover:before:h-3 hover:before:bg-green-100 hover:before:rounded-full">Impact</li>
                        </NavLink>


                        <li className="relative group"><FaMagnifyingGlass className="mt-2 text-[#a7cf48] " />
                            <span className="flex justify-between absolute top-0 right-0 w-[80vh] bg-white p-2 invisible group-hover:visible">
                                <FaMagnifyingGlass className="mt-2 text-[#a7cf48] w-1/5 " />
                                <input type="text" name="search" placeholder="Search" className="w-4/5 outline-none text-black" />
                            </span>
                        </li>
                    </ul>

                    {/* mobile and tablet view */}
                    <span className="group  mt-4 relative lg:hidden">
                        <FaMagnifyingGlass className="mt-2 text-[#a7cf48] md:text-2xl md:mt-8 md:z-50" />
                        <span className="flex justify-between absolute top-0 -right-1 w-[40vh] bg-white p-2 invisible group-hover:visible md:top-4">
                            <FaMagnifyingGlass className="mt-2 text-[#a7cf48] w-1/5 " />
                            <input type="text" name="search" placeholder="Search" className="w-4/5 outline-none text-black" />
                        </span>
                    </span>

                </div>
                {/* naver */}
                <div className="w-full h-full md:absolute md:top-0 md:left-0 md:z-0">
                    {/* <Navigation className='hidden md:block md:absolute md:top-0 md:left-0 bg-transparent'/> */}
                    <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false}>
                        <div>
                            <img src="images/home/slide1.png" alt="slide1" />
                        </div>
                        <div>
                            <img src="images/home/slide2.png" alt="slide1" />
                        </div>
                        <div>
                            <img src="images/home/slide3.png" alt="slide1" />
                        </div>

                    </Carousel>
                </div>
                <div className="bg-[#2293cb] text-white p-2 absolute bottom-0 md:w-2/5 md:bottom-[30%] md:right-0 ">
                    <h1 className="py-3 font-semibold text-3xl xl:text-5xl">Noble Plastics</h1>
                    <p className="my-3 xl:text-xl">An eco-social initiative by the Catalyst Group that champions the effective use of plastic waste, while promoting the well-being of people and the planet.</p>
                </div>
            </div>

            <div className="hidden xl:block w-full mt-32 bg-black h-[25vh]"></div>

            <div className=" w-full bg-[#1C1C1C] md:flex md:justify-between xl:hidden">
                <div className="w-full md:w-1/2 ">
                    <img src="images/home/worker1.jpeg" alt="workers" className="lg:w-full" />
                </div>
                <div className="w-full bg-[#a7cf48] p-3 md:w-1/2 ">
                    <h1 className="font-bold text-2xl md:text-4xl py-10 lg:pt-20 lg:text-5xl">AboutUs</h1>

                    <p className="my-3 md:text-lg lg:text-xl">Noble Plastics is a Circular Economy initiative which champions the effective use of plastic waste while promoting the well-being of people and the planet.</p>

                    <p className="my-3 md:text-lg lg:text-xl">An incubation of the <strong>Catalyst Group,</strong> Noble Plastics works in line with the UN SDGs by integrating sustainability and social responsibility into supply chains across the apparel industry, while benefiting people and the planet.</p>
                    <div className="w-full text-center md:text-left">
                        <Link to='/about'>
                        <button className="bg-[#a7cf48] rounded-full border-2 border-black p-3 px-6 my-3 cursor-pointer">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>

            

            {/* what makes us unique */}
            <div className="w-full bg-[#1C1C1C]">
                <h1 className="font-bold text-4xl text-center py-10 xl:text-6xl "><span className="text-[#2293cb]">What Makes Us</span> <span className="text-[#a6ce41]">Unique</span></h1>
                <p className="my-6 md:w-4/5 md:m-auto md:text-lg text-center text-white xl:text-2xl">The well-being of people, the planet and prosperity of all our stakeholders lie at the heart of everything we do.</p>
                <div className="flex flex-col w-full mb-6 md:flex-row my-10 md:mb-28">
                    <div className="w-4/5 m-auto my-3 md:w-1/4 xl:border-r-2 xl:border-white">
                        <img src="images/home/people.png" alt="people" className="" />
                    </div>
                    <div className="w-4/5 m-auto my-3 md:w-[30%] md:px-5 md:border-l-2 md:border-r-2 md:border-white xl:border-l-0 ">
                        <img src="images/home/planet.png" alt="planet" />
                    </div>
                    <div className="w-4/5 m-auto my-3 md:w-1/4">
                        <img src="images/home/prosperity.png" alt="prosperity" />
                    </div>
                </div>

                <div className="imagge flex flex-col md:flex-row">
                    <img src="images/home/worker2.jpeg" alt="workers" className="md:w-[33%]" />
                    <img src="images/home/worker3.jpeg" alt="workers" className="md:w-[33%]" />
                    <img src="images/home/worker4.jpeg" alt="workers" className="md:w-[34%]" />
                </div>
            </div>

            <div className="our-impact bg-[#1C1C1C]">
                <h1 className="text-4xl py-10 text-center font-semibold xl:text-6xl"><span className="text-[#2293cb]">Our</span> <span className="text-[#a7cf48]">Impact</span></h1>

                <div className="count-up text-center w-full flex flex-col items-center md:flex-row md:flex-wrap md:p-5 lg:w-4/5 lg:m-auto">
                    <div className="w-4/5 text-center my-3 md:w-[47%]">
                        <img src="images/impact/rupee.svg" alt="rupee" className="m-auto" />
                        <h1 className="text-[#a7cf48] text-2xl font-bold xl:text-4xl">INR &nbsp;
                            <CountUp start={0} end={90} duration={3} delay={6} />+ Lakh</h1>
                        <p className="text-white md:text-lg xl:text-4xl lg:w-4/5 lg:m-auto">generated in wages for marginalised groups</p>
                    </div>
                    <div className="w-4/5 text-center my-3 md:w-[47%]">
                        <img src="images/impact/plants.svg" alt="plants" className="m-auto" />
                        <h1 className="text-[#2293cb] text-2xl font-bold xl:text-4xl">
                            <CountUp start={0} end={20} duration={3} delay={6} />,500+</h1>
                        <p className="text-white md:text-lg xl:text-4xl lg:w-4/5 lg:m-auto">trees planted in Karnataka to achieve carbon neutrality</p>
                    </div>
                    <div className="w-4/5 text-center my-3 md:w-[47%] lg:pt-6">
                        <img src="images/impact/heart.svg" alt="heart" className="m-auto" />
                        <h1 className="text-[#2293cb] text-2xl font-bold xl:text-4xl">INR &nbsp;
                            <CountUp start={0} end={50} duration={3} delay={6} />+ lakh</h1>
                        <p className="text-white md:text-lg xl:text-4xl lg:w-4/5 lg:m-auto">invested in improving health outcomes</p>
                    </div>
                    <div className="w-4/5 text-center my-3 md:w-[47%] md:mt-5">
                        <img src="images/impact/garbage.svg" alt="garbage" className="m-auto" />
                        <h1 className="text-[#a7cf48] text-2xl font-bold xl:text-4xl">
                            <CountUp start={0} end={600} duration={3} delay={6} />+ tonnes</h1>
                        <p className="text-white md:text-lg xl:text-4xl lg:w-4/5 lg:m-auto">of plastic kept away from landfills & waterways via repurposing and recycling</p>
                    </div>
                </div>

                <div className="w-full text-center py-10">
                    <Link to='/impact'>
                    <button className="text-[#a7cf48] border-2 border-[#a7cf48] p-3 px-5 my-3 rounded-full m-auto xl:text-3xl">Learn More</button>
                    </Link>
                </div>
            </div>
            <hr />
            <div className="w-full bg-[#1C1C1C]">
            <MultiCarousel/>
            </div>
            <Footer />
        </>
    );
};
export default Home;