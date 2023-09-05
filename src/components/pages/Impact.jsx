import Navigation from "../Navigation";
import Footer from "../footer";
import CountUp from "react-countup";

let Impact = () => {
    return (
        <>
            <div className="bg-[url('./images/back.png')] w-full h-[100vh] bg-fixed bg-no-repeat bg-cover relative">
                <Navigation />

                {/* mobile view  */}
                <div className="bg-gray-700 text-white absolute bottom-0 md:bg-transparent md:left-0 md:top-48 md:w-1/2 ">
                    <h1 className="text-center text-2xl font-bold my-2 md:text-left md:ml-10 lg:ml-12 xl:ml-24 xl:text-6xl">Our Impact</h1>
                    <p className="text-center w-4/5 m-auto text-lg md:text-left xl:text-3xl">From facilitating the creation of a circular economy, to collaborating with like-minded partners in making better environmental choices, we are on the path to achieve our mission of synergising people, planet and profits.</p>
                </div>
            </div>

            {/* controler */}
            <div className="bg-gray-700 w-full py-6">
                <div className="flex flex-col text-white m-auto my-4 md:w-4/5 md:flex-wrap md:justify-between md:flex-row">
                    <div className="w-3/5 m-auto my-6  text-center md:w-2/5 md:">
                        <img src="images/impact/rupee.svg" alt="rupee" className="m-auto" />
                        <h1 className="text-green-600 text-2xl font-semibold xl:text-4xl">INR &nbsp;
                        <CountUp start={0} end={90} duration={3} delay={6}/>+ Lakh</h1>
                        <p className="xl:text-2xl">generated in wages for
                            marginalised groups</p>
                    </div>
                    <div className="w-3/5 m-auto my-6 text-center md:w-2/5 md:mt-0">
                        <img src="images/impact/plants.svg" alt="tree" className="m-auto" />
                        <h1 className="text-[#00A0E3] text-2xl font-semibold xl:text-4xl">
                            <CountUp start={0} end={20} duration={3} delay={6}/>,500+</h1>
                        <p className=" text-center xl:text-2xl">trees planted in Karnataka to achieve carbon neutrality</p>
                    </div>
                    <hr />
                    <div className="w-3/5 m-auto my-6 text-center md:w-2/5 md:">
                        <img src="images/impact/heart.svg" alt="health" className="m-auto" />
                        <h1 className="text-[#00A0E3] text-2xl font-semibold xl:text-4xl">INR &nbsp;
                        <CountUp start={0} end={50} duration={3} delay={6}/>+ lakh</h1>
                        <p className="text-center xl:text-2xl">invested in improving health outcomes</p>
                    </div>
                    <div className="w-3/5 m-auto my-6 text-center md:w-2/5 md:mt-0">
                        <img src="images/impact/garbage.svg" alt="landfills" className="m-auto" />
                        <h1 className="text-green-600 text-2xl font-semibold xl:text-4xl">
                            <CountUp start={0} end={600} duration={3} delay={6}/>+ tonnes</h1>
                        <p className=" text-center xl:text-2xl">of plastic kept away from landfills & waterways via repurposing and recycling</p>
                    </div>
                </div>


                {/* communities */}
                <div className="">
                    <div className="bg-black text-center xl:py-10">
                        <p className="text-[#2293cb] my-2 text-xl font-semibold md:my-3 xl:my-8 xl:text-5xl">Our Impact Extends Beyond These Figures</p>
                        <p className="text-[#a7cf48] mt-2 text-xl font-semibold md:my-3 xl:my-8 xl:text-5xl">and Into the Communities We Serve</p>
                    </div>
                    {/* review */}
                    <div className="bg-gray-700 w-full  text-white">
                        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:w-[90%] lg:m-auto lg:my-20 lg:relative">
                            <div className="cont lg:w-3/5 px-5 lg:px-0">
                                <p className="my-3 xl:my-4 xl:text-3xl">Married for 18 years now, 36-year-old Minta likes to believe in the strategic play of life.</p>
                                <p className="my-3 xl:my-4 xl:text-3xl">“Financial difficulty is something that I have always had to live with. I wanted to be a teacher, but my parents, having four children to take care of, forced me to drop out and get married even before I was ready,” she said</p>
                                <p className="my-3 xl:my-4 xl:text-3xl">But today, Minta works in the sorting unit at Mohammadpur, and her daily responsibilities include sorting good hangers, removing stickers, packing the sorted hangers or breaking the rejected hangers. She earns approximately INR 11,000 per month</p>
                                <p className="my-3 xl:my-4 xl:text-3xl">Minta adds that her work-life routine has given her life meaning, and she looks forward to coming to work every day. Further Minta shared, “Working in the hanger unit has given my family the strength to overcome our never-ending poverty. For the last two months, I have been able to provide my family with three meals a day. I am still in a lot of debt that I am working hard to pay off, but my husband has found some job that will allow us to make little more money for the family. However, unlike the old times, I do not feel helpless and worried about his lack of earnings anymore. I am confident that my hanger unit will support my family with their needs</p>
                            </div>
                            <img src="images/impact/impact-1.png" alt="Minta" className="lg:w-[35%]"/>
                            <img src="images/cricles.svg" alt="" className="hidden lg:block lg:absolute lg:-top-16 lg:-right-16 z-10"/>

                        </div>
                        <hr />
                        
                        <div className="flex flex-col-reverse my-2 lg:flex-row lg:justify-between lg:w-[90%] lg:m-auto lg:my-20 lg:relative">
                            <div className="lg:w-3/5 px-5 lg:px-0">
                                <p className="my-2 xl:my-4 xl:text-3xl">Having never believed in a stable job, Sanjay has changed over half a dozen jobs in the past.</p>
                                <p className="my-2 xl:my-4 xl:text-3xl">“No one treated us like humans. I was always treated like a bonded labourer until I started working in the hanger unit,” he said</p>
                                <p className="my-2 xl:my-4 xl:text-3xl">36-year-old Sanjay Singh is a migrant resident of Mohammadpur, Gurgaon. Originally from a small town in Aligarh, Uttar Pradesh, Sanjay migrated to the national capital with his wife and two children</p>
                                <p className="my-2 xl:my-4 xl:text-3xl"><q>The work culture at the hanger unit is unbelievable compared to my last workplace. Here, I am respected and treated as an equal. Being the line supervisor, I directly manage the immediate workforce. We are all like a family now,</q> he added</p>
                                <p className="my-2 xl:my-4 xl:text-3xl">Sanjay joined the Hanger Unit and became one of the first hired labourers in the Fuzhio-run Hanger Sorting Unit in Mohammadpur. According to him, this livelihood opportunity at the Hanger Sorting Unit has come to him as “God’s Blessing” which has saved him from his “ongoing unemployment struggle” of the last two years</p>
                                <p className="my-2 xl:my-4 xl:text-3xl">At the unit, Sanjay, being senior among the labourers, is given the role of supervising the work of his fellow workers. As part of his role, he helps other labourers with quality checks, data entry, loading-unloading work and more</p>
                                <p className="my-2 xl:my-4 xl:text-3xl">For Sanjay, the last two years of unemployment have taught him many lessons on the personal front. Therefore, getting back to work and earning his family some income has brought some peace at his home. Now, he only wishes that this stability continues forever in his life.</p>

                            </div>
                                <img src="images/impact/impact-2.png" alt="Sanjay singh" className="lg:w-[35%]"/>
                            <img src="images/cricles.svg" alt="" className="hidden lg:block lg:absolute lg:-top-16 lg:-right-16 z-10"/>

                        </div>

                        <hr />
                        <div className="flex flex-col-reverse my-2 lg:flex-row lg:justify-between lg:w-[90%] lg:m-auto lg:my-20 lg:relative">
                            <div className="lg:w-3/5 px-5 lg:px-0">
                                <p className="my-2 xl:my-4 xl:text-3xl">A 24-year-old resident of Gulbarga colony, G. Satyavani, counts herself to be a successful mother of two children.</p>

                                <p className="my-2 xl:my-4 xl:text-3xl ">Originally from Bellandur, Tamil Nadu, she has spent 15 good years in Bangalore. Though she has always aspired to complete her education, she was forced to drop out when she was in grade 7. She is modest, empathetic and likes to live in reality. She currently lives with her family of four—including her mother, her brother and her two children (one boy, who is 4 years old, and one girl, who is 2 years old) in Bommanahali, Bangalore</p>

                                <p className="my-2 xl:my-4 xl:text-3xl ">Speaking fondly about the work environment at the unit, Satyavani said, <q>Everybody in this job speaks nicely to me, even sir.</q></p>

                                <p className="my-2 xl:my-4 xl:text-3xl ">The schedule provides her with the stability to come in at 9:30 am and leave by 6 pm. The lunch breaks are a bit more relaxed, so she’s able to step outside for some much-needed fresh air. She started out with easier tasks, and now her role has transitioned to checking the quality of the hangers, sorting the hangers and taking inventory, which she finds more difficult</p>

                                <p className="my-2 xl:my-4 xl:text-3xl ">Although this job has its flaws, as she confidently points out, she’s able to step up to the challenges that come along with it. This opportunity provides her with the ability to support her family and, most importantly, her children as a single mother</p>
                            </div>
                            <img src="images/impact/impact-3.png" alt="satyavati" className="lg:w-[35%]"/>
                            <img src="images/cricles.svg" alt="" className="hidden lg:block  lg:absolute lg:-top-16 lg:-right-16 z-10"/>

                        </div>
                        <hr />

                        <div className="flex flex-col-reverse my-2 lg:flex-row lg:justify-between lg:w-[90%] lg:m-auto lg:my-20 lg:relative">
                            <div className="lg:w-3/5 px-5 lg:px-0">
                                <p className="my-2 xl:my-4 xl:text-3xl">Tucked away in a bustling, close-packed locality of Bommanahalli is the Hanger Sorting Unit set up by Noble Plastic in Bengaluru. This unit has a bunch of 10 enthusiastic individuals working through the day to sort the hangers, package them and send them for recycling. The unit starts functioning at 9 AM in the morning with two tables full of hangers to be sorted for the day and 4 women working at each table to sort them. The rest of the area is filled with stacked cartons filled with hangers that are either left to be sorted or are sorted and packed for recycling.</p>

                                <p className="my-2 xl:my-4 xl:text-3xl">Amidst all the stacks of cartons sits Srinivas in the corner packing away boxes one after the other. Srinivas is responsible for packing of the hangers after they are sorted and also unpacking the hangers that come in for sorting at the unit. Additionally, Srinivas also works on baling film plastics, which essentially compresses loose plastic, making it easy for recycling. Srinivas has been working at the unit for 3 years now, right since its inception. He lives in the area nearby called the Gulbarga Colony. Migrated to the city a few years back in search of work, Srinivas struggles speaking in Hindi but is keen on learning Hindi and English. Srinivas also runs errands around the unit all day and trains the new employees at the unit, all this while bantering around and lightening the mood at the workplace. “I love to help out others with work here. Working here for so long, this has become like my extended family. It feels amazing to come here everyday and contribute to the team effort.”, says Srinivas</p>

                            </div>
                            <img src="images/impact/impact-4.png" alt="srinivas" className="lg:w-[35%]"/>
                            <img src="images/cricles.svg" alt="" className="hidden lg:block lg:absolute lg:-top-16 lg:-right-16 z-10"/>

                        </div>
                        <hr />

                        <div className="flex flex-col-reverse my-2 lg:flex-row lg:justify-between lg:w-[90%] lg:m-auto lg:my-20 lg:relative">
                            <div className="lg:w-3/5 px-5 lg:px-0">
                                <p className="my-4 xl:text-3xl">Planet, People and Purpose - Enriching the Planet and also the lives of people!</p>

                                <p className="my-4 xl:text-3xl">Meher is all of 19 years old and with a spark in her eyes and smile on her face, she has been working everyday for the past two and a half years at the hanger sorting unit. “My day starts early in the morning and I report here everyday by 9 AM.”, says Meher. Meher along with 7 other women sit on the sorting tables to thoroughly check each hanger and segregate it based on the different sizes and the condition of the hangers. The broken ones go for recycling whereas the good ones go back to stores for reuse.” says Meher. “We know exactly what goes where. We also now train and help any new joinees. I really like the work environment, people here and look forward to coming to work everyday.”, Meher adds.</p>

                                <p className="my-4 xl:text-3xl">It has been three years since Noble Plastics started its operations in the form of the hanger sorting unit in Bengaluru and Delhi in collaboration with Marks and Spencers (M&S) and everyday since then, it has been contributing not only in making the planet a better place for people but has also been giving purpose and meaning to the lives of many like Meher and Srinivas</p>
                            </div>
                            <img src="images/impact/impact-5.png" alt="women" className="lg:w-[35%]"/>
                            <img src="images/cricles.svg" alt="" className="hidden lg:block lg:absolute lg:-top-16 lg:-right-16 z-10"/>
                        </div>

                    </div>
                </div>

            <Footer/>
            </div>
        </>
    );
};
export default Impact; 