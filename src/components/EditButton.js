import { editPen } from "../assets/icons";
import Wrapper from "../assets/wrappers/DropButton.js";
import EditPen from "../assets/icons/EditPen.js";
import { Link } from "react-router-dom";

export default function EditButton (props) {
    return (
        <Wrapper>
            <div className="link drop-item-container edit-container">
                <EditPen className="drop-menu-icon"/>
                <span className="drop-menu-text">Edit</span>
            </div>
        </Wrapper>   
    )
}