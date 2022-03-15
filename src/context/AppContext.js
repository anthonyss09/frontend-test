import React, {useContext,useReducer} from "react";
import reducer, {initialState} from "./reducer.js";


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const createList = (listName, listItems) => {
        const newLists = state.lists.concat({listName: listName, listItems: [...listItems]});

        dispatch({type: "CREATE_LIST", payload: {
            lists: newLists
        }})
    }

    const addListItem = (listName, listItem) => {
        const index = state.lists.findIndex(object => object.listName === listName);

        const newListItems = state.lists[index].listItems.concat(listItem);

        dispatch({type: "ADD_LIST_ITEM", payload: {
            listName: listName,
            listItems: newListItems,
        }})
    }

    const deleteList = (list) => {
        const newLists = state.lists.filter(listItem => listItem.listName !== list);
        console.log(newLists);

        dispatch({type: "DELETE_LIST", payload: {
            lists: newLists
        }})
    }

    const editList = (listName, editedList) => {
        const index = state.lists.findIndex(object => object.listName === listName);
        const replicaLists = state.lists;
        replicaLists.splice(index,1,editedList);
        
        dispatch({type: "EDIT_LIST", payload: {
            lists: replicaLists
        }})
    }

    const deleteListItem = (listName, listItem) => {
        console.log(listName);
        const index = state.lists.findIndex(object => object.listName === listName);
        const listItems = state.lists[index].listItems;

        const newListItems = listItems.filter(item => item !== listItem);

        dispatch({type: "DELETE_LIST_ITEM", payload: {
            listName: listName,
            listItems: newListItems
        }})
    }

    //  const editList = (listName, listItems) => {
    //     console.log(listName);
    //     const newItem = {
    //         listName: listName,
    //         listItems: listItems
    //     }
    //     deleteList(listName);
    //     createList(listName, listItems);

    //     dispatch({type: "EDIT_LIST", payload: {
    //         listName: listName,
    //         listItems: newListItems
    //     }})
    // }


    return (
        <AppContext.Provider value={{...state, createList, addListItem, deleteList, deleteListItem, editList}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext}