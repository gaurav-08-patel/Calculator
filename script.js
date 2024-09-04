let string="";
let buttons=document.querySelectorAll(".buttons");
let input=document.querySelector("input");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML==="="){
        string=eval(string);
        input.value=string;   
        }
        else if(e.target.innerHTML==="AC"){
            string="";
            input.value=string;  
        }
        else if(e.target.innerHTML==="M+"){
            string=eval(string);
            input.value=string; 
        }
        else if(e.target.innerHTML==="M-"){
            string=string + "";
            input.value=string;
        }
        else{
            string=string + e.target.innerHTML;
            input.value=string;
        }
        })
})
