// 获取要操作的元素
let register_title=document.querySelector('.register-title');
let login_title=document.querySelector('.login-title');
let register_box=document.querySelector('.register-box');
let login_box=document.querySelector('.login-box');

// 绑定标题点击事件
register_title.addEventListener('click',()=>{
    // 判断是否收起，收起才可以点击
    if(register_box.classList.contains('slide-up')){
        login_box.classList.add('slide-up');
        register_box.classList.remove('slide-up');
    }
})
login_title.addEventListener('click',()=>{
    if(login_box.classList.contains('slide-up')){
        register_box.classList.add('slide-up');
        login_box.classList.remove('slide-up');
    }
})