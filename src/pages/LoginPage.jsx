import React from "react";
import cs from "./LoginPage.module.css";
import Logo from "../UI/components/logo/Logo";
import next from "../images/next_icon.png";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    function btnClick() {
        navigate("/streams");
    }

    return (
        <div className={cs.login_page}>
            <Logo className={cs.logo} />
            <div className={cs.form}>
                <input placeholder="login" type="text" />
                <div className={cs.line}></div>
                <input placeholder="password" type="password" />
                <div className={cs.next_btn} onClick={btnClick}><img src={next} alt="" /></div>
            </div>
        </div>
    );
}

export default LoginPage;