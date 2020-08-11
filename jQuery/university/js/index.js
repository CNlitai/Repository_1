$(function(){
    $('.bottom-left ul').on({
        click:function(){
        //    alert( $(this).text())
            if($(this).text()=='用户管理'){
                $('.content').load('./pages/user.html')
            }else if($(this).text()=='栏目管理'){
                $('.content').load('./pages/category.html')
                
            }
        }
    },'li')
})