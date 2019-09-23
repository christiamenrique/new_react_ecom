import React from "react";
import "./footer.css";

function Footer(props) {
    return (
        <footer className="footer-adjustment">&copy;
            <p>The Best Electronic.</p>
            <div class="col-md-12">
            <ul class="list-inline">
                <li class="list-inline-item"><a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="https://www.instagram.com/?hl=en"><i class="fab fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="https://www.pinterest.com/"><i class="fab fa-pinterest-p"></i></a></li>
                <li class="list-inline-item"><a href="https://support.google.com/plus/?hl=en#topic=9259565"><i class="fab fa-google-plus"></i></a></li>
            </ul>
            </div>
        </footer>
       );
    }

export default Footer;