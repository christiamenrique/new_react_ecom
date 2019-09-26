import React from "react";
import "./main.scss"

class Main extends React.Component {
    render() {
        return (
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item slide-1 active">
                        <div className="imgText">
                            <h2>Welcome to The Best Electronic Store</h2>
                            <p>We dedicate our lives to making sure that everyone is up to date with the newest technology at the best prices.</p>
                        </div>
                    </div>
                    <div class="carousel-item slide-2">
                        <div className="imgText">
                            <h2>Products</h2>
                            <p>We have a variety of products including smart televitions, drones, speackers and others. For more go to our product page</p>
                        </div>
                    </div>
                    <div class="carousel-item slide-3">
                        <div className="imgText">
                            <h2>Contact Us</h2>
                            <p>If you have any questions or consurns feel free to reach out by going to the contact page. Thank you for shopping with us</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Main;