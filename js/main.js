// Galvenais fails ar funkcijam
// Es meginu uzrakstit funkcijas kas palīdz visur

// funkcija lai paraditu rezultatu
function paraditRezultatu(teksts) {
    // iegustam elementus
    var rezultatuVieta = document.getElementById('resultArea');
    var rezultatuTeksts = document.getElementById('resultContent');

    // iestatam tekstu
    rezultatuTeksts.textContent = teksts;

    // paradam rezultatu zonu
    rezultatuVieta.style.display = 'block';

    // ejam uz augsu pie rezultata
    rezultatuVieta.scrollIntoView();
}

// funkcija lai notīra rezultātus
function notiritRezultatus() {
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('resultContent').textContent = '';

    console.log('Rezultati notiriti');
}

// funkcija lai iegūtu skaitli no lietotaja
function iegutSkaitli(zinojums) {
    while (true) {
        var ievade = prompt(zinojums);

        // ja nospiez cancel
        if (ievade === null) {
            return null;
        }

        // parveido par skaitli
        var skaitlis = Number(ievade);

        // parbauda vai ir skaitlis
        if (!isNaN(skaitlis) && ievade !== '') {
            return skaitlis;
        } else {
            alert('Lūdzu, ievadi derīgu skaitli!');
        }
    }
}

// funkcija lai iegūtu vārdu no lietotaja
function iegutVardu(zinojums) {
    while (true) {
        var vards = prompt(zinojums);

        // ja nospiez cancel
        if (vards === null) {
            return null;
        }

        // notīra tukšumus
        vards = vards.trim();

        // parbauda vai nav tukšs
        if (vards !== '') {
            return vards;
        } else {
            alert('Lūdzu, ievadi vārdu!');
        }
    }
}

// funkcija kas palaiž kad lapa ieladetas
window.onload = function() {
    console.log('Lapa ieladeta, JavaScript darbojas!');

    // paradijam paziņojumu
    console.log('Visas funkcijas ir gatavas');

    // parbaudam vai prompt darbojas
    console.log('Prompt tests...');

    // ja kas nedarbojas, varam parādit brīdinājumu
    if (typeof prompt === 'undefined') {
        alert('Uzmanību: prompt funkcija nav pieejama!');
    }
};

// funkcija kas formatē rezultātu
function formatetRezultatu(nosaukums, teksts) {
    return "=== " + nosaukums + " ===\n\n" + teksts;
}

// funkcija lai paraditu kludu
function paraditKludu(kludasTeksts) {
    alert('Kļūda: ' + kludasTeksts);
    console.log('Kļūda:', kludasTeksts);
}

// funkcija lai parbauditu vai ir skaitlis
function irSkaitlis(vertiba) {
    return !isNaN(vertiba) && vertiba !== '' && vertiba !== null;
}

// test funkcija - lai redzam vai viss darbojas
function testPrompt() {
    var tests = prompt('Tests - ievadi ko gribi:');
    if (tests !== null) {
        alert('Tu ievadiji: ' + tests);
        paraditRezultatu('Tests: ' + tests);
    }
}