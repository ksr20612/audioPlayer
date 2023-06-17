import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    body {
        margin: 0;
        overflow-wrap: break-word;
    }

    :lang(ko) { word-break: keep-all; }

    img {
        max-width: 100%;
        height: auto;
    }

    [class] {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none; /* ol, ul */
        border: 0; /* button, fieldset, iframe, input, select, table, textarea */
        background-color: transparent; /* button, dialog, mark, meter, progress */
        border-collapse: collapse; /* table */
        border-spacing: 0; /* table */
        -webkit-appearance: none;
        appearance: none; /* button, input, meter, progress, select, textarea */
    }
    [class]::before,
    [class]::after { box-sizing: border-box; }

    /* body > iframe {
        display: none;
    } */

    html {
        font-size: 10px;
    }

`

export default Global;