
import {Link} from "react-router-dom";
import Wrapper from "../assets/wrappers/HomeHeader.js";
import EditPenBox from "../assets/icons/EditPenBox.js";




export default function ListsHomeHeader () {

    return (
        <Wrapper>
            <div className="header-container">
                <div className="gary-img-container">
                    <div className="gary-img"></div>
                    <span>Lists</span>
                </div>
                <Link to="/create-list" className="link icon-links icon-container">
                <EditPenBox/>
                </Link>
            </div>
        </Wrapper>
        
    )
}