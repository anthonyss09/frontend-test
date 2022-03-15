import styled from "styled-components";
import gary from "../images/gary.jpg";

const Wrapper = styled.header`
    .header-container { 
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        letter-spacing: -0.03em;
        color: #242424;  
    }
    .gary-img-container {
        display: flex;
        align-items: center
    }
    .gary-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: url(${gary});
        background-position: center;
        display: inline-block;
        margin-right: 16px
    }
    .icon-container {
        height: 40px;
        width: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon-container:hover {
        background: #f4f4f4;
    }
    .icon-container:active {
        color: #2FE6FF;
    }
      @media (min-width: 1040px) {
            .header-container {
               padding: 32px 40px 24px 40px;
            }

        }
`

export default Wrapper;