document.addEventListener('DOMContentLoaded', function(){
const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuirFonteBotao = document.getElementById('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', function(){
tamanhoAtualFonte += 0.1;
document.body.style.fonteSize = `${tamanhoAtualFonte}rem`
})

diminuirFonteBotao.addEventListener('click', function(){
tamanhoAtualFonte -= 0.1;
document.body.style.fonteSize = `${tamanhoAtualFonte}rem`
})

})