import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path: string, req?: any) => {
    const response = await request.get(path, req);
    return response;
};

export const post = async (path: string, req?: any, headers?: any) => {
    const response = await request.post(path, req, headers);
    return response;
};

export const put = async (path: string, req: any, headers?: any) => {
    const response = await request.put(path, req, headers);
    return response;
};

export const del = async (path: any) => {
    const response = await request.delete(path);
    return response;
};

export default request;
