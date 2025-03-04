import React from "react";
export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-3 p-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/logo-white.webp" alt="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNav" className="navbar-collapse collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.kenturn.com.tw/tw" target="blank" title="前往官網">前往官網</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.kenturn.com.tw/tw" target="blank" title="前往官網">前往官網</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.kenturn.com.tw/tw" target="blank" title="前往官網">前往官網</a>
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