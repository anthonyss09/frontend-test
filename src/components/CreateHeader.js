import Wrapper from "../assets/wrappers/CreateHeader.js";
import { arrowIcon, elipses } from "../assets/icons/index.js";
import {Link} from "react-router-dom";
import { useAppContext } from "../context/AppContext.js";
import DropDownMenu from "./DropDownMenu.js";
import {useState} from "react";
import Elipses from "../assets/icons/Elipses.js";


export default function CreateHeader (props) {

    const {lists, createList, deleteList, editList} = useAppContext();

    const [toggle, setToggle] = useState(false);

      const handleClick = (e, targetList, toBeDeleted) => {
        const name = e.target.name;
        const listName = props.listName;
        let filteredItems = props.listItems.filter(item=> item);
        filteredItems =filteredItems.filter(item => item.checkStatus!=="strike-thru");
      ;

        if (name === "createLink") {
            createList(listName, filteredItems);
        }   else if (props.name ==="editLink") {
           
            editList(listName,{listName: listName, listItems: filteredItems});
        }
            else {
            if (toBeDeleted) {
                deleteList(targetList);
            }
            setToggle(!toggle);
            }  
        }

    return (
        <Wrapper>
           { (props.screen==="createList"||props.screen==="editList")&&
            <div className="header-container secondary-header-container">
                <Link to="/" className="link basic-link">
                <img src={arrowIcon} alt="arrow icon" />
                <span className="header-text">Cancel</span>
                </Link>
                <Link to={props.link} onClick={handleClick} className="link basic-link" name={props.name}>  
                   Done
                </Link>
            </div>}

            {props.screen==="listPage"&&
            <div>
            <div className="header-container secondary-header-container">
                <Link to="/" className="link">
                <img src={arrowIcon} alt="arrow icon" />
                <span className="header-text">Lists</span>
                </Link>
                <Link to="#" className="link elipses-container" name="elipses">
                     <Elipses name="elipses" onClick={handleClick}/>
                </Link>
                </div>
                {toggle&&<DropDownMenu targetList={props.listName}
                onClick={(e)=> {
                    handleClick(e,props.listName,true)
                }}/>}
            </div>
            }
        </Wrapper>
       
    )
}