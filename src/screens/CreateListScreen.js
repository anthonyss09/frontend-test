import MainList from "../components/MainList.js";


export default function CreateListScreen () {


    return (
        <div>
            <MainList listName="" listItems={[{item: "",checkStatus:false}]} autoFocus={true} link="/" screen="createList" name="createLink"/>
        </div>
    )
}