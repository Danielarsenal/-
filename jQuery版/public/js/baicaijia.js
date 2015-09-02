//渲染商品列表页面函数
var flag = true;
$("#searchBtn").on("click", function () {
  if (flag) {
    $(this).removeClass("lp_search_btn glyphicon glyphicon-search").addClass("glyphicon glyphicon-remove lp_search_btn");
    $(".searchbox").css("display","block");
    flag = false;
  }else{
    $(this).removeClass("glyphicon glyphicon-remove lp_search_btn").addClass("lp_search_btn glyphicon glyphicon-search");
    $(".searchbox").css("display","none");
    flag=true;
  }
})
function render(n) {
  $.ajax({
    url: config.setApi('api/getbaicaijiaproduct'),
    type: 'get',
    data: { titleid: n },
    success: function (info) {
      var htmlStr = template('tab_content_tpl', info);
      $(".tab_main").html(htmlStr);
    }
  })
}
var myScroll = new IScroll('.lowprice_tab', {
  scrollX: true,
  scrollY: false
});
$.ajax({
  url: config.setApi('api/getbaicaijiatitle'),
  tyep: 'get',
  success: function (info) {
    // 渲染列表头页面
    var htmlStr = template('lp_list_tpl', info)
    $("#wrapper").html(htmlStr);
    // 计算列表的宽度动态添加
    var sum = 0;
    $("#wrapper li").each(function () {
      sum += $(this).width();
    });
    $("#wrapper").css({ "width": sum });
    //点击li出现相应的内容
    render(0);
    $("#wrapper").on('click', '.tab_item', function () {
      console.log($(this).attr('data-id'));
      $('.active').removeClass('active');
      $(this).addClass("active");
      render($(this).attr('data-id'));
    })
  }
})
// 渲染商品列表数据的函数

// 根据页面滚出长度判断回到顶部按钮是否出现
$(window).on('scroll',function(){
            // var divH = $('.lp_container').height();
            // var divT = $('.lp_container').offset().top;

            // var winH = $(window).height();
            // var winT = $(window).scrollTop();
            
            // var chazhi = (divH+divT)-(winH+winT);
            // if(chazhi<900){
            //   $(".jiantou").css("display",'block');
            // }
            var winT = $(window).scrollTop();
            if(winT>600){
              $(".jiantou").css("display",'block');
            }else{
              $(".jiantou").css("display",'none');
            }
        })
