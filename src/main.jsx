import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  
        <ThemeProvider theme={darkTheme}>

            <App />
            
        </ThemeProvider>
);
//<React.StrictMode>