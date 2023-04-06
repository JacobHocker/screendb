
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function ImageCarousel({ props }) {

    const responsive = {
        xxl: {
            breakpoint: { max: 4000, min: 1536 },
            items: 8
        },
        xl: {
            breakpoint: { max: 1536, min: 1280 },
            items: 7
        },
        lg: {
            breakpoint: { max: 1280, min: 1024 },
            items: 6
        },
        md: {
            breakpoint: { max: 1024, min: 768 },
            items: 5
        },
        sm: {
            breakpoint: { max: 768, min: 640 },
            items: 4
        },
        xsm: {
            breakpoint: { max: 640, min: 400 },
            items: 3
        },
        base: {
            breakpoint: { max: 400, min: 0 },
            items: 2
        }
    };
    return (
        
        <div className="px-4">
            { props && 
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                
                itemClass="carousel-item-margin-left-40px-margin-right-40px"
                >
                {props && props.map((prop) => (
                    <CreditsSlide 
                        key={prop.id}
                        props={prop}
                        />
                ))
                }
            </Carousel>
            }
        </div>
    );
}