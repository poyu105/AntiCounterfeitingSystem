import React from "react";

// Modal參數: show:是否顯示modal, onClose:關閉modal(function), title:modal標題, children:自訂內容(html), onConfirm:確認(function)
export default function Modal({ show, onClose, title, children, onConfirm, showConfirmBtn=true, showCloseBtn=true }) {
    if (!show) return null; //只有當show為true時才顯示modal

    return (
        <>
            {/* modal顯示時背景調暗 */}
            <div className="modal-backdrop bg-dark opacity-75"></div>
            {/* 主要modal */}
            <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fw-bold">{title}</h3>
                            <button type="button" className="btn-close" onClick={onClose} />
                        </div>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer justify-content-between">
                            <img src="https://raw.githubusercontent.com/poyu105/AntiCounterfeitingSystem/refs/heads/gh-pages/logo-white.webp" alt="logo" className="col-4"/> {/*使用開發模式請替換為:/logo-white.webp*/}
                            <div className="d-flex gap-1">
                                <button className={`btn btn-primary ${showConfirmBtn?"":"visually-hidden"}`} type="button" onClick={onConfirm}>確認</button>
                                <button className={`btn btn-danger ${showCloseBtn?"":"visually-hidden"}`} type="button" onClick={onClose}>取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
