module.exports = {
    getToken:function() {
        return localStorage.getItem('token');
    },
    setToken:function (token) {
        return localStorage.setItem('token',token);
    },
    clear:function () {
        localStorage.clear();
    }
}