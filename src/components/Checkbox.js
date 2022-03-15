import {check} from "../assets/icons/index.js";

export default function Checkbox (props) {
    
    
    return (
    
        <div style={props.style} onClick={props.onClick} onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp}>

        {props.checkStatus===false&&<div className="checkbox">
            <img src={check} alt="check symbol" />
        </div>}

        {props.checkStatus===true&&
            <div className="checked-checkbox">
                <img src={check} alt="check symbol" />
            </div>
        }

        {props.checkStatus==="strike-thru"&&
        <div className="checkbox strike-thru" style={{opacity: "0.2"}}>
                <img src={check} alt="check symbol" />
            </div>
        }

        </div>
       
    )
}