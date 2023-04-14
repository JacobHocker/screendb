

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImagePersonSlide from './ImagePersonSlide';



export default function ImagePersonCarousel({ props }) {

    
    const responsive = {
        lg: {
            breakpoint: { max: 5000, min: 1024 },
            items: 5
        },
        md: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        xmd: {
            breakpoint: {max: 768, min: 625},
            items: 3
        },
        sm: {
            breakpoint: { max: 625, min: 400 },
            items: 2
        },
        
        base: {
            breakpoint: { max: 400, min: 0 },
            items: 1
        }
    };
    return (
        
        <div className="px-4">
            { props && 
            <Carousel
                className='py-4'
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
                {props && props.map((prop, index) => (
                    <ImagePersonSlide 
                        key={index}
                        props={prop}
                        />
                ))
                }
            </Carousel>
            }
        </div>
    );
}