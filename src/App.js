import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="courses" element={<CoursesPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
