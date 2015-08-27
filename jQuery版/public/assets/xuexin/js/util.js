/**
 * Created by Huangyk on 2017/7/5.
 */
var obj = {
        queryString:function (){
            var search = location.search.slice(1);
            var searchArr = search.split('&');
            var o = {}; //
            for (var i = 0; i < searchArr.length; i++) {
                var temp = searchArr[i].split('=');
                o[temp[0]] = temp[1];
            }
            return o;
        }
}