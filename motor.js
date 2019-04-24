// 1.1 Configurações de algumas variáveis, para inicio do projeto // 

//  
// @label               Corresponde a tag label do <html> onde irei fazer a rederização de conteúdo 
// @btn                 Corresponde a tag button do <html> onde irei atrelar o evento do click do mouse do usuário  
// @contador            Usado para fazer o controle do meu conteudo escrito e estruturado no array objeto 
// @respostas           Usadado para fazer o acumulador de respostas do usuário 
// @contador_gabarito   Corresponde ao número de acerto do usuário
// @gabarito            São as respostas corretas de cada etapa do game
//

/*
var table = document.getElementsByTagName('td');
var label = document.getElementsByTagName('label');
var btn = document.getElementById('btn');
var contador = 0;
var respostas = [];
var contador_gabarito = 0;
var gabarito = ["c", "c", "b", "b", "a"];


var n = 0;
var l = document.getElementById("number");
window.setInterval(function () {
    l.innerHTML = n;
    n++;
    if (n == 30) {
    }
}, 1000);

var objeto = [
    [
        "JavaScript é uma linguagem de marcação",
        "Javascript é derivado do Java",
        "JavaScript possui suporte para Orientação a objetos",
        "JavaScript é uma linguagem somente para front"
    ],
    [
        "A equação 0.99999999999 == 1 é True",
        "um jeito de debugar seu código JS é usando o print",
        "JavaScript é uma linguagem compilada",
        "Node é uma linguagem baseada no Javascript"
    ],
    [
        "A função alert é usada para alertar o usuário",
        "Santos é melhor que o Corinthians",
        "A culpa é do usuário",
        "No meu computador funciona"
    ],
    [
        "Ta pronto, só falta testar",
        "Ou é rápido, ou é bem feito. Os 2, não dá",
        "Não faço gambiarra, somente arranjos técnicos",
        "Eu fiz certo, mas não compila"
    ],
    [
        " Neppo é a melhor empresa de T.I",
        " O resto é resto",
        " Node.js tem um motor typescript",
        " Java foi inspirado na linguagem javascript "
    ]
]

//Esse laço, corresponde as primeiras questões que estão na tela
//Onde eu defino o conteúdo modificando o innerHTML com meu objeto acima   
for (var i = 0; i <= 3; + i++) {
    label[i].innerHTML = objeto[0][i];
}

// É uma função que dispara quando o usuário clica no <button> verificar 
// Ela é responsável pelo motor da aplicação
// cliclar()    
function clicar() {
    var pacote = document.querySelectorAll('[name=input]:checked');
    var valor_pacote = pacote[0].id;
    respostas.push(valor_pacote);
    if (gabarito[contador] == respostas[contador]) {
        contador_gabarito += 1;
    }
    contador += 1;
    for (var i = 0; i <= 3; + i++) {
        label[i].innerHTML = objeto[contador][i];
    } 
}
var btn = document.getElementById('btn')
btn.addEventListener("click", clicar);

*/