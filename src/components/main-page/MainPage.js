import React from "react";
import "./main.css"

class Main extends React.Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide page-changes" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="slide-show-img" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" class="d-block w-100" alt="store" />
                        <div className="carousel-caption black-text-color">
                            <h2>Welcome to The Best Electronic Store</h2>
                            <p>We dedicate our lives to making sure that everyone is up to date with the newest technology at the best prices.</p>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img className="slide-show-img" src="https://images.unsplash.com/photo-1514861292806-adb0227f827f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="d-block w-100" alt="phones" />
                        <div className="carousel-caption black-text-color">
                            <h2>Products</h2>
                            <p>We have a variety of products including smart televitions, drones, speackers and others. For more go to our product page</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="slide-show-img" src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" className="d-block w-100" alt="person typing on" />
                        <div className="carousel-caption black-text-color">
                            <h2>Contact Us</h2>
                            <p>If you have any questions or consurns feel free to reach out by going to the contact page. Thank you for shopping with us</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }
}

export default Main;