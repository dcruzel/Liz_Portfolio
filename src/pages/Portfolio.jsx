export default function Portfolio() {
    return (
        <div>
            <h1>PORTFOLIO</h1>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src="/src/assets/Project_pictures/Training-App.png" className="d-block w-100" alt="Training App"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Project 1: Training App</h5>
                    <p><a href="https://github.com/IsakTL/training-app">Github</a></p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src="./src/assets/Project_pictures/Popcorn-Powers.png" className="d-block w-100" alt="Popcorn Powers"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Project 2: Popcorn Powers</h5>
                    <p><a href="https://github.com/settyburr/Project-2-Popcorn-Powers">Github</a></p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Project 3: Placeholder</h5>
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
    );
  } 
