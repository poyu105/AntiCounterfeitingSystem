import React from "react";

export default function Footer(){
    return(
        <>
            <footer id="page-footer" className="mt-5 py-3 w-100 bg-black">
                <div className="col-lg-6 col-10 col mx-auto">
                    <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-3">
                        <img src="https://raw.githubusercontent.com/poyu105/AntiCounterfeitingSystem/refs/heads/gh-pages/logo-white.webp" alt="logo" className="me-3"/> {/*使用開發模式請替換為:/logo-white.webp*/}
                        <div className="d-flex gap-3">
                            <a href="https://www.facebook.com/kenturn1983" className="text-white hover" target="blank" title="FaceBook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UC1lsunrf-2NdCnj5f_7B4NA" className="text-white hover" target="blank" title="Youtube">
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="https://twitter.com/kenturnspindles" className="text-white hover" target="blank" title="Twitter X">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a href="skype:kenturn99?chat" target="blank" className="text-white hover" title="Skype">
                                <i className="bi bi-skype"></i>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex flex-md-row flex-column align-items-center gap-lg-5 gap-3 mx-auto text-white">
                        <div className="col-md-auto col-sm-7 col-10">
                            <p className="m-0 text-theme fw-bold">
                                <i className="bi bi-building me-2"></i>
                                彰濱一廠(主軸)
                            </p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://maps.app.goo.gl/9FjrRsMsqSqEJ8o67" className="text-decoration-none text-white fw-bold hover" target="blank" title="彰濱一廠(主軸)">
                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                        <span>彰化縣線西鄉彰濱工業區彰濱東七路 16 號</span>
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-telephone-fill me-2"></i>
                                    <span> 886 - 4 - 791 0271</span>
                                </li>
                                <li>
                                    <i className="bi bi-printer me-2"></i>
                                    <span> 886 - 4 - 791 0272</span>
                                </li>
                                <li>
                                    <a href="mailto://cnc-spindle@kenturn.com.tw" className="text-decoration-none text-white fw-bold hover">
                                        <i className="bi bi-envelope me-2"></i>
                                        <span>cnc-spindle@kenturn.com.tw</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-auto col-sm-7 col-10">
                            <p className="m-0 text-theme fw-bold">
                                <i className="bi bi-building me-2"></i>
                                彰濱二廠(刀具)
                            </p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://maps.app.goo.gl/s1rgoLJLaND7EEfFA" className="text-decoration-none text-white fw-bold hover" target="blank" title="彰濱二廠(刀具)">
                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                        <span>彰化縣線西鄉彰濱工業區線工路 3 號</span>
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-telephone-fill me-2"></i>
                                    <span> 886 - 4 - 791 0688</span>
                                </li>
                                <li>
                                    <i className="bi bi-printer me-2"></i>
                                    <span> 886 - 4 - 791 0272</span>
                                </li>
                                <li>
                                    <a href="mailto://ecio@kenturn.com.tw" className="text-decoration-none text-white fw-bold hover">
                                        <i className="bi bi-envelope me-2"></i>
                                        <span>ecio@kenturn.com.tw</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}