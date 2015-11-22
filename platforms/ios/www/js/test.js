console.log("====  begin to call test.js ====")
function clickFunc(){
    alert('这里是iOS工作室');
}
var button1 = document.getElementById('button1');
button1.addEventListener('click',clickFunc,false);