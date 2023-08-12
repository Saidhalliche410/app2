// var said =document.getElementById("id");
// said.addEventListener( "mouseout",()=>{
//     alert("Said Halliche");
// });
function said(){
    return"";
}
function said1(){
    alert("l'immprimante est bien ouverte");
}

function key(event){
    if(event.key =="1") {
        alert("va te faire enculéée")
    }
    else{

    alert(event.key);
    }
}
class Mypage{
    constructor(){
        // var text =document.getElementById("text");
        document.addEventListener( "paste",()=>{
                    this.copy();
                });
      
    }
    copy(){
        alert("text coller");
       }
}
onload=new Mypage();
var bien=false;
var button =document.getElementById("button");
button.addEventListener("click",()=>{
    if(bien==false){
    document.body.style=" background-color: #333;";
    bien=true;
}else{
document.body.style.background="white";
bien=false;
}
})
// button.addEventListener("dblclick",()=>{
//     document.body.style="background-color: #ffffff;"
// })
var email=document.getElementById("email");
var nesrine=document.getElementById("form")
var erreur=document.getElementById("paragraphe")
nesrine.addEventListener("submit",()=>{
    if(email.value.indexOf("@gmail") != -1){
        alert("les information sont bien envoyer");
    }else{
        email.style.borderColor="red";
        alert("veuillez bien entre une adresse email valide svp")
        erreur.innerHTML="vérifiez votre adresse email svp";
        error.preventDefault();
        return false;
    }
    
    
  
   
 });
 email.addEventListener("invalid",()=>{
    if(email.validity.valueMissing){
        email.setCustomValidity("remplir les champs svp")
    }else if(email.validity.typeMismatch){
        email.setCustomValidity("ces informations sont invalide");
    }

 })
//  email.addEventListener("input",()=>{
//    alert("entrer votre adresse email valide svp")

//  })
var change=document.getElementById("changercouleur");

change.addEventListener("change",()=>{
    document.body.style.background=change.value;
})
var chiffrement=document.getElementById("chiffrer");
var deschiffrement=document.getElementById("deschiffrer");
var text =document.getElementById("text");

chiffrement.addEventListener("click",()=>{
        var chiffrer =btoa(text.value)
        text.value=chiffrer;
});

   deschiffrement.addEventListener("click",()=>{
    var deschiffrer =atob(text.value)
    text.value=deschiffrer
   });

   var Said=document.getElementById("ba9lawa");
   
   Said.addEventListener("click",()=>{
       alert("Said Halliche");
   })
   var cliquer=document.getElementById("click1");
   cliquer.addEventListener("submit",()=>{
  Said.submit();
   })
   var variable= navigator.userAgent.toLowerCase();
   if(variable.includes("iphone")){
    alert("bitch you have iphone");
   }
       
     

   