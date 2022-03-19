import { useState } from "react";
import Wrapper from "../assets/wrappers/MainList.js";
import CreateHeader from "./CreateHeader.js";
import Checkbox from "./Checkbox.js";

export default function MainList (props) {
    
    const [toggle, setToggle] = useState(false);
    
    const listName = props.listName;
    const listItems = props.listItems;

    
    const [values, setValues] = useState({
        listName: listName,
        listItems: listItems
    })

    const [firstState, setFirstState] = useState("");

    const handleChange = (e,index) => {
        const name = e.target.name;
        const value = e.target.value;
        const replicaItems = values.listItems;
        const item = {item:value,checkStatus:false}

        if (name === "listName") {
            setValues((prev) => {
                return {
                    listName: value,
                    listItems: prev.listItems
                }
            })
        }
        
        else if (firstState === "") {
            replicaItems.push({item: "", checkStatus: false});
            replicaItems.splice(index,1,item);
            
            setValues((prev) => {
                return {
                    listName: prev.listName,
                    listItems: replicaItems
                }
            })
            setFirstState(value);
        } else {
            replicaItems.splice(index,1,item);
        setValues((prev) => {
                return {
                    listName: prev.listName,
                    listItems: replicaItems
                }
            })
        }
       
    }

    // const handleClick = (index) => {
        
    //     const replicaItems = values.listItems;
    //     const item = replicaItems[index];
    //     item.checkStatus = !item.checkStatus;
    //     replicaItems.splice(index,1, item);
    //             setValues((prev) => {
    //                 return {
    //                     listName: prev.listName,
    //                     listItems: replicaItems
    //                 }
    //             })
    // }

    const handleFocus = (e) => {
        const value = e.target.value;
        if (value === "") {
            setFirstState("");
        } else {
            setFirstState(value)
        }
    }

    const delay = 2000;
    let startPress = null;
    const handleMouseDown = () => {
        startPress = Date.now();

    }
    const handleMouseUp = (index) => {
        const interval = (Date.now()-startPress);
        const replicaItems = values.listItems;
        const item = replicaItems[index];
       
        if (interval > delay) {
            item.checkStatus = "strike-thru";
            replicaItems.splice(index,1, item);
                setValues((prev) => {
                    return {
                        listName: prev.listName,
                        listItems: replicaItems
                    }
                })
        } else {
             item.checkStatus = !item.checkStatus;
            replicaItems.splice(index,1, item);
                setValues((prev) => {
                    return {
                        listName: prev.listName,
                        listItems: replicaItems
                    }
                })
        }

    }
    
    return (
        <Wrapper>
            
            <CreateHeader listItems={values.listItems} listName={values.listName} link={props.link} screen={props.screen} name={props.name}/>

            <div className="list-container">
            <textarea  wrap="soft" type="text" name="listName" className="title-input" defaultValue={values.listName} placeholder="List name" key={300} autoFocus={props.autoFocus} onChange={(e) => {
                    handleChange(e, 0, "listName", 0);
                }}
                style={{opacity: values.listName===""&&"0.2"}}/>

            {values.listItems.map((item, index) => 
                <div key={index}>
                <div className="check-item-container"> 
                     <Checkbox style={{display: values.listItems[index].item===""&&props.listPage&&"none"}}
                     checkStatus={item.checkStatus}  onMouseDown={handleMouseDown} onMouseUp={() => {
                    handleMouseUp(index)}}/>

                    <textarea wrap="soft" type="text" defaultValue={item.item} name="listItem" placeholder="add item" onFocus={handleFocus}
                    className="single-item"  onChange={(e) => {
                        handleChange(e,index);
                    }} style={{opacity: (item.item===""||item.checkStatus==="strike-thru")&&"0.2",display: values.listItems[index].item===""&&props.listPage&&"none",textDecorationLine: item.checkStatus==="strike-thru"&&"line-through"
                    }}
                    />

                    {/* <span contentEditable={true}type="text" defaultValue={item.item} name="listItem" 
                    rows="1" 
                    placeholder="add item" onFocus={handleFocus}
                    className="single-item"  onChange={(e) => {
                        handleChange(e,index);
                    }} style={{opacity: (item.item===""||item.checkStatus==="strike-thru")&&"0.2",display: values.listItems[index].item===""&&props.listPage&&"none",textDecorationLine: item.checkStatus==="strike-thru"&&"line-through"
                    }}
                    /> */}
                </div>

                </div>
            )}   
            </div>

        </Wrapper>
    )
}