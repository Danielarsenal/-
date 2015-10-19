var myApp = angular.module('myApp', ['ngRoute']);
// //之前的路由
// function emailRouteConfig($routeProvider) {
//     $routeProvider.
//     when('/', {
//         controller: IndexController,
//         templateUrl: 'tmp/index-tmp.html'
//     }).
//     when('/category', { // /category 代表匹配 #/category这个路由
//         controller: CategoryController, // category页面需要用到的控制器
//         templateUrl: 'tmp/category-tmp.html' // 就是category页面的模板
//     }).
//     when('/productlist/:categoryid/:pageid', {
//         controller: ProductlistController,
//         templateUrl: 'tmp/productlist-tmp.html'
//     }).
//     otherwise({
//         redirectTo: '/'
//     });
// }
//新的路由配置
myApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.
    when('/', {
        controller: "indexController",
        templateUrl: 'tmp/index-tmp.html'
    }).
    when('/category', { // /category 代表匹配 #/category这个路由
        controller: "categoryController", // category页面需要用到的控制器
        templateUrl: 'tmp/category-tmp.html' // 就是category页面的模板
    }).
    when('/productlist/:categoryid/:pageid', {
        controller: "productlistController",
        templateUrl: 'tmp/productlist-tmp.html'
    }).
    when('/bijia/:productid', {
        controller: "bijiaController",
        templateUrl: 'tmp/bijia-tmp.html'
    }).
    when('/gsproduct', {
        controller: "gsproductController",
        templateUrl: 'tmp/gsproduct-tmp.html'
    }).
    when('/gsproduct/:shopid/:areaid/:shopName/:areaName', {
        controller: "gsproductController",
        templateUrl: 'tmp/gsproduct-tmp.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);
// function IndexController($scope) {}

// function CategoryController($scope) {}

// function ProductlistController($scope, $routeParams) {
//     $scope.categoryid = $routeParams.categoryid;
//     $scope.pageid = $routeParams.pageid;
//     console.log($scope.categoryid);
// }
