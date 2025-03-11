const API_BASE_URL = "https://localhost:7048/api";

const fetchData = async (url, method = "GET", data = null) => {
    const headers = {
        "Content-Type": "application/json",
    };

    const options = {
        method,
        headers,
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${url}`, options);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "API發生錯誤!");
        }
        return await response.json();
    } catch (error) {
        console.error("API error: " + error.message);
        throw error; // 讓外部調用時可以捕捉錯誤
    }
};

const apiService = {
    verify: (data) => fetchData("/ProductVerification", "POST", data),
};

export default apiService;
