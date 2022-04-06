function convert() {
    var val = document.getElementById("input").value;
    var conversion = document.getElementById("output");

    var selFrom = document.getElementById("sel1");
    var selTo = document.getElementById("sel2");

    var selectedFrom = selFrom[selFrom.selectedIndex].value;
    var selectedTo = selTo[selTo.selectedIndex].value;

    if (selectedFrom == "km1") {
        if (selectedTo == "km2") {
            var result = val * 1;
            output.value = result;
        } else if (selectedTo == "m2") {
            var result = val * 1000;
            output.value = result;
        } else if (selectedTo == "cm2") {
            var result = val * 100000;
            output.value = result;
        } else if (selectedTo == "feet2") {
            var result = val * 3280.8;
            output.value = result;
        } else if (selectedTo == "inch2") {
            var result = val * 39370;
            output.value = result;
        } else if (selectedTo == "yard2") {
            var result = val * 1093.6;
            output.value = result;
        } else if (selectedTo == "mile2") {
            var result = val * 0.62137;
            output.value = result;
        } else {
            output.value = "Check your inputs!"
        }
    } else if (selectedFrom == "m1") {
        if (selectedTo == "km2") {
            var result = val / 1000;
            output.value = result;
        } else if (selectedTo == "m2") {
            var result = val * 1;
            output.value = result;
        } else if (selectedTo == "cm2") {
            var result = val * 100;
            output.value = result;
        } else if (selectedTo == "feet2") {
            var result = val * 3.2808;
            output.value = result;
        } else if (selectedTo == "inch2") {
            var result = val * 39.370;
            output.value = result;
        } else if (selectedTo == "yard2") {
            var result = val * 1.0936;
            output.value = result;
        } else if (selectedTo == "mile2") {
            var result = val * 0.00062137;
            output.value = result;
        } else {
            output.value = "Check your inputs!"
        }
    } else if (selectedFrom == "cm1") {
        if (selectedTo == "km2") {
            var result = val / 100000;
            output.value = result;
        } else if (selectedTo == "m2") {
            var result = val / 100;
            output.value = result;
        } else if (selectedTo == "cm2") {
            var result = val * 1;
            output.value = result;
        } else if (selectedTo == "feet2") {
            var result = val * 0.032808;
            output.value = result;
        } else if (selectedTo == "inch2") {
            var result = val * 0.39370;
            output.value = result;
        } else if (selectedTo == "yard2") {
            var result = val * 0.010936;
            output.value = result;
        } else if (selectedTo == "mile2") {
            var result = val * 0.0000062137;
            output.value = result;
        } else {
            output.value = "Check your inputs!"
        }
    } else if (selectedFrom == "feet1") {
        if (selectedTo == "km2") {
            var result = val / 3280.8;
            output.value = result;
        } else if (selectedTo == "m2") {
            var result = val / 3.2808;
            output.value = result;
        } else if (selectedTo == "cm2") {
            var result = val / 0.032808;
            output.value = result;
        } else if (selectedTo == "feet2") {
            var result = val * 1;
            output.value = result;
        } else if (selectedTo == "inch2") {
            var result = val * 12;
            output.value = result;
        } else if (selectedTo == "yard2") {
            var result = val * 0.33333;
            output.value = result;
        } else if (selectedTo == "mile2") {
            var result = val * 0.00018939;
            output.value = result;
        } else {
            output.value = "Check your inputs!"
        }
    } else if (selectedFrom == "inch1") {
        if (selectedTo == "km2") {
            var result = val / 39370;
            output.value = result;
        } else if (selectedTo == "m2") {
            var result = val / 39.370;
            output.value = result;
        } else if (selectedTo == "cm2") {
            var result = val / 0.39370;
            output.value = result;
        } else if (selectedTo == "feet2") {
            var result = val * 0.083333;
            output.value = result;
        } else if (selectedTo == "inch2") {
            var result = val * 1;
            output.value = result;
        } else if (selectedTo == "yard2") {
            var result = val * 0.027778;
            output.value = result;
        } else if (selectedTo == "mile2") {
            var result = val * 0.000015783;
            output.value = result;
        } else {
            output.value = "Check your inputs!"
        }
    } else if (selectedFrom == "yard1") {
        if (selectedTo == "km2") {
            var result = val / 1093.6;
            output.value = result;
        } else if (selectedTo == "m2") {
            var result = val / 1.0936;
            output.value = result;
        } else if (selectedTo == "cm2") {
            var result = val / 0.010936;
            output.value = result;
        } else if (selectedTo == "feet2") {
            var result = val * 3;
            output.value = result;
        } else if (selectedTo == "inch2") {
            var result = val * 36;
            output.value = result;
        } else if (selectedTo == "yard2") {
            var result = val * 1;
            output.value = result;
        } else if (selectedTo == "mile2") {
            var result = val * 0.00056818;
            output.value = result;
        } else {
            output.value = "Check your inputs!"
        }
    } else if (selectedFrom == "mile1") {
        if (selectedTo == "km2") {
            var result = val / 0.62137;
            output.value = result;
        } else if (selectedTo == "m2") {
            var result = val / 0.00062137;
            output.value = result;
        } else if (selectedTo == "cm2") {
            var result = val /0.0000062137;
            output.value = result;
        } else if (selectedTo == "feet2") {
            var result = val * 5280;
            output.value = result;
        } else if (selectedTo == "inch2") {
            var result = val * 63380;
            output.value = result;
        } else if (selectedTo == "yard2") {
            var result = val * 1760;
            output.value = result;
        } else if (selectedTo == "mile2") {
            var result = val * 1;
            output.value = result;
        } else {
            output.value = "Check your inputs!"
        }
    } else {
        output.value = "Check your inputs!"
    }
}