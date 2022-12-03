import React from 'react';
// styles
import "./featured.scss";

// imgs
import featuredImg1 from "../../img/featuredImg1.png";
import featuredImg2 from "../../img/featuredImg2.png";
import featuredImg3 from "../../img/featuredImg3.png";
import featuredImg4 from "../../img/featuredImg4.png";
import featuredImg5 from "../../img/featuredImg5.png";
import featuredImg6 from "../../img/featuredImg6.png";
import featuredImg7 from "../../img/featuredImg7.png";
import featuredImg8 from "../../img/featuredImg8.png";

function Featured() {
    return (
        <section className="innerFeatured">
            <h3 className="display-6" data-scroll>Featured Products</h3>
            <div className="hr-line"></div>
            <div className="images">
                <img src={featuredImg1} alt="" data-scroll data-scroll-speed="2"/>
                <img src={featuredImg2} alt="" data-scroll data-scroll-speed="1.5"/>
                <img src={featuredImg3} alt="" data-scroll data-scroll-speed="1"/>
                <img src={featuredImg4} alt="" data-scroll data-scroll-speed="0.5"/>
                
                <img src={featuredImg5} alt="" data-scroll data-scroll-speed="0.5"/>
                <img src={featuredImg6} alt="" data-scroll data-scroll-speed="1"/>
                <img src={featuredImg7} alt="" data-scroll data-scroll-speed="1.5"/>
                <img src={featuredImg8} alt="" data-scroll data-scroll-speed="2"/>
            </div>
            <button data-scroll>Shop All</button>

        </section>
    )
}

export default Featured;
