/*
 * @Author: zhengwei
 * @Date:   2016-11-23 23:23:00
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-12-17 15:16:17
 */

'use strict';
// "http://mmb.ittun.com/api/getmoneyctrl"
//http://mmb.ittun.com/api/getindexmenu
// 创建一个indexController 控制器
myApp.controller('indexController', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        // getindexMenu 获取主页菜单数据的函数
        $scope.getindexMenu = function() {
            $http({
                url: "http://139.199.192.48:9090/api/getindexmenu"
            }).success(function(data) {
                for (var i = 0; i < data.result.length; i++) {
                    // $sce 解决 图片在页面上不能显示 转成angular 认识的html编码格式
                    data.result[i].img = $sce.trustAsHtml(data.result[i].img);
                }
                data.result[0].titlehref = "#/category";
                data.result[1].titlehref = "#/moneyctrl";
                data.result[2].titlehref = "#/inlanddiscount";
                data.result[3].titlehref = "#/baicaijia";
                data.result[4].titlehref = "#/moneyctrl";
                data.result[5].titlehref = "#/coupon";
                data.result[6].titlehref = "#/";
                data.result[7].titlehref = "#/";
                data.result[8].titlehref = "#/gsproduct";
                data.result[9].titlehref = "#/";
                data.result[10].titlehref = "#/sitenav";
                data.result[11].titlehref = "#/brandtitle";
                $scope.indexmenus = data.result;
            })
        };
        //调用 getindexMenu 函数
        $scope.getindexMenu();
        //getmoneyctrl 获取主页的折扣商品数据的函数
        $scope.getmoneyctrl = function() {
            $http({
                url: "http://139.199.192.48:9090/api/getmoneyctrl"
            }).success(function(data) {
                for (var i = 0; i < data.result.length; i++) {
                    // $sce 解决 图片在页面上不能显示 转成angular 认识的html编码格式
                    data.result[i].productImgSm = $sce.trustAsHtml(data.result[i].productImgSm);
                }
                $scope.moneyctrls = data.result;
            })
        }
        $scope.getmoneyctrl();
        $scope.toggle = function () {
            $('#menu > .row > div:nth-last-child(-n+4)').toggle(200);
        }
    }
]);
