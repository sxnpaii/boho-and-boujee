import React from 'react';
// import { useLocomotiveScroll } from 'react-locomotive-scroll'
import "./hero.scss";
// imgs
import img1 from '../../img/unsplash-1.png';
import img2 from '../../img/unsplash-2.png';


function Hero() {
    // const { scroll } = useLocomotiveScroll();
    return (
        <section className="innerHero "
            // data-scroll-container
        >
            <div className="imgs"
                data-scroll
                data-scroll-speed="5"

            //  onClick={
            // window.addEventListener('scroll', () => {
            //     document.querySelector('.imgs').style.top= 455 - window.pageYOffset / 2 + "px";
            //     // console.log('worked')
            // })


            // }
            >
                <img src={img1} alt="" className='layer1' />
                <img src={img2} alt="" className='layer2' />
                <div className="text" data-scroll
                data-scroll-speed="2" >

                    <h2 className='display-1'>Shop Accessories</h2>
                </div>
            </div>
            <a href="#!" className="shopThisLook">Shop This Look</a>
        </section>
    )
}

export default Hero;


