
// post 请求，使用 formData 方式提交
export function formData(options) {
    const params = new FormData();
    Object.keys(options).forEach(key => {
        params.append(key, options[key]);
    });
    return params;
}
