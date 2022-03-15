
import {useParams} from "react-router-dom";
import MainList from "../components/MainList";
import { useAppContext } from "../context/AppContext";

export default function EditList () {

    const {list} = useParams();
    const {lists} = useAppContext();

    const index = lists.findIndex(object => object.listName === list);
    const listItems = lists[index].listItems;
   
    return (
        <div>
            <MainList listName={list} listItems={listItems} 
            link={"/lists/" + list} screen="editList" name="editLink"/>
        </div>
    )
}