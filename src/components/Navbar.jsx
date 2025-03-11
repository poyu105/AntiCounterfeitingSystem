import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-3 p-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://raw.githubusercontent.com/poyu105/AntiCounterfeitingSystem/refs/heads/gh-pages/logo-white.webp" alt="logo"/> {/*使用開發模式請替換為:/logo-white.webp*/}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNav" className="navbar-collapse collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" title="驗證系統">驗證系統</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact" title="聯絡我們">聯絡我們</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AddProduct" title="新增產品">新增產品</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.kenturn.com.tw/tw" target="blank" title="前往官網">前往官網</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}