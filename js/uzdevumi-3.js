// Tresais fails - masivi
// Es meginu stradat ar masiviem

// Uzdevums 1 - 3 skaitli masiva
function trisSkaitlesMasivs() {
    var masivs = [];
    var teksts = "3 skaitļi masīvā:\n\n";

    // ievadu 3 skaitlus
    for (var i = 1; i <= 3; i++) {
        var skaitlis = prompt("Ievadi " + i + ". skaitli:");
        if (skaitlis == null) return;

        skaitlis = Number(skaitlis);
        masivs.push(skaitlis); // pievienoju masivam

        teksts += i + ". skaitlis: " + skaitlis + "\n";
    }

    teksts += "\nMasīvs: [" + masivs.join(", ") + "]\n";

    // izdrukaju konsole
    console.log("Masīvs:", masivs);

    teksts += "\nArī konsolē izdrukāts!";

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 2 - 2 vardi masiva
function diviVardiMasivs() {
    var vardi = [];

    // ievadu 2 vardus
    var vards1 = prompt("Ievadi 1. vārdu:");
    if (vards1 == null) return;

    var vards2 = prompt("Ievadi 2. vārdu:");
    if (vards2 == null) return;

    vardi.push(vards1);
    vardi.push(vards2);

    // paradiju ar alert
    var alertTeksts = "1. vārds: " + vardi[0] + "\n2. vārds: " + vardi[1];
    alert(alertTeksts);

    var teksts = "2 vārdi masīvā:\n\n";
    teksts += "Masīvs: [" + vardi[0] + ", " + vardi[1] + "]\n";
    teksts += "\nAlert parādīja:\n" + alertTeksts;

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 3 - 5 skaitlu summa
function pieciSkaitliSumma() {
    // vai ievada pats vai izmanto gatavus
    var ievadaPats = confirm("Vai gribi ievadīt savus 5 skaitļus?\n(Ja nē, izmantosim: 10, 25, 30, 15, 20)");

    var masivs = [];

    if (ievadaPats) {
        // ievada pats
        for (var i = 1; i <= 5; i++) {
            var skaitlis = prompt("Ievadi " + i + ". skaitli:");
            if (skaitlis == null) return;
            masivs.push(Number(skaitlis));
        }
    } else {
        // gatavi skaitli
        masivs = [10, 25, 30, 15, 20];
    }

    var teksts = "5 skaitļu summa:\n\n";
    teksts += "Masīvs: [" + masivs.join(", ") + "]\n\n";

    // skaitu summu
    var summa = 0;
    for (var i = 0; i < masivs.length; i++) {
        summa += masivs[i];
        teksts += (i + 1) + ". skaitlis: " + masivs[i] + " (summa: " + summa + ")\n";
    }

    teksts += "\nGalīgā summa: " + summa;

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 4 - augli apgriezta seciba
function augliApgrieztaSeciba() {
    var augli = [];

    // ievadu 3 auglus
    for (var i = 1; i <= 3; i++) {
        var auglis = prompt("Ievadi " + i + ". augļa nosaukumu:");
        if (auglis == null) return;
        augli.push(auglis);
    }

    var teksts = "Augļi apgrieztā secībā:\n\n";
    teksts += "Sākotnējais: [" + augli.join(", ") + "]\n";

    // apgriezu masīvu - es nezinu vieglu veidu, tapeec darisu ar jaunu masīvu
    var apgriezts = [];
    for (var i = augli.length - 1; i >= 0; i--) {
        apgriezts.push(augli[i]);
    }

    teksts += "Apgrieztais: [" + apgriezts.join(", ") + "]\n\n";

    teksts += "Apgrieztā secībā:\n";
    for (var i = 0; i < apgriezts.length; i++) {
        teksts += (i + 1) + ". " + apgriezts[i] + "\n";
    }

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 5 - atzimju videjais
function atzimesVidejais() {
    var atzimes = [];

    // ievadu 5 atzimes
    for (var i = 1; i <= 5; i++) {
        while (true) {
            var atzime = prompt("Ievadi " + i + ". atzīmi (1-10):");
            if (atzime == null) return;

            atzime = Number(atzime);

            if (atzime >= 1 && atzime <= 10) {
                atzimes.push(atzime);
                break;
            } else {
                alert("Atzīmei jābūt no 1 līdz 10!");
            }
        }
    }

    var teksts = "Atzīmju vidējais:\n\n";
    teksts += "Atzīmes: [" + atzimes.join(", ") + "]\n\n";

    // skaitu summu
    var summa = 0;
    for (var i = 0; i < atzimes.length; i++) {
        summa += atzimes[i];
        teksts += (i + 1) + ". atzīme: " + atzimes[i] + "\n";
    }

    var videjais = summa / atzimes.length;

    teksts += "\nSumma: " + summa + "\n";
    teksts += "Vidējais: " + videjais.toFixed(2) + "\n\n";

    // novertejums
    if (videjais >= 9) {
        teksts += "Izcili!";
    } else if (videjais >= 8) {
        teksts += "Labi!";
    } else if (videjais >= 7) {
        teksts += "Normāli";
    } else if (videjais >= 6) {
        teksts += "Viduvēji";
    } else {
        teksts += "Jāuzlabo";
    }

    alert("Tavs vidējais: " + videjais.toFixed(2));

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}