import styled from "styled-components";


const Wrapper = styled.aside`
    .drop-item-container {
        height: 54px;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        border-radius: 6px;
        width: 115px;
    }
    .drop-item-container:hover {
        background: #f4f4f4;
    }
    .edit-container {
        width: 115px;
    }
    .edit-container:active {
        color: #2FE6FF;
    }
    .delete-container {
        width: 115px;
    }
    .delete-container:active {
        color: #FF3333;
    }
    .drop-menu-icon {
        margin: 0 16px 0 16px;
    }
`
export default Wrapper;