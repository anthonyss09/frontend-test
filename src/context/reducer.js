import {CREATE_LIST, ADD_LIST_ITEM, DELETE_LIST, DELETE_LIST_ITEM, EDIT_LIST} from "./actions.js";

export const initialState = {
    lists: [
        // {
        //     listName: "movie",
        //     listItems: [{item: "",checkStatus:false}]
        // }, 
        // {
        //     listName: "animals",
        //     listItems: [{item: "",checkStatus:false}]
        // }
    ]
};

const reducer = (state, action) => {

    const {type, payload} = action;

    switch (type) {
        case CREATE_LIST:
            console.log(CREATE_LIST, payload)
            return {
                ...state, 
                lists: payload.lists
            }
        case ADD_LIST_ITEM:
            console.log(ADD_LIST_ITEM, payload)
            return {
                ...state,
                    lists: state.lists.map(item => item.listName === payload.listName ? {...item, listItems: payload.listItems }: item)
            }
        case DELETE_LIST: 
            console.log(DELETE_LIST, payload)
            return {
                ...state,
                lists: payload.lists
            }
        case DELETE_LIST_ITEM:
            console.log(DELETE_LIST_ITEM, payload)
            return {
                ...state,
                    lists: state.lists.map(item => item.listName === payload.listName ? {...item, listItems: payload.listItems }: item)
            }
        case EDIT_LIST:
            console.log(EDIT_LIST,payload)
            return {
                ...state,
                lists: payload.lists
            }
            
        default:
            return;
    }
}

export default reducer;