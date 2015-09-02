$.ajax({
  url:config.setApi('api/getsitenav'),
  type:"get",
  success:function(info){
    console.log(info);
    var htmlStr = template('market_content_tpl',info);
    $(".markert_content").html(htmlStr);
  }
})