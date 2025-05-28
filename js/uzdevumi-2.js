// Otrais fails - cikli
// Es meginaju izdarit uzdevumus ar for un while

// Uzdevums 1 - for cikls 1 lidz 20
function forCikls1Lidz20() {
    var teksts = "";

    // rakstu for ciklu
    for (var i = 1; i <= 20; i++) {
        teksts += i + "\n";
    }

    alert("Pabeigts! Skaitli no 1 lidz 20");

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 2 - while lidz 15
function whileCiklsLidz15() {
    var teksts = "";
    var i = 1;

    // while cikls
    while (i <= 15) {
        teksts += i + "\n";
        i++;
    }

    alert("While cikls pabeigts pie 15");

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 3 - para skaitli
function paraSkaitliSumma() {
    var summa = 0;
    var teksts = "Para skaitli no 0 lidz 50:\n";

    for (var i = 0; i <= 50; i++) {
        if (i % 2 == 0) {
            summa += i;
            teksts += i + " ";
        }
    }

    teksts += "\nSumma: " + summa;

    alert("Para skaitlu summa: " + summa);

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 4 - sveiks n reizes
function sveiksTikReizes() {
    var skaits = prompt("Cik reizes rakstit 'Sveiks!'?");
    if (skaits == null) return;

    skaits = Number(skaits);

    var teksts = "";

    for (var i = 1; i <= skaits; i++) {
        teksts += i + ". Sveiks!\n";
    }

    alert("Gatavs!");

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 5 - uzminej skaitli
function uzminetSkaitli() {
    // nejausis skaitlis
    var pareizais = Math.floor(Math.random() * 100) + 1;
    var minējumi = 0;
    var teksts = "Uzminēšanas spēle:\n\n";

    alert("Es iedomajos skaitli no 1 lidz 100!");

    while (true) {
        var minejums = prompt("Ievadi savu minējumu:");
        if (minejums == null) {
            alert("Spele atcelta");
            return;
        }

        minejums = Number(minejums);
        minējumi++;

        teksts += minējumi + ". minejums: " + minejums + " - ";

        if (minejums == pareizais) {
            teksts += "PAREIZI!\n";
            alert("Apsveicu! Tu uzminēji ar " + minējumi + " mēģinājumiem!");
            break;
        } else if (minejums < pareizais) {
            teksts += "par mazu\n";
            alert("Par mazu!");
        } else {
            teksts += "par lielu\n";
            alert("Par lielu!");
        }
    }

    teksts += "\nPareizais skaitlis: " + pareizais;
    teksts += "\nMinējumu skaits: " + minējumi;

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 6 - akmens skeres papirītis
function akmensSkeresPatrina() {
    var lietotajaUzvari = 0;
    var datoraUzvari = 0;
    var speles = 0;
    var teksts = "Akmens-Šķēres-Papīrītis:\n\n";

    alert("Spēlēsim! Raksti: akmens, skeres, vai papiritis");

    while (true) {
        var lietotajs = prompt("Tava izvēle:");
        if (lietotajs == null) break;

        lietotajs = lietotajs.toLowerCase();

        // parbaudu vai pareizi
        if (lietotajs != "akmens" && lietotajs != "skeres" && lietotajs != "papiritis") {
            alert("Raksti pareizi: akmens, skeres, vai papiritis");
            continue;
        }

        // datora izvele
        var nejausis = Math.floor(Math.random() * 3);
        var dators = "";
        if (nejausis == 0) dators = "akmens";
        if (nejausis == 1) dators = "skeres";
        if (nejausis == 2) dators = "papiritis";

        speles++;
        teksts += "Spēle " + speles + ":\n";
        teksts += "Tu: " + lietotajs + "\n";
        teksts += "Dators: " + dators + "\n";

        // kas uzvar
        if (lietotajs == dators) {
            teksts += "Neizšķirts!\n\n";
            alert("Neizšķirts! Spēlējam vēlreiz!");
            continue; // atkartojam
        } else if (
            (lietotajs == "akmens" && dators == "skeres") ||
            (lietotajs == "skeres" && dators == "papiritis") ||
            (lietotajs == "papiritis" && dators == "akmens")
        ) {
            teksts += "Tu uzvarēji!\n\n";
            lietotajaUzvari++;
            alert("Tu uzvarēji!");
        } else {
            teksts += "Dators uzvarēja!\n\n";
            datoraUzvari++;
            alert("Dators uzvarēja!");
        }

        // jautaju vai turpinat
        var turpinat = confirm("Spēlēt vēlreiz?");
        if (!turpinat) break;
    }

    teksts += "=== REZULTATI ===\n";
    teksts += "Tavas uzvaras: " + lietotajaUzvari + "\n";
    teksts += "Datora uzvaras: " + datoraUzvari + "\n";

    if (lietotajaUzvari > datoraUzvari) {
        teksts += "TU UZVARĒJI KOPUMĀ!";
    } else if (datoraUzvari > lietotajaUzvari) {
        teksts += "DATORS UZVARĒJA KOPUMĀ!";
    } else {
        teksts += "NEIZŠĶIRTS KOPUMĀ!";
    }

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}