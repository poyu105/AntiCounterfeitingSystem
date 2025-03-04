import React, { useState } from "react";
import Modal from "../components/Modal";
export default function Home(){
    const [productCode, setProductCode] = useState(''); //產品編號
    const [productionDate, setProductionDate] = useState(''); //生產年月
    const [randomcode, setRandomCode] = useState(''); //產品隨機碼
    
    const [showModal, setShowModal] = useState(false) //控制modal顯示狀態

    //處理重設按鈕(將所有輸入變數設置為空)
    const handleReset = ()=>{
        setProductCode('');
        setProductionDate('');
        setRandomCode('');

        // 清除表單的驗證樣式
        const form = document.querySelector(".needs-validation");
        if (form) {
            form.classList.remove("was-validated");
        }

    }

    //處理表單驗證
    const handleSubmit = (e)=>{
        e.preventDefault(); //防止表單提交
        var form = e.target;
        if(!form.checkValidity()){
            //驗證失敗，阻止提交
            e.stopPropagation();
        }else{
            //驗證成功，顯示modal
            setShowModal(true);
        }
        form.classList.add("was-validated");
    }

    //處理表單提交
    const confirmSubmit = ()=>{
        setShowModal(false);
        var form = document.getElementById('v-form');
        form.submit();
    }

    return(
        <>
            <div className="col-lg-5 col-md-7 col-10 mx-auto p-3 border">
                <p className="mb-3 fs-4 fw-bold text-center">請輸入產品資訊</p>
                <form id="v-form" onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="p-code" className="form-label">產品編號</label>
                        <input id="p-code" className="form-control" type="text" placeholder="請輸入產品編號" onChange={(e)=>{setProductCode(e.target.value)}} required/>
                        <span className="invalid-feedback">請輸入產品編號!</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="p-date" className="form-label">生產年月</label>
                        <input id="p-date" className="form-control" type="month" onChange={(e)=>{setProductionDate(e.target.value)}} required/>
                        <span className="invalid-feedback">請輸入生產年月!</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="p-randomcode" className="form-label">產品隨機碼</label>
                        <input id="p-randomcode" className="form-control" type="text" placeholder="請輸入產品隨機碼" onChange={(e)=>{setRandomCode(e.target.value)}} required/>
                        <span className="invalid-feedback">請輸入產品隨機碼!</span>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input id="readme" className="form-check-input" type="checkbox" required/>
                            <label htmlFor="readme" className="form-check-label">我已閱讀以下注意事項</label>
                            <span className="invalid-feedback">你必須要閱讀以下注意事項!</span>
                        </div>
                        <p className="fs-6">
                            <strong>注意事項：每件產品都有限制驗證次數 (N 次)</strong>，驗證後會記錄驗證時間、驗證設備等資訊，以確保每位客戶獲得正品，請妥善使用驗證機會。
                        </p>
                    </div>
                    <div className="d-grid gap-2 col-8 mx-auto">
                        <button type="submit" className="btn btn-primary">送出驗證</button>
                        <button type="reset" className="btn btn-outline-secondary" onClick={handleReset}>清除內容</button>
                    </div>
                </form>
            </div>
            <Modal
                show={showModal}
                onClose={()=>{setShowModal(false)}}
                title="確認提交表單?"
                onConfirm={confirmSubmit}
            >
                <p>請確認您的產品資訊：</p>
                <p><strong>產品編號：</strong>{productCode}</p>
                <p><strong>生產年月：</strong>{productionDate}</p>
                <p><strong>產品隨機碼：</strong>{randomcode}</p>
            </Modal>
        </>
    )
}