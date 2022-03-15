import styled from "styled-components";


const Wrapper = styled.header`
    
    .drop-menu-container {
        position: absolute;
        top: 51px;
        right: 24px;
        
    }
    .basic-link {
        color: #505050;
    }
    .basic-link:hover {
        color: #242424;
    }
    .basic-link:active {
        color: #2FE6FF;
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
            .header-container {
               padding: 32px 40px 24px 40px;
            }
            .drop-menu-container {
                right: 40px;
            }

        }
`
export default Wrapper;