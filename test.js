var request = (function (){
    var obj = {};
    var arr = window.location.search.slice(1).split("&");
    for (var i = 0, len = arr.length; i < len; i++) {
        var nv = arr[i].split("=");
        obj[decodeURIComponent(nv[0]).toLowerCase()];
    }
    return obj;   
})();
 
window.location.href = request.page;
