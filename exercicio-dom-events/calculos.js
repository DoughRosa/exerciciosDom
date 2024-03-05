/* Desenvolva aqui a rotina */

document.addEventListener('DOMContentLoaded', function() {

    let valorBase = document.getElementById('valor_base');
    let ajudaComTransporte = document.getElementById('valor_transporte');
    let ajudaAlimentacao = document.getElementById('valor_alimentacao');

    let descontoAutomovel = document.getElementById('valor_automovel');
    let faltas = document.getElementById('faltas');

    let valorReceita = document.getElementById('valor_receita');
    let valorDescontos = document.getElementById('valor_descontos');
    let valorTotal = document.getElementById('valor_total');

    let botaoCalcular = document.getElementById('btn_calcular');

    botaoCalcular.addEventListener('click', function(){
        let receitaTotal = parseFloat(valorBase.value)+ parseFloat(ajudaComTransporte.value)+ parseFloat(ajudaAlimentacao.value);
        let descontosTotal = parseFloat(descontoAutomovel.value)+parseFloat(faltas.value);

        let total = receitaTotal-descontosTotal;

        valorReceita.value = receitaTotal;
        valorDescontos.value = descontosTotal;
        valorTotal.value = total;
    });
});