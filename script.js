function Enviar(){
    const  texto = document.querySelector("#message-text").value;
    const lugar  = document.createElement("p");
    let divt =  document.getElementById("chat-area");
    
    if(texto != ""){
        lugar.innerHTML = '<div style="background-color: white; width: auto; padding: 10px;">' + texto + "</div>";
        divt.appendChild(lugar)
        document.getElementById("message-text").value = "";
    }
};