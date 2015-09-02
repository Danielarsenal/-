var config = {
  baseUrl: '139.199.192.48',   //地址
  duankou: ':9090/',           //端口  
  xieyi: 'http://',            //协议
  setApi: function (api) {       //设置具体参数,参数无需加/
    return this.xieyi + this.baseUrl + this.duankou + api;
  }, 
  queryString: function () {
    var search = location.search;
    search = search.slice(1);
    var searchArr = search.split("&");
    console.log(searchArr);
    var obj = {};
    for (var i = 0; i < searchArr.length; i++) {
      var temp = searchArr[i].split("=");
      obj[temp[0]] = temp[1];
    }
    return obj;
  }
}
