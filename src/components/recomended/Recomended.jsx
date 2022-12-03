import React from 'react';
// styles
import "./recomended.scss"
// imgs
import recImgLayer1 from "../../img/recImgLayer1.png"
import recImgLayer2 from "../../img/recImgLayer2.png"
import recImgLayer3 from "../../img/recImgLayer3.png"

function Recomended() {
    return (
        <section className='innerRecomended' data-scroll data-scroll-speed="2">
            <div className="texts">
                <h2 className="display-2">Looking for clothes </h2>
                <p className='h3'>Click here to shop my Maverick the Collection boutique collection. </p>
                <button>Shop now</button>
            </div>
            <div className="images">
                <img src={recImgLayer3} alt="" className='layer1'  />
                <img src={recImgLayer2} alt="" className='layer2' />
                <img src={recImgLayer1} alt="" className='layer3' />
            </div>
        </section>
    )
}

export default Recomended;
