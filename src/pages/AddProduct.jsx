import React, { useState } from "react";
export default function AddProduct(){
    const [productType, setProductType] = useState('');
    const [spindleId, setSpindleId] = useState('');
    const [cuttingToolId, setCuttongToolId] = useState('');
    const [productionDate, setProductionDate] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const requestData = {
                productType:productType,
                spindleId:spindleId,
                cuttingToolId:cuttingToolId,
                productionDate:productionDate
            }

            const response = await fetch("https://localhost:7048/api/AddProduct",{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(requestData)
            })

            if(response.ok){
                alert("成功添加產品");
            }

        } catch (error) {
            alert("發生錯誤");
            console.log("添加產品錯誤:\n", error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>產品類型</label>
                    <select onChange={(e)=>setProductType(e.target.value)}>
                        <option value="" selected>請選擇產品類型</option>
                        <option value="spindle">主軸</option>
                        <option value="cuttingTool">刀具</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label>主軸Id</label>
                    <input type="text" onChange={(e)=>setSpindleId(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>刀具Id</label>
                    <input type="text" onChange={(e)=>setCuttongToolId(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label>生產年月</label>
                    <input type="month" onChange={(e)=>setProductionDate(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">送出</button>
                    <button type="reset" className="btn btn-outline-secondary">重置</button>
                </div>
            </form>
        </>
    )
}