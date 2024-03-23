let textarea = document.querySelector("textarea");
textarea.addEventListener("keypress", (e) => {
    if (!checkChar(e)) {
      e.preventDefault();
    }
  });
  
  function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
  
    const pattern = "[a-z]";
  
    if (char.match(pattern)) {
      return true;
    } else {
      alert("Caracter especial digitado " + char);
    }
  }



function mudarInterface(){
    let exibir = document.getElementById('txt-result')
    let ocultar = document.getElementById('msg-container')
    exibir.classList.replace('hide', 'show')
    ocultar.classList.replace('show', 'hide')
}


function criptografar(){
    let text = document.getElementById('text-input').value
    let paragrafo = document.getElementById('txt-final')
    let boxFoco =  document.getElementById('text-input').focus()
    if (text ==''){
        boxFoco.focus()
    }else{
    paragrafo.innerHTML = text.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
        mudarInterface()
        limparTxt()
}
}


function descriptografar(){
    let text = document.getElementById('text-input').value
    let paragrafo = document.getElementById('txt-final')
    let boxFoco =  document.getElementById('text-input').focus()

    if (text ==''){
        boxFoco.focus()
    }else{
    paragrafo.innerHTML = text.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    mudarInterface()
    limparTxt()
}
}
function limparTxt(){
    document.getElementById('text-input').value = " "
}
function copiar() {
    let exibir = document.getElementById('txt-result')
    let ocultar = document.getElementById('msg-container')
    let resultado = document.getElementById("txt-final");
    navigator.clipboard.writeText(resultado.innerHTML);
   limparTxt()
    alert("Copiado para a area de transferência")
    exibir.classList.replace('show', 'hide')
    ocultar.classList.replace('hide', 'show')
  }
  