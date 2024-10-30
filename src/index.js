import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import { ThemeProvider } from 'styled-components';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import theme from "./utils/theme/Theme";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>        
        </ThemeProvider>
    </>

);
