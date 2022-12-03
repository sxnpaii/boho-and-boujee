import React from 'react';
import "./about.scss";
import aboutImg from '../../img/AboutImg.png';

function About() {
    return (
        <section className="innerAbout">
            <div className="image">
                <img src={aboutImg} alt="" />
                <div className="text" data-scroll data-scroll-speed="1">
                    <h2 className='display-1'>Call me Steph!</h2>
                </div>
            </div>
            <div className="text-right">
                <h2>Hello Boujeee Babes!</h2>
                <div className="hr-line"></div>
                <p>I’m Steph, the owner of Boho & Boujee! I’m a wife, a mom, a daughter, and a fashion lover! <br /><br />
                    I started Boho & Boujee because I believe that ALL women deserve to feel beautiful in the skin they’re in. My goal is to have you looking beautiful and feeling confident! <br /> <br />
                    All items are hand picked and brought to you at an appropriate price point! I don’t think you should have to spend a lot of money to look and feel good! Boho & Boujee is here to style and empower women and I am so thankful to have you here with me on this adventure!
                </p>
                <button>Tell me more!</button>
            </div>
        </section>
    )
}

export default About;
