import styled from "styled-components";


const Wrapper = styled.section`

    .list-container {
        margin-left: 24px;
        color: #242424;
        display: flex;
        flex-direction: column
    }
    input {
        border: none;
        font-family: Inter;
        font-style: normal;
    }
    textarea {
         border: none;
        font-family: Inter;
        font-style: normal;
        resize: none;
    }
    textarea:focus, input:focus{
    outline: 0;
}
// [contenteditable]:empty:before {
//   content: attr(placeholder);
//   display: block;
//   outline: none:
//   /* For Firefox */
// }

[contenteditable]:focus {
  outline: 0px solid transparent:
}
    .title-input {
        font-weight: 600;
        font-size: 28px;
        line-height: 26px;
        letter-spacing: -0.01em;
        // opacity: 0.2;
        caret-color: #2FE6FF;
        color: #242424;
        opacity:1;
        margin-bottom: 24px;
    }
    input:focus {
        outline: none
        
    }
    .list-items {
        position: relative;
        margin-top: 8px
    }
    .single-item {
        max-width: 90%;
        display: block;
        // margin-left: 41px;
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
        letter-spacing: -0.005em;
        color: #242424;
        width: 85%;
        white-space: normal;
        word-wrap: break-word;
        overflow-wrap: break-word;
        // opacity: 0.2;
    }
    .check-box {
        opacity: 1
    }
    .check-item-container {
        margin: 8px 0;
    }
    @media (min-width: 1040px) {
        .list-container {
            margin: 0 auto;
            max-width: 960px;
        }
`
export default Wrapper;