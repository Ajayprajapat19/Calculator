let input = document.querySelector("#inputbox");
let buttons =document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerText == "="){
           string = eval(string);
           input.value = string;
        }
        else if(e.target.innerText==='AC'){
            string ="";
            input.value= string;
        }
        else if(e.target.innerText==='DEL'){
            if(string.length!=0){
                string  = string.slice(0,-1);
                 input.value= string;
            }
        }
       else {
      string = string + e.target.innerText; 
      input.value = string;
    }
    })
})