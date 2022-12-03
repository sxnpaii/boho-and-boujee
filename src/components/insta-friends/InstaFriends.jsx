import React from 'react'
import './instaFriends.scss'
// imgs
import instaFriends1 from '../../img/instaFriends1.png'
import instaFriends2 from '../../img/instaFriends2.png'
import instaFriends3 from '../../img/instaFriends3.png'
import instaFriends4 from '../../img/instaFriends4.png'
function InstaFriends() {
    return (
        <section className="innerIgFriends">
            <h3 className="display-6">insta-friends</h3>
            <div className="hr-line"></div>
            <div className="imgs">
                <img src={instaFriends1} data-scroll data-scroll-speed="2" alt="" />
                <img src={instaFriends2} data-scroll data-scroll-speed="1" alt="" />
                <img src={instaFriends3} data-scroll data-scroll-speed="1" alt="" />
                <img src={instaFriends4} data-scroll data-scroll-speed="2" alt="" />

            </div>
            <button>follow me</button>
        </section>
    )
}

export default InstaFriends;
