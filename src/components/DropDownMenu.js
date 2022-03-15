import Wrapper from "../assets/wrappers/DropMenuBox";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import {Link} from "react-router-dom";
import { useAppContext } from "../context/AppContext";


export default function DropDownMenu (props) {

    const {deleteList, lists} = useAppContext();

    return (
        <Wrapper>
            <div className="drop-menu-container">
                <Link className="link icon-links" to={"/edit-list/"+props.targetList}>
                    <EditButton link={"/edit-list/"+props.targetList}/>
                </Link>
                <Link to="/" className="link delete-link" onClick={props.onClick}>
                    <DeleteButton targetList={props.targetList}/> 
                </Link>         
            </div>
        </Wrapper>
    )
}
