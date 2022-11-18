import {createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#1F6FA4" },
        secondary: { main: "#000000" },
        text: { primary: "#000000", secondary: "#000000" }
    },
    typography: {
        fontFamily: "'Helvetica Neue', sans-serif",
        h2: {
            fontSize: "4.375rem",
        },
        h3: {
            fontSize: "2.5rem",
        },
        h4: {
            fontSize: "1.5rem",
        },
        
    },
    
})

export default theme;