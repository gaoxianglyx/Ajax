;(function() {
    var Ajax = function(options) {
    /* 传入方式默认为对象 */
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || 'json';
    options.async = options.async || true;
    var params = getParams(options.data);
    var xhr;
    /* 创建一个 ajax请求* W3C标准和IE标准*/
    if (window.XMLHttpRequest){
        /* W3C标准*/
        xhr = new XMLHttpRequest();
    }else{
        /* IE标准@type {ActiveXObject}*/
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            var status = xhr.status;
            if (status >= 200 && status < 300 ){
                options.success && options.success(xhr.responseText,xhr.responseXML);
            }else{
                options.fail && options.fail(status);
            }
        }
    };
    if (options.type == 'GET'){
        xhr.open("GET",options.url + '?' + params ,options.async);
        xhr.send(null)
    }else if (options.type == 'POST'){
        /*打开请求*/
        xhr.open('POST',options.url,options.async);
        /*POST请求设置请求头*/
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        /* 发送请求参数*/
        xhr.send(params);
        }
    }
    /*    处理json为字符串，用&隔开*/   
     function getParams(data) {
        var arr = [];
        for (var param in data){
            arr.push(encodeURIComponent(param) + '=' +encodeURIComponent(data[param]));
        }
        arr.push(('randomNumber=' + Math.random()).replace('.'));
        return arr.join('&');}
    window["Ajax"] = Ajax;
})();