
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-links">
                    <a href="#">Blog</a>
                    <a href="#">FAQs</a>
                    <a href="#">Contact us</a>
                </div>

                <div className="footer-social">
                    <a href="#">f</a>
                    <a href="#">♥</a>
                    <a href="#">◎</a>
                    <a href="#">S</a>
                    <a href="#">℗</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    ©2018 All Rights Reserved. Made with
                    <span className="heart"> ♡ </span>
                    by <a href="#">Colorlib</a> &amp; distributed by
                    <a href="#"> ThemeWagon</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
