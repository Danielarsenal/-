$(function(){
    //密码框的验证
    $('.password').on('keyup',function(){
        var regExp = /^[a-zA-z]+[0-9]+$/;
        console.log(regExp.test($(this).val()));
        if(!regExp.test($(this).val())){
            $(this).css({border:'1px solid red'});
        }else {
            $(this).css({border:'1px solid skyblue'});
        }
    })
    //点击登录跳转至主页
    $('.loginBtn').on('click',function(){
        location.href = './index.html';
        return false;
    })
})