import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import StreamsPage from "./pages/StreamsPage";
import CourseViewPage from "./pages/CourseViewPage";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="streams" element={<StreamsPage />} />
                        <Route path="stream/:stream_id/">
                            <Route path="courses" element={<CoursesPage />} />
                            <Route path="course/:course_id" element={<CourseViewPage />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
