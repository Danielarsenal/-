$.ajax({
  url:config.setApi('api/getcoupon'),
  type:'get',
  success:function(info){
    console.log(info);
    
    var htmlStr = template('coupon_logo_tpl',info);
    $(".coupon_logo").html(htmlStr);
    $(".coupon_logo").on('click','a',function(){
      console.log($(this).attr('data-id'));
      location.href='couponproduct.html?couponId='+$(this).attr('data-id');
    })
  }
})