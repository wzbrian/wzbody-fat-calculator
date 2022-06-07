import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { StyledEngineProvider } from '@mui/material/styles';

import Home from "./screens/Home";

import "./components/RequiredStyles.css";

function App() {

    return (
        <StyledEngineProvider injectFirst>
            <Router history={Router}>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="*" element={<Home/>}/>
                </Routes>
            </Router>
        </StyledEngineProvider>
    );
}

export default App;