import Training from "../assets/Project_pictures/Training-App.png";
import Popcorn from "../assets/Project_pictures/Popcorn-Powers.png";
import Liz_Portfolio from "../assets/Project_pictures/Liz_Portfolio_img.png";
import Image1 from "../assets/Project_pictures/Project_pic1-FreePikAI.jpg";
import Image2 from "../assets/Project_pictures/Project_pic2-FreePikAI.jpg";

export default function Portfolio() {
    //Create carousel of the 6 projects
    return (
        <section>
            <div>
            <h1>PORTFOLIO</h1>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={Training} className="d-block w-100" alt="Training App"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5><a href="https://isaktl.github.io/training-app/">Project 1: Training App</a></h5>
                    <p><a href="https://github.com/IsakTL/training-app">Github</a></p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={Popcorn}  className="d-block w-100" alt="Popcorn Powers"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5><a href="https://project-2-popcorn-powers.onrender.com">Project 2: Popcorn Powers</a></h5>
                    <p><a href="https://github.com/settyburr/Project-2-Popcorn-Powers">Github</a></p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Liz_Portfolio} className="d-block w-100" alt="Liz Portfolio"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5><a href="https://lizwebsite.netlify.app/">LIZ's PORTFOLIO</a></h5>
                    <p><a href="https://github.com/dcruzel/Liz_Portfolio"> Github </a></p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Image1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Project 4: Placeholder</h5>
                    <p>Github: Placeholder</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Image2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Project 5: Placeholder</h5>
                    <p>Github: Placeholder</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Image1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Project 6: Placeholder</h5>
                    <p>Github: Placeholder</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        </section>
    );
  } 
