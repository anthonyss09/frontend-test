import {useParams} from "react-router-dom";
import { useAppContext } from "../context/AppContext";


import MainList from "../components/MainList";

export default function ListPage () {

    const {list} = useParams();
    const {lists} = useAppContext();

    const index = lists.findIndex(object => object.listName === list);
    const listItems = lists[index].listItems;
   
    return (
        <div>
            <MainList listName={list} listItems={listItems} disabled={true} listPage={true} link="/" screen="listPage" />
        </div>
    )
        
}