import Navigation from "../Navigation";
import Footer from "../footer";

let Approach=()=>{
    return(
        <>
        <div className="approach w-full h-[100vh] bg-[url('./images/approachbg.png')] bg-fixed bg-cover relative">
        <img src="./images/approachbg.png" alt="" className="absolute top-0 left-0 w-full h-[100vh] z-0"/>
              <Navigation/>

            <div className="absolute bottom-0 bg-black text-white text-center md:top-52 md:left-5 md:bg-transparent md:text-left md:w-2/5">
                <h1 className="text-3xl my-2 md:text-5xl lg:ml-12">The Noble Plastics Approach</h1>
                <p className="px-2 text-sm md:text-base xl:text-3xl lg:ml-12">Successful action stems from innovative approaches, and Noble Plastics is a proof of that. We work to provide practical solutions that are backed by quantifiable results.</p>
            </div>
        </div>

        <div className="w-full bg-gray-700 pb-12">
            <h1 className="text-2xl py-4 text-center font-semibold lg:py-10 lg:text-5xl"><span className="text-[#2293cb]">What’s Different about</span> <span className="text-[#a7cf48]">Our Approach</span></h1>

            <div className="w-full flex flex-col bg-[#BABABA] my-10 md:flex-row md:justify-between md:w-full">
                <img src="images/appraoch/approach-1.png" alt="" className="md:w-[70%]"/>
                <p className="px-2 my-3 md:w-[30%] md:my-28 xl:text-3xl">Our model provides multiple benefits to People—by creating jobs and a sustainable livelihood; Planet—through reduced plastic use and tree plantation; and Stakeholders—by ensuring prosperity of everybody involved in the whole process.</p>
            </div>
            <div className="w-full flex flex-col bg-[#BABABA] my-10 md:flex-row md:justify-between md:w-full">
                <img src="images/appraoch/approach-2.png" alt="" className="md:w-[70%]" />
                <p className="px-2 my-3 md:w-[30%] md:my-28 xl:text-3xl">Right from partnership formats, virtual platforms and training materials to workflows, quality assurance, accounting and sharing methods, all the resources can be used by any of our stakeholders, so they can succeed in adopting circularity.</p>
            </div>
            <div className="w-full flex flex-col bg-[#BABABA] my-10 md:flex-row md:justify-between md:w-full">
                <img src="images/appraoch/approach-3.png" alt="" className="md:w-[70%]"/>
                <p className="px-2 my-3 md:w-[30%] md:my-28 xl:text-3xl">Our model creates a positive impact by lowering the amount of low-quality plastic that must be disposed, in addition to reducing the usage of virgin plastic in the apparel industry.</p>
            </div>
            <div className="w-full flex flex-col bg-[#BABABA] my-10 md:flex-row md:justify-between md:w-full">
                <img src="images/appraoch/approach-4.png" alt="" className="md:w-[70%]"/>
                <p className="px-2 my-3 md:w-[30%] md:my-28 xl:text-3xl">We engage local stakeholders to create a local ecosystem, This reduces the need for centralisation, ensures circularity and causes minimal CO2 emissions. Our processes also generate jobs for the poorest in the area, boosting the local economy.</p>
            </div>
            <div className="w-full flex flex-col bg-[#BABABA] my-10 md:flex-row md:justify-between md:w-full">
                <img src="images/appraoch/approach-5.png" alt="" className="md:w-[70%]"/>
                <p className="px-2 my-3 md:w-[30%] md:my-28 xl:text-3xl">Our scale-up model promises a win-win-win situation for all stakeholders and incentivises action from them. We are actively scaling up to other forms of apparel plastic to maximise our reach and impact.</p>
            </div>
            <div className="w-full flex flex-col bg-[#BABABA] mt-10 md:flex-row md:justify-between md:w-full ">
                <img src="images/appraoch/approach-6.png" alt="" className="md:w-[70%]" />
                <p className="px-2 mt-3  md:w-[30%] md:my-40 xl:text-3xl">Through reuse (80%) and recycling (20%), we ensure, and have proven on scale, that hanger circularity is possible.</p>
            </div>
        </div>

        <Footer/>
        </>
    )
}
export default Approach