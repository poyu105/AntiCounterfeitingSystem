import React from "react";

// Modal參數: show:是否顯示modal, onClose:關閉modal(function), title:modal標題, children:自訂內容(html), onConfirm:確認(function)
export default function Modal({ show, onClose, title, children, onConfirm }) {
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
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={onClose} />
                        </div>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="button" onClick={onConfirm}>確認</button>
                            <button className="btn btn-danger" type="button" onClick={onClose}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
