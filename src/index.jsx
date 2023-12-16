import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LinkProvider } from "./context/linkContext.jsx";
import { UserProvider } from "./context/userContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <UserProvider>
            <LinkProvider>
                <App />
            </LinkProvider>
        </UserProvider>
    </BrowserRouter>,
);
