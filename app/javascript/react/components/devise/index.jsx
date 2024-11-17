import {createRoot} from "react-dom/client";
import React from "react";
import {New} from "./registration/New";

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById("sign_up_container");
    createRoot(element).render(<New/>);
})
