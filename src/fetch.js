import axios from 'axios';

export const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    }
});

axiosInstance.CancelToken = axios.CancelToken;
axiosInstance.isCancel = axios.isCancel;

export default  (url, params = { method: 'get' }) => axiosInstance(url, params);
