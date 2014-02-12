var RogerioPradoJ = RogerioPradoJ || {};
RogerioPradoJ.BoxCalculator = {};

RogerioPradoJ.BoxCalculator.Apf = (function() {

    var tabelaCalculoDv = [6, 8, 0, 2, 4, 7, 9, 1, 3, 5];

    function dvApf(siapf) {
        var dv, dv1, dv2 = null;
        var digitos = [];
        var somaCalculaDigito;
        var operacaoTemporaria;

        siapf = "" + parseInt(siapf);

        somaCalculaDigito = 0;
        digitos = siapf.split('');
        for (index = 0, z = digitos.length; index < z; index++) {
            if (index % 2 === 0) {
                somaCalculaDigito += parseInt(tabelaCalculoDv[digitos[index]]);
            } else {
                somaCalculaDigito += parseInt(digitos[index]);
            }

            dv1 = somaCalculaDigito % 10;
        };

        operacaoTemporaria = dv1 + "" + siapf;

        somaCalculaDigito = 0;
        digitos = operacaoTemporaria.split('');
        for (var i = 0, z = digitos.length; i < z; i++) {
            if (i % 2 == 0) {
                somaCalculaDigito += parseInt(tabelaCalculoDv[digitos[i]]);
            } else {
                somaCalculaDigito += parseInt(digitos[i]);
            }

            dv2 = somaCalculaDigito % 10;
        };

        dv = dv1 + "" + dv2;
        dv = "00".substring(0, "00".length - dv.length) + dv;
        dv = dv.substring(0, 2);

        return dv;
    }

    return {
        dvApf: dvApf
    }

})();