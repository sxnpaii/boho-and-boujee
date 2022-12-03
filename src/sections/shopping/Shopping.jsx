import React from 'react';
// locomotive scroll
// import { useLocomotiveScroll } from 'react-locomotive-scroll'

// component
import Cards from "../../components/cards/Cards";
// styles
import './shopping.scss';
// imgs
import Cards1 from '../../img/Cards1.png';
import Cards2 from '../../img/Cards2.png';
import Cards3 from '../../img/Cards3.png';
import Cards4 from '../../img/Cards4.png';

function Shopping(props) {
    // const { scroll } = useLocomotiveScroll();
    return (
        <section className="innerShopping">
            <h3 className='display-6'
                data-scroll
                data-scroll-speed="2"
            >Shopping for</h3>
            <div className="hr-line" data-scroll data-scroll-speed="1" ></div>
            <div className="shops">
                <div className="scrolled" data-scroll data-scroll-speed="3" >
                    <Cards heading="Necklaces" img={Cards1} />
                </div>
                <div className="scrolled" data-scroll data-scroll-speed="2">

                    <Cards heading="Bracelets" img={Cards2} />
                </div>
                <div className="scrolled" data-scroll data-scroll-speed="2">
                    <Cards heading="Earrings" img={Cards4} />

                </div>
                <div className="scrolled" data-scroll data-scroll-speed="3" >

                    <Cards heading="Handbags" img={Cards3} />
                </div>
            </div>
            <button className='shop'>shop all</button>
        </section>
    )
}

export default Shopping;
