import {createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#1F6FA4",light:"skyblue" },
        secondary: { main: "#000000",light:"skyblue" },
        text: { primary: "#000000", secondary: "#000000" }
    },
    typography: {
        // fontFamily: "'Helvetica Neue', sans-serif",
        h2: {
            fontSize: "4.375rem",
            color: "#2882F8",
        },
        h3: {
            fontSize: "12px",
            color: "#000",
        },
        h4: {
            fontSize: "12px",
            color: "#B61A1A",
        },
        h5: {
            fontSize: "12px",
            color: "#ffff",
        },
        h6: {
            fontSize: "12px",
            color: "#45494D",
        },
        
    },
    
})

export default theme;