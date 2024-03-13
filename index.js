function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado com sucesso";
      parrafo.textContent = "";
      muñeco.src = "./img/encriptado.jpg";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Nenhum texto foi encontrado";
      parrafo.textContent = "Digite o texto que deseja encriptar ou desencriptar";
      swal("Ooops!", "Escreva um texto valido", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado com sucesso!";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Nenhum texto foi encontrado encontrado";
        parrafo.textContent = "Digite o texto que deseja encriptar ou desencriptar";
        swal("Ooops!", "Escreva um texto valido", "warning");
      }
  }