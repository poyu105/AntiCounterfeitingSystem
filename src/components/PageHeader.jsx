import React from "react";
import { useLocation } from "react-router-dom";

export default function Pageheader(){
    //取得目前路由
    const location = useLocation()

    //對應標題
    const pageTitles = {
        "/":"驗證系統",
        "/Contact":"聯絡我們",
        "/AddProduct":"新增產品"
    }

    //取得目前頁面的標題
    const currentTitle = pageTitles[location.pathname];

    return(
        <>
            <header className="container-fluid mb-5">
                <h1 className="fw-bold m-0">{currentTitle}</h1>
                <hr className="m-0"/>
            </header>
        </>
    )
}