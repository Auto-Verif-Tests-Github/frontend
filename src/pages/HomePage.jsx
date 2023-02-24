import React from "react";
import Logo from "../UI/components/logo/Logo";
import cs from "./HomePage.module.css";
import {Link, useNavigate} from "react-router-dom";
import TwitterButton from "../UI/components/buttons/TwitterButton";
import education from "../images/education_icon.png";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className={cs.home_page}>
            <Logo className={cs.logo} />
            <TwitterButton onClick={() => navigate("/streams")} buttonStyle={cs.btn} imgSrc={education} value="Перейти к выбору потока" />
            <Link className={cs.teacher} to="/login">Я преподаватель!</Link>
        </div>
    );
}

export default HomePage;