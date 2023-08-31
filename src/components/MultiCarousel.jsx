import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MultiCarousel=()=>{
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1450, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1020, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <>
        <div className="conzer w-full md:w-4/5 md:m-auto lg:w-4/5 lg:m-auto xl:w-4/5 xl:m-auto py-20" >
                    <Carousel responsive={responsive} autoPlay infinite arrows={false}>
                        <div className="box">
                            <img src="images/slide/auto-slide-1.png" alt="brands" />
                        </div>
                        <div className="box">
                            <img src="images/slide/auto-slide-2.png" alt="brands" />
                        </div>
                        <div className="box">
                            <img src="images/slide/auto-slide-3.png" alt="brands"/>
                        </div>
                        <div className="box">
                            <img src="images/slide/auto-slide-4.png" alt="brands" />
                        </div>
                        <div className="box">
                            <img src="images/slide/auto-slide-5.png" alt="brands" />
                        </div>
                        <div className="box">
                            <img src="images/slide/auto-slide-6.png" alt="brands" />
                        </div>
                        <div className="box">
                            <img src="images/slide/auto-slide-7.png" alt="brands" />
                        </div>

                    </Carousel>
                </div>
        </>
    )
}
export default MultiCarousel