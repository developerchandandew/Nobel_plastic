
import MultiCarousel from "../MultiCarousel";
import Navigation from "../Navigation";
import Footer from "../footer";

let About = () => {
   
    return (
        <>
            <div className="bg-[url('./images/aboutbg.png')] bg-fixed bg-cover w-full h-[100vh] relative">
            <img src="./images/aboutbg.png" alt="" className="absolute top-0 left-0 w-full h-[100vh] z-1"/>

                <Navigation />
            </div>

            <div className="w-full bg-[#1C1C1C] -mt-6 border-b-2 border-white pb-2">

                <h1 className="text-center py-4 text-3xl font-semibold lg:text-5xl lg:py-10"><span className="text-[#2293cb]">Our</span> <span className="text-[#a7cf48]">Journey</span></h1>

                <div className="flex flex-col w-full md:flex-row md:justify-between mt-8">
                    <img src="images/about/left-border.png" alt="" className="hidden md:block md:w-[2%] md:h-[70vh] md:mt-20" />
                    <div className="text-white px-3 md:w-2/5">
                        <p className="my-4 lg:text-xl"> We—Noble Plastics—were incepted as an eco-social initiative by the Catalyst Group which champions the effective use of plastic waste, while promoting the well-being of people and the planet.</p>
                        <p className="my-4 lg:text-xl">Piloted in 2018 along with apparel giant M & S India, our core business is to repurpose and recycle apparel plastics, including used hangers, sizers, plaques and other plastics from corporations in the apparel industry, and ensure that they enter the apparel space again. Our operations are currently spread out across two major sites in India—Delhi and Bengaluru.</p>
                        <p className="my-4 lg:text-xl">The repurposing of hangers is undertaken mainly by women and members of marginalised communities, who are hired, trained and empowered to work by our organisation. Recycling of hangers and other plastics is handled by our partner recycling organisations, which ensures that the plastics we work with are handled safely throughout the process.</p>
                        <p className="my-4 lg:text-xl">Noble Plastics also works with partners to convert non-recyclable plastics into oil via pyrolysis. We aim to pyrolyse 1,000 tonnes of plastics and channel them into more productive uses over the next 2 years.</p>
                        <p className="my-4 lg:text-xl">We also measure the carbon footprint that our operations generate and plant an equivalent number of trees to ensure carbon neutrality.</p>
                    </div>
                    <img src="images/about/Group-AJ-1696.png" alt="our journey" className="md:w-2/5 md:h-[50vh]" />
                    <img src="images/about/left-border.png" alt="" className="hidden md:block md:w-[2%] md:h-[70vh] md:my-12" />

                </div>
            </div>




            <div className="bg-[#1C1C1C] w-full pb-2 border-b-2 border-white ">
                <h1 className="py-6 text-3xl font-semibold text-center  lg:text-5xl lg:py-10"><span className="text-[#2293cb]">Mission</span> <span className="text-[#a7cf48]">& Vision</span></h1>

                <div className="w-full ">
                    <div className="w-4/5 h-[10vh] border-t-2 border-l-2 border-r-2 border-white m-auto "></div>
                    <div className="w-full bg-[#a7cf48] px-2 md:w-[90%] md:m-auto lg:p-4">
                        <p className="py-3  lg:text-2xl">At Noble Plastics, we aim to achieve 10,000 tonne reduction in plastics entering landfills & waterways by 2025. We hope to accomplish this through partnership with private companies and emerging social enterprises, and propelling them forward with:</p>
                        <ul className="list-disc mt-3">
                            <li className="list-disc my-3 pb-2 border-b-2 border-black w-4/5 m-auto  lg:text-2xl">Their circular economy commitments and zero waste targets</li>
                            <li className="list-disc my-3 pb-2 border-b-2 border-black w-4/5 m-auto  lg:text-2xl">Access to people and skills required to achieve circularity</li>
                            <li className="list-disc mt-3 pb-2 w-4/5 m-auto  lg:text-2xl">Partnership development through good practices, good deeds, and blossoming outcomes for people and the planet</li>
                        </ul>
                    </div>
                    <div className="w-full px-2 text-white bg-[#2293cb] md:w-[90%] md:m-auto lg:p-4">
                        <p className="py-3 lg:text-2xl">Our ongoing success with hanger repurposing has also inspired us to experiment with the recycling of dead-end plastics in our<strong> Pyrolysis project,</strong> which focuses on the conversion of dead-end, non-recyclable plastics into oil for energy generation. </p>

                        <p className="my-3 lg:text-2xl"><strong>Noble Plastics</strong> intends to expand beyond the apparel industry, integrating sustainability and social responsibility into supply chains in a variety of industries.</p>
                    </div>
                    <div className="w-4/5 h-[10vh] border-b-2 border-l-2 border-r-2 m-auto border-white -mt-3"></div>
                </div>
            </div>

            {/* our team */}
            <div className="w-full bg-[#1C1C1C]">
                <h1 className="text-center text-3xl font-semibold lg:text-5xl lg:py-10"><span className="text-green-300">Our</span> <span className="text-sky-500">Team</span></h1>
                <div className="w-3/5 m-auto md:w-3/5 lg:w-4/5">
                    <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-between lg:justify-normal">
                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4 ">
                            <img src='images/team/Group-1760-1.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Shiv Kumar</h1>
                            <h2 className="lg:text-xl">Mentor</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1761-2.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Shaonli Chakraborty</h1>
                            <h2 className="lg:text-xl">Mentor</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1779-3.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Krishnamoorthy</h1>
                            <h2 className="lg:text-xl">Director</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1778-4.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Raghunathan</h1>
                            <h2 className="lg:text-xl">Advisor</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1759-5.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">CP Chandrashekarappa</h1>
                            <h2 className="lg:text-xl">Director & Advisor</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1592-6.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Vishrut Shivkumar</h1>
                            <h2 className="lg:text-xl">Head of Operation</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1829-7.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Ambika Sasidharan</h1>
                            <h2 className="lg:text-xl">Market & Communication</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1853-8.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Rakesh BH</h1>
                            <h2 className="lg:text-xl">Finance & Accounting</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1830-9.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Karabasappa</h1>
                            <h2 className="lg:text-xl">Finance & Accounting</h2>
                        </div>

                        <div className="w-full  text-center text-white my-5 md:w-2/5 lg:w-1/4">
                            <img src='images/team/Group-1831-10.png' alt="our team" className="m-auto hover:translate-y-4 hover:transition-4s" />
                            <h1 className="lg:text-2xl">Bhagyavathi</h1>
                            <h2 className="lg:text-xl">Carbon Sequestration Lead</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* our partner */}
            <div className="w-full bg-[#1C1C1C]">
                <h1 className="text-white lg:text-5xl lg:py-10 text-center"><span className="text-green-300">Our</span> <span className="text-sky-500">Partner</span></h1>


                <MultiCarousel/>
            </div>



            <Footer />
        </>
    );
};
export default About

