import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<HomePage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
