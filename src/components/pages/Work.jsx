import Navigation from "../Navigation";
import Footer from "../footer";

let Work = () => {
    return (
        <>
            <div className="main w-full h-[100vh] bg-[url('./images/work/workbg.png')] bg-fixed bg-cover bg-no-repeat relative">
                <img src="./images/work/workbg.png" alt="" className="absolute top-0 left-0 w-full h-[100vh] z-0"/>
                <Navigation />

                <div className="work-desp absolute bottom-0 bg-black text-white md:top-48 md:left-12 md:bg-transparent md:w-2/5">
                    <h1 className="text-center md:text-left md:px-2 md:text-xl xl:text-6xl xl:font-bold">Work</h1>
                    <p className="text-center md:text-left my-6 px-2 md:text-xl xl:text-4xl">We are focused on results that will help us achieve the UN SDGs and create a Circular Economy.</p>
                </div>
            </div>
            <div className="works w-full bg-black text-white">
                <div>
                    <h1 className="text-center p-4 text-2xl font-semibold xl:text-5xl py-10"><span className="text-[#2293cb]">Here Are the Ways through Which</span>  <span className="text-[#a7cf48]">We Create Impact</span></h1>
                </div>

                {/* mobile view */}
                <div className="mb-6 border-b-6 border-[#2293cb] w-full md:hidden">
                    <div className="bg-[url('./images/work/paper-2.svg')] w-[90%] h-[20vh] bg-cover m-auto">
                        <h1 className="text-center text-black pt-12 text-xl font-semibold ">Hanger Repurposing
                            & Recycling</h1>
                    </div>
                    <img src="images/work/work-1.png" alt="our-work" className="-mt-6" />
                    <p className="text-center px-2 ">We repurpose & recycle used Apparel Plastic Hangers to ensure that existing hangers are rechanneled, fewer hangers are produced, less plastic is wasted and a circular economy of hangers is created.</p>
                </div>

                <div className="md:hidden">
                    <div className="bg-[url('./images/work/paper-2.svg')]  w-[90%] h-[20vh] bg-cover m-auto ">
                        <h1 className="text-center text-black pt-12 text-xl font-semibold">Film Plastic Recycling</h1>
                    </div>
                    <img src="images/work/work-2.png" alt="our-work" className="-mt-6" />
                    <p className="text-center px-2">We collect and recycle films and other plastics found in apparel stores, factories and warehouses. The end products are channelled into the production of films and other materials that are useful for brands</p>
                </div>

                <div className="mt-4 pb-6 md:hidden">
                    <div className="bg-[url('./images/work/paper-2.svg')]  w-[90%] h-[20vh] bg-cover m-auto">
                        <h1 className="text-center text-black pt-12 text-xl font-semibold">Pyrolysis</h1>
                    </div>
                    <img src="images/work/work-3.png" alt="our-work" className="-mt-6" />
                    <p className="text-center px-2">Through Pyrolysis, we convert single-use plastics (SUPs) into fuel for energy generation. Noble Plastics orchestrates this entire process by facilitating connections between generators of non-recyclable waste and pyrolysis recyclers, who ensure these wastes are properly used.</p>
                </div>

                {/* tab and desktop view */}
                <div className="hidden md:w-4/5 md:flex md:space-x-2 md:m-auto md:my-6 md:border-b-8 md:border-[#2293cb] md:pb-10">
                    <img src="./images/work/work-1.png" alt="our-work" className="md:w-1/2 md:z-10" />
                    <div className="md:w-1/2 md:relative">
                        <div className="md:bg-[url('images/work/paper-2.svg')] md:w-full md:h-[20vh] md:bg-cover md:absolute -left-10 md:z-0">
                            <h1 className="md:text-center md:text-black md:pt-12 md:text-xl md:font-semibold xl:text-4xl xl:my-10">Hanger Repurposing
                                & Recycling</h1>
                        </div>

                        <p className="md:mt-36 lg:mt-48 xl:text-3xl">We repurpose & recycle used Apparel Plastic Hangers to ensure that existing hangers are rechanneled, fewer hangers are produced, less plastic is wasted and a circular economy of hangers is created.</p>
                    </div>
                </div>

                <div className="hidden md:w-4/5 md:flex md:space-x-2 md:m-auto md:my-6 md:border-b-8 md:border-[#a7cf48] md:pb-10">
                    <img src="./images/work/work-2.png" alt="our-work" className="md:w-1/2 md:z-10" />
                    <div className="md:w-1/2 md:relative">
                        <div className="md:bg-[url('images/work/paper-2.svg')] md:w-full md:h-[20vh] md:bg-cover md:absolute md:-left-10 md:z-0">
                            <h1 className="md:text-center md:text-black md:pt-12 md:text-xl md:font-semibold xl:text-4xl xl:my-10">Film Plastic Recycling</h1>
                        </div>
                        <p className="md:mt-36 lg:mt-48 xl:text-3xl">We collect and recycle films and other plastics found in apparel stores, factories and warehouses. The end products are channelled into the production of films and other materials that are useful for brands. </p>
                    </div>
                </div>

                <div className="hidden md:w-4/5 md:flex md:space-x-2 md:m-auto md:mt-6 md:pb-6 md:border-b-8 md:border-[#2293cb]">
                    <img src="./images/work/work-2.png" alt="our-work" className="md:w-1/2 md:z-10" />
                    <div className="md:w-1/2 md:relative">
                        <div className="md:bg-[url('images/work/paper-2.svg')] md:w-full md:h-[20vh] md:bg-cover md:absolute md:-left-10 md:z-0">
                            <h1 className="md:text-center md:text-black md:pt-12 md:text-xl md:font-semibold xl:text-4xl xl:my-10">Pyrolysis</h1>
                        </div>
                        <p className="md:mt-36 lg:mt-48 xl:text-3xl">Through Pyrolysis, we convert single-use plastics (SUPs) into fuel for energy generation. Noble Plastics orchestrates this entire process by facilitating connections between generators of non-recyclable waste and pyrolysis recyclers, who ensure these wastes are properly used.</p>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};
export default Work;