import Wrapper from "../assets/wrappers/DropButton.js";
import TrashBin from "../assets/icons/TrashBin";


export default function DeleteButton (props) {
    return (
        <Wrapper>
            <div className="link drop-item-container delete-container" onClick={props.onClick}>
                <TrashBin className="drop-menu-icon"/>
                <span className="drop-menu-text" name="delete">Delete</span>
            </div>
        </Wrapper>
    )
}