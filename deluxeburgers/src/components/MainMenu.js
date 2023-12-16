import "../css/navbar.css";
const MainMenu = () => {
    
    return ( 
        <div>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
              <div className="container">
                <a className="navbar-brand"  href="/Home"><img src={"/imgs/icons8-burger-48.png"} alt="icon Picture"/>Burgers Deluxe</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ContactUs">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Locations">Locations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/OrderOnline">Order Online</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Misc</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="/signup">Join The family</a>
                                <a className="dropdown-item" href="/Reviews">Reviews</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
          </div>
        </nav>
        
        </div>
     );
}
 
export default MainMenu;