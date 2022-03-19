import Wrapper from "../assets/wrappers/ListTitleContainer.js";
import { useAppContext } from "../context/AppContext.js";
import { addIcon, elipses } from "../assets/icons/index.js";
import {Link} from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import Elipses from "../assets/icons/Elipses.js";

import {useState} from "react";

export default function ListTitle () {

    const {lists, deleteList} = useAppContext();

    const [toggle, setToggle] = useState(false);
    const [fromTop, setFromTop] = useState("")
    const [targetListName, setListName] = useState("");

    const handleClick = (e, listName, toBeDeleted) => {
        const name = e.target.name;
        setToggle(!toggle);
        const yPosition = (e.clientY - 88);
        setFromTop(yPosition +"px");
        setListName(listName);
    
        if (toBeDeleted) {
            deleteList(listName);
        }
    }

    return (
        <Wrapper>
                <div className="position-anchor">
                    {!lists[0]?
                    <div className="link big-title-container">
                        <div className="list-title-container">
                            <span>Create list</span>
                            <Link to="/create-list" className="link icon-links"><img src={addIcon} alt="add icon"/> </Link>        
                        </div>
                    </div>
                    :lists.map((list, index) => 
                    <div className=" link big-title-container" key={index}>
                        <div className="list-title-container list-title">
                            <div className="list-title-link">
                                {/* <Link to={"/lists/"+list.listName} className="link title-link">{list.listName}
                                </Link> */}

                                {list.listName}
                            </div>
                                <Link to="#" className="link icon-links elipses-container">

                            <Elipses onClick={(e) => {
                                    handleClick(e,list.listName,false)
                            }}/>
                                </Link>
                        </div>
                    </div>
                    )
                    } 
                    <div className="drop-menu-container" style={{ top: `${fromTop}`, right: '140px'}}>
                         {toggle&&<DropDownMenu targetList={targetListName} onClick={(e) => {
                             handleClick(e,targetListName, true)}}/>}
                    </div>
                </div> 
                                 
        </Wrapper>
    )
}