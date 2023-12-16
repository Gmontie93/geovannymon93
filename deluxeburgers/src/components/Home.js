import "../css/home.css";
import {useNavigate} from "react-router-dom";
const Home = () => {
    let navigate =useNavigate();
    let vipHandler = () => {
        navigate("/signup");   
    }
     
   

    return ( 
        <div>
        <img className="homeImg" src={"/imgs/BurgerHomePage.png"} alt="Burger Picture"/>
        <div className="d-flex justify-content-center align-items-center">
        <button type='submit' className="button" onClick={vipHandler}>BECOME A VIP Be the first to reive updates on exclusive events, secret menus, specialoffers/discounts, loyalty rewards and more!</button>
        </div>
        <div className="col-6 offset-3">
        <div className="">
            <h1>Burger Deluxe</h1>
        </div>
            <p>At our establishment, we take great pride in the quality and freshness of our food. We meticulously source all our ingredients from local farmers' markets, ensuring that each component used in our burgers is of the highest quality and freshness. We believe in supporting local farmers and prioritize using fresh, locally-sourced produce in every burger we create. This commitment guarantees that each burger is not only made to order but is also crafted using the finest, farm-fresh ingredients, delivering a delectable and wholesome experience to our customers.</p>
        
        <div>
            <h1>Location</h1>
            <span>
                1111 Demo St<br/>
                Los Angeles, CA 00000<br/>
                (111) 222-3333
            </span>
        <div>
            <h1>Business Hours</h1>
            - **Monday - Friday:** 10:00 AM - 10:00 PM<br/>
            - **Saturday - Sunday:** 11:00 AM - 11:00 PM<br/><br/>

            
        </div>

        </div>
        </div>
        </div>
     );
}
 
export default Home;