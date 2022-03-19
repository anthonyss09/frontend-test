import styled from "styled-components";

const Wrapper = styled.section`
    .position-anchor {
        position: relative;
        margin: 0 24px 0 24px;
    }
    .list-title-container {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        border: 0.75px solid #ECECEC;
        box-sizing: border-box;
        border-radius: 8px;
        margin-bottom: 16px;  
    }
   .list-title-link {   
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
   }
    .list-title-container:hover {
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
        
    }
    .list-title-container:active {
        background: #F4F4F4;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    }
    .drop-menu-container {
        position: absolute;
    }
    .elipses-container {
        height: 32px;
        width: 32px;
        border-radius: 4px;
        text-align: center;
    }
    .elipses-container:hover {
        background: #f4f4f4;
    }
    .elipses-container:active {
        color: #2FE6FF;
    }
    @media (min-width: 1040px) {
        .big-title-container, .position-anchor {
            margin: 0 auto;
            max-width: 960px;
        }
    }
`
export default Wrapper;