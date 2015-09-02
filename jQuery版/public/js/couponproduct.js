var couponid = config.queryString().couponId;
    var index = 0
$.ajax({
  url:config.setApi('api/getcouponproduct'),
  type:'get',
  data:{couponid:couponid},
  success:function(info){
    console.log(info);
    var htmlStr = template('coupon_list_tpl',info)
    $(".couponbox").html(htmlStr);
    // 点击出现相应图片
    $(".couponbox").on('click',"a",function(){
      var imgSrc = ($(this).find("img").attr('src'));
      index = $(this).parent().index();
      
      $(".coupon_mask img").attr('src',imgSrc);
      $(".coupon_mask").show();
      
    })
    $(".coupon_mask").on('click','.pre',function(){
      // alert(1)
      index--;
      if(index<0){
        alert('已经是第一张了！')
        return false;
      }
            
      var imgSrc = $('li').eq(index).find("img").attr('src');
      $(".coupon_mask img").attr('src',imgSrc);
      // $(".coupon_mask").show();
      
    })
    $(".coupon_mask").on('click','.next',function(){
      // alert(1)
      index++;
      var imgSrc = $('li').eq(index).find("img").attr('src');
      $(".coupon_mask img").attr('src',imgSrc);
      
      
    })
    // 点击遮罩隐藏
    $(".mask_content").on("click",function(){
      $(".coupon_mask").hide();
    })
  }
})
