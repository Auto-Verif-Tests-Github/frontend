import React, {useEffect, useState} from "react";
import Logo from "../UI/components/logo/Logo";
import cs from "./HomePage.module.css";
import {Link, useNavigate} from "react-router-dom";
import TwitterButton from "../UI/components/buttons/TwitterButton";
import education from "../images/education_icon.png";
import {isAuthorized} from "../api/auth/auth"

const HomePage = () => {
    const [auth, setAuth] = useState(false);
    useEffect(() => setAuth(isAuthorized), []);
    const navigate = useNavigate();

    return (
        <div className={cs.home_page}>
            <Logo className={cs.logo} />
            <TwitterButton onClick={() => navigate("/streams")} buttonStyle={cs.btn} imgSrc={education} value="Перейти к выбору потока" />
            {!auth
                ? <Link className={cs.teacher} to="/login">Я преподаватель!</Link>
                : ""}
        </div>
    );
}

export default HomePage;