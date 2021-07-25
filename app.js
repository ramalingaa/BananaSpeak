var btnClick = document.querySelector("#btn-click");
var txtClick = document.querySelector("#txt-area");
var txtOutput = document.querySelector("#txt-click");

 btnClick.addEventListener("click",function clickHandler()
    {
        txtOutput.innerText = txtClick.value;
}
 )