//alert('funcionou');

var formFuncionario = document.getElementById('form-funcionario');
var relatorio = document.getElementById('relatorio');

formFuncionario.addEventListener('submit', (event) => {
    event.preventDefault();

    //Variaveis para uso de calculos:

    var inss = 0;
    var irpf = 0;
    var vt = 0;
    var liquido = 0;

    //Variaveis das DIVs HTML:

    var nomeFunc = document.getElementById('nome-func');
    var cargoFunc = document.getElementById('cargo-func');
    var dpFunc = document.getElementById('dp-func');
    var salarioFunc = document.getElementById('salario-base');
    var proventoFunc = document.getElementById('provento-salario');
    var liquidoFunc = document.getElementById('salario-liquido');
    var inssFunc = document.getElementById('desc-inss');
    var irpfFunc = document.getElementById('desc-irpf');
    var vtFunc = document.getElementById('desc-vt');

    if (formFuncionario.salario.value <= 1412)
        inss = formFuncionario.salario.value * 0.075;

    else if (formFuncionario.salario.value > 1412 && formFuncionario.salario.value <= 2824)
        inss = formFuncionario.salario.value * 0.09;

    else if (formFuncionario.salario.value > 2980 && formFuncionario.salario.value < 3200)
        inss = formFuncionario.salario.value * 0.12

    else if (formFuncionario.salario.value > 3200 && formFuncionario.salario.value < 7080)
        inss = formFuncionario.salario.value * 0.14


    if (formFuncionario.salario.value > 1900 && formFuncionario.salario.value <= 2826)
        irpf = (formFuncionario.salario.value - inss) * 0.075;

    else if (formFuncionario.salario.value > 2826 && formFuncionario.salario.value <= 3200)
        irpf = (formFuncionario.salario.value - inss) * 0.15;

    else if (formFuncionario.salario.value > 3200 && formFuncionario.salario.value <= 4664)
        irpf = (formFuncionario.salario.value - inss) * 0.225;

    else if (formFuncionario.salario.value > 4664)
        irpf = (formFuncionario.salario.value - inss) * 0.275;

        vt = formFuncionario.salario.value * 0.06;

        liquido = formFuncionario.salario.value - inss - irpf - vt;

        relatorio.style.display ='block';

        nomeFunc.innerHTML = formFuncionario.nome.value;
        cargoFunc.innerHTML = formFuncionario.cargo.value;
        dpFunc.innerHTML = formFuncionario.departamento.value;
        salarioFunc.innerHTML = `${(Number(formFuncionario.salario.value).toLocaleString('pt-br' , {style: 'currency' , currency: 'BRL'}))}`; 
        inssFunc.innerHTML = 'R$ ' + inss.toFixed(2);
        irpfFunc.innerHTML = 'R$ '+ irpf.toFixed(2);
        vtFunc.innerHTML = 'R$ ' + vt.toFixed(2);
        proventoFunc.innerHTML = `${(Number(formFuncionario.salario.value).toLocaleString('pt-br' , {style: 'currency' , currency: 'BRL'}))}`; 
        liquidoFunc.innerHTML = 'R$ ' + liquido.toFixed(2);

})