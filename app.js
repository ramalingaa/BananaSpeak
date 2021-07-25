var btnClick = document.querySelector("#btn-click");
var txtClick = document.querySelector("#txt-area");
var txtOutput = document.querySelector("#txt-click");
var url = "https://api.funtranslations.com/translate/yoda.json";
//requesting API server with input text 
    function inputHandler(inputTxt){
        return url + "?" +"text=" + inputTxt;
    }
    //Error handling message
    function errorHandler(error){
        console.log("Server can only handle 5 requests per hour, please try after some time");
        alert("Server can only handle 5 requests per hour, please try after One hour")
    }
    function clickHandler(){
            var textInput = txtClick.value;// inputvalue
            // fetcing the server
        fetch(inputHandler(textInput))
        .then(response => response.json())
        .then(json=>{
            
            var outputText = json.contents.translated;//convert output from json
            txtOutput.innerText = outputText;// display output

        })
        .catch(errorHandler)
    };
    btnClick.addEventListener("click",clickHandler)