let quantidadeDeHoras // entrada - input 
let valorPorHora // entrada - input
let salárioSemanal // saída - output 

quantidadeDeHoras = prompt("Informe a quantidade de horas trabalhadas");
valorPorHora = prompt("Informe o valor por hora");


quantidadeDeHoras = parseFloat(quantidadeDeHoras);
valorPorHora = parseFloat(valorPorHora);

salárioSemanal = parseFloat(quantidadeDeHoras) * parseFloat(valorPorHora);

alert("O salário semanal é de R$" + salárioSemanal);