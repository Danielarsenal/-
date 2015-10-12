/*
 * @Author: zhengwei
 * @Date:   2016-10-23 15:57:22
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-11-29 14:40:29
 */

'use strict';
$(function() {
     getBrandTitle();
    function getBrandTitle() {
        $.ajax({
            url: "http://139.199.192.48:9090/api/getbrandtitle",
            success: function(data) {
                var html = template("brandTitleTmp", data);
                $('.brand-title').html(html);
            }
        })
    }
});
