import React from 'react'
import "./footer.scss";
function Footer() {
    return (
        <section className="innerFooter" data-scroll >
            <div className="icons">
                <a href="#!">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#!">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#!">
                    <i class="fa-regular fa-envelope"></i>
                </a>
            </div>
            <div className="copyr">
                <p>Privacy Policy | Terms & Conditions</p>
                <p> 2022/2023 © Boho & Boujee | Made with ❤️ by SXNPAII </p>
            </div>
        </section>
    )
}

export default Footer;
