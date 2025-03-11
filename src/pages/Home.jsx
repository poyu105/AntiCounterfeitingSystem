import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import "./Home.css";
import apiService from "../apiService";

export default function Home(){
    const [productType, setProductType] = useState(''); //產品類型
    const [productCode, setProductCode] = useState(''); //產品編號
    const [productionDate, setProductionDate] = useState(''); //生產年月
    const [randomcode, setRandomCode] = useState(''); //產品隨機碼

    const [isLoading, setIsLoading] = useState(false) //表單送出後載入圖示
    
    const [showConfirmModal, setShowConfirmModal] = useState(false) //控制表單確認modal顯示狀態
    const [showResponseModal, setShowResponseModal] = useState(false); //控制後端回應modal顯示狀態
    const [responseData, setShowResponseData] = useState(''); //後端回應資料(用於顯示在modal)

    //處理透過查詢參數設定值
    useEffect(() => {
        //讀取 URL 參數
        const queryParams = new URLSearchParams(window.location.search);
        const type = queryParams.get("type"); 
        const code = queryParams.get("code");
        const date = queryParams.get("date");
        const rand = queryParams.get("rand");

        //設定表單值
        if (type) setProductType(type);
        if (code) setProductCode(code);
        if (date) setProductionDate(date);
        if (rand) setRandomCode(rand);
    }, []);

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
            setShowConfirmModal(true);
        }
        form.classList.add("was-validated");
    }

    //處理表單提交
    const confirmSubmit = async ()=>{
        setShowConfirmModal(false);
        setIsLoading(true);

        //準備要提交的資料
        const productVerificationData = {
            productType: productType,
            productCode: productCode,
            productionDate: productionDate,
            randomcode: randomcode
        };
        
        //向後端請求驗證
        setTimeout(async () => {
            try {
                //將回應轉為json
                const result = await apiService.verify(productVerificationData);
    
                //判斷回應是否為正品
                if(result.success){
                    //驗證成功(正品)
                    setShowResponseData(
                        <>
                            <p className="bg-warning bg-opacity-25 p-1 mb-2 fw-bold">此次查詢已扣除1次查詢機會! 剩餘{result.v_left}次查詢機會</p>
                            <p className="mb-1">
                                您輸入的產品資訊<br/>
                                產品類型: {productType == "spindle"?"主軸":"刀具"}<br/>
                                產品編碼: {productCode}<br/>
                                生產日期: {productionDate}<br/>
                                產品隨機碼: {randomcode}<br/>
                            </p>
                            <p className="bg-success bg-opacity-10 p-1 mb-1 text-center">經過查驗後為<strong className="fs-4 text-success">正品</strong>，如有需要任何服務，請<a href="https://www.kenturn.com.tw/tw/contact" target="blank">聯絡我們</a>。</p>
                            <div className="bg-info bg-opacity-25 p-1 mt-1 fs-7">
                                <p className="m-0 fw-bold">在您查詢前，該產品已被查驗{result.v_c}次</p>
                                <p className="m-0">上次查驗時間:{result.v_t}，地點: {result.v_ct+", "+result.v_rg+", "+result.v_cty}</p>
                            </div>
                        </>
                    )
                }else{
                    //驗證失敗(非正品)
                    setShowResponseData(
                        <>
                            <p className="mb-1">
                                您輸入的產品資訊<br/>
                                產品類型: {productType == "spindle"?"主軸":"刀具"}<br/>
                                產品編碼: {productCode}<br/>
                                生產日期: {productionDate}<br/>
                                產品隨機碼: {randomcode}<br/>
                            </p>
                            <p className="bg-danger bg-opacity-10 p-1 m-0 text-center">
                                {result.v_o ? 
                                <>
                                    <strong className="text-danger">超過查詢限制，無法驗證是否為正品</strong>
                                </>:
                                <>
                                    經過查驗後為<strong className="fs-4 text-danger">非正品</strong>
                                </>}
                                ，如有需要任何服務，請<a href="https://www.kenturn.com.tw/tw/contact" target="blank">聯絡我們</a>。
                            </p>
                        </>
                    )
                }
    
                //顯示回應modal
                setShowResponseModal(true);
            } catch (error) {
                alert(error);
                console.error(error);
            }finally{
                setIsLoading(false);
            }
        }, 2000);
    }

    return(
        <>
            <div className="col-lg-5 col-md-7 col-10 mx-auto p-3 border">
                <p className="mb-3 fs-4 fw-bold text-center">請輸入產品資訊</p>
                <form id="v-form" onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="p-type" className="form-label">產品類型</label>
                        <select id="p-type" className="form-select" value={productType} onChange={(e)=>{setProductType(e.target.value)}} required disabled={isLoading}>
                            <option value="" defaultValue="">請選擇產品類型</option>
                            <option value="spindle">主軸</option>
                            <option value="cuttingTool">刀具</option>
                        </select>
                        <span className="invalid-feedback">請選擇產品類型!</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="p-code" className="form-label">產品編號</label>
                        <input id="p-code" className="form-control" type="text" placeholder="請輸入產品編號" value={productCode} onChange={(e)=>{setProductCode(e.target.value)}} required disabled={isLoading}/>
                        <span className="invalid-feedback">請輸入產品編號!</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="p-date" className="form-label">生產年月</label>
                        <input id="p-date" className="form-control" type="month" value={productionDate} onChange={(e)=>{setProductionDate(e.target.value)}} required disabled={isLoading}/>
                        <span className="invalid-feedback">請輸入生產年月!</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="p-randomcode" className="form-label">產品隨機碼</label>
                        <input id="p-randomcode" className="form-control" type="text" placeholder="請輸入產品隨機碼" value={randomcode} onChange={(e)=>{setRandomCode(e.target.value)}} required disabled={isLoading}/>
                        <span className="invalid-feedback">請輸入產品隨機碼!</span>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input id="readme" className="form-check-input" type="checkbox" required disabled={isLoading}/>
                            <label htmlFor="readme" className="form-check-label">我已閱讀以下注意事項</label>
                            <span className="invalid-feedback">你必須要閱讀以下注意事項!</span>
                        </div>
                        <p className="fs-6">
                            <strong>注意事項：每件產品都有限制驗證次數 (N 次)</strong>，驗證後會記錄驗證時間、驗證設備等資訊，以確保每位客戶獲得正品，請妥善使用驗證機會。
                        </p>
                    </div>
                    <div className="d-grid gap-2 col-8 mx-auto">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            {isLoading ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</> : "送出驗證"}
                        </button>
                        <button type="reset" className="btn btn-outline-secondary" onClick={handleReset}>清除內容</button>
                    </div>
                </form>
            </div>

            {isLoading && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center flex-column">
                    <div className="spinner-border text-light" role="status"></div>
                    <span className="text-white">驗證中<span className="dots"></span>請勿離開視窗</span>
                </div>
            )}

            {/* 顯示表單確認的Modal */}
            <Modal
                show={showConfirmModal}
                onClose={()=>{setShowConfirmModal(false)}}
                title="確認提交表單?"
                onConfirm={confirmSubmit}
            >
                <p>請確認您的產品資訊：</p>
                <p><strong>產品類型:</strong>{productType == "spindle"?"主軸":"刀具"}</p>
                <p><strong>產品編號：</strong>{productCode}</p>
                <p><strong>生產年月：</strong>{productionDate}</p>
                <p><strong>產品隨機碼：</strong>{randomcode}</p>
            </Modal>

            {/* 顯示後端回應的Modal */}
            <Modal
                    show={showResponseModal}
                    onClose={()=>{
                        var form = document.getElementById('v-form');
                        form.submit();
                    }}
                    title={"驗證結果"}
                    showCloseBtn={false}
                    onConfirm={()=>{
                        var form = document.getElementById('v-form');
                        form.submit();
                    }}
                >
                {responseData}
            </Modal>
        </>
    )
}