import axios from 'axios';


axios.defaults.headers.post["Content-Type"] = "application/json;";
// axios.defaults.headers["Accept"] = "application/json";

// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.interceptors.response.use(null, error => {
    const expectedErrors = error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        toast.error(`مشکلی از سمت سرور رخ داده است.${error.response}`, { position: 'top-right', closeOnClick: true });
    }

    return Promise.reject(error);

});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}