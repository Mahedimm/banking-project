// document.addEventListener('DOMContentLoaded',()=>{

//     document.querySelector('#submit').onclick = function(){
//         console.log('kaj hoice');
//     }
// })

document.querySelector('#submit').addEventListener('click',function(){
    const userNameField = document.querySelector('#user');
    const  userNameValue = userNameField.value;
    
    const passField = document.querySelector('#pass');
    const passValue = passField.value;

    if (userNameValue == 'mahedi' && passValue == 'mahedimm'){
         window.location.href = "./banking.html";
    
       
    }

})

