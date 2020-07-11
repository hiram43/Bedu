// JavaScript source code
$(document).ready(function () {
    var numero = [1, 2, 3, 4, 5];
    var Rellenado = ["uno", "dos", "tres", "Cuatro", "Cinco"]
    var funcion = [1.1, 1.2, 1.3, 1.4, 1.5,]
    for (var i = 0; i < numero.length; i++) {
        $("#Num1").append("<th>" + numero[i] + "</th>")
        $("#Num2").append("<th>" + Rellenado[i] + "</th>")
        $("#Num3").append("<th>" + funcion[i] + "</th>")
    }

    $("#JsonEx").submit(function () {
        var Json1 = $(this).formToJson()
        console.log(Json1);

        return false;

    });








    //Form to Json --->>>>>> //////
    $.fn.formToJson = function () {
        form = $(this);

        var formArray = form.serializeArray();
        var jsonOutput = {};

        $.each(formArray, function (i, element) {
            var elemNameSplit = element['name'].split('[');
            var elemObjName = 'jsonOutput';

            $.each(elemNameSplit, function (nameKey, value) {
                if (nameKey != (elemNameSplit.length - 1)) {
                    if (value.slice(value.length - 1) == ']') {
                        if (value === ']') {
                            elemObjName = elemObjName + '[' + Object.keys(eval(elemObjName)).length + ']';
                        } else {
                            elemObjName = elemObjName + '[' + value;
                        }
                    } else {
                        elemObjName = elemObjName + '.' + value;
                    }

                    if (typeof eval(elemObjName) == 'undefined')
                        eval(elemObjName + ' = {};');
                } else {
                    if (value.slice(value.length - 1) == ']') {
                        if (value === ']') {
                            eval(elemObjName + '[' + Object.keys(eval(elemObjName)).length + '] = \'' + element['value'].replace("'", "\\'") + '\';');
                        } else {
                            eval(elemObjName + '[' + value + ' = \'' + element['value'].replace("'", "\\'") + '\';');
                        }
                    } else {
                        eval(elemObjName + '.' + value + ' = \'' + element['value'].replace("'", "\\'") + '\';');
                    }
                }
            });
        });

        return jsonOutput;
    }
    //End Form to Json----> /////////////////////////
});