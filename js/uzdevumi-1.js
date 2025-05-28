// Pirmie uzdevumi JavaScript
// Es meginaju uzrakstit funkcijas katram uzdevumam

// Uzdevums 1 - sveiciens
function sveiciensVards() {
    // ljudzu ievada vardu ar manu funkciju
    var vards = iegutVardu("Ievadi savu vardu:");

    // ja nospiez cancel
    if (vards === null) {
        alert("Tu neko neievadiji");
        return;
    }

    // sveiciens
    var sveiciensZinojums = "Sveiki, " + vards + "!";
    alert(sveiciensZinojums);

    // veidoju rezultata tekstu
    var rezultataTeksts = "Tu ievadiji: " + vards + "\nSveiciens: " + sveiciensZinojums;

    // paradiju rezultatu ar manu funkciju
    paraditRezultatu(formatetRezultatu("Sveiciens pēc vārda", rezultataTeksts));
}

// Uzdevums 2 - dubultot skaitli
function dubultoSkaitli() {
    var skaitlis = iegutSkaitli("Ievadi skaitli:");

    if (skaitlis === null) {
        alert("Atcelts");
        return;
    }

    // reizinu ar 2
    var rezultats = skaitlis * 2;

    alert("Rezultats: " + rezultats);

    // radam rezultatu
    var teksts = skaitlis + " x 2 = " + rezultats;
    paraditRezultatu(formatetRezultatu("Dubulto skaitli", teksts));
}

// Uzdevums 3 - para vai nepara
function paraVaiNepara() {
    var skaitlis = prompt("Ievadi skaitli:");

    if (skaitlis == null) {
        return;
    }

    skaitlis = Number(skaitlis);

    // parbaudu ar %
    if (skaitlis % 2 == 0) {
        alert("Tas ir para skaitlis");
        var teksts = skaitlis + " ir para";
    } else {
        alert("Tas ir nepara skaitlis");
        var teksts = skaitlis + " ir nepara";
    }

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 4 - vecums
function vecumaPaarbaude() {
    var vecums = prompt("Cik tev gadu?");

    if (vecums == null) {
        return;
    }

    vecums = Number(vecums);

    if (vecums >= 18) {
        alert("Tu esi pilngadigs");
        var teksts = "Vecums: " + vecums + " - pilngadigs";
    } else {
        alert("Tu esi nepilngadigs");
        var teksts = "Vecums: " + vecums + " - nepilngadigs";
    }

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 5 - kurs lielaks
function kursLielaaks() {
    var skaitlis1 = prompt("Ievadi pirmo skaitli:");
    if (skaitlis1 == null) return;

    var skaitlis2 = prompt("Ievadi otro skaitli:");
    if (skaitlis2 == null) return;

    skaitlis1 = Number(skaitlis1);
    skaitlis2 = Number(skaitlis2);

    var teksts = "";

    if (skaitlis1 > skaitlis2) {
        alert("Pirmais ir lielaks");
        teksts = skaitlis1 + " > " + skaitlis2;
    } else if (skaitlis2 > skaitlis1) {
        alert("Otrais ir lielaks");
        teksts = skaitlis2 + " > " + skaitlis1;
    } else {
        alert("Abi ir vienadi");
        teksts = skaitlis1 + " = " + skaitlis2;
    }

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 6 - atzimes
function atzimesNovertejums() {
    var punkti = prompt("Ievadi punktus (0-100):");
    if (punkti == null) return;

    punkti = Number(punkti);

    var atzime = "";

    // es nezinu kaa labak darit, tapeec daudz if
    if (punkti >= 90) {
        atzime = "A";
    } else if (punkti >= 80) {
        atzime = "B";
    } else if (punkti >= 70) {
        atzime = "C";
    } else if (punkti >= 60) {
        atzime = "D";
    } else {
        atzime = "F";
    }

    alert("Tava atzime: " + atzime);

    var teksts = "Punkti: " + punkti + "\nAtzime: " + atzime;
    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 7 - parole
function parolesPaarbaude() {
    // iestatiju paroli
    var pareizaParole = "secret123";

    var parole = prompt("Ievadi paroli:");
    if (parole == null) return;

    if (parole == pareizaParole) {
        alert("Pareizi!");
        var teksts = "Parole pareiza";
    } else {
        alert("Nepareizi!");
        var teksts = "Parole nepareiza. Pareiza ir: " + pareizaParole;
    }

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 8 - temperatura
function temperaturasNovertejums() {
    var temp = prompt("Ievadi temperaturu:");
    if (temp == null) return;

    temp = Number(temp);

    if (temp < 10) {
        alert("Auksts");
        var teksts = temp + " gradi - auksts";
    } else if (temp <= 25) {
        alert("Silts");
        var teksts = temp + " gradi - silts";
    } else {
        alert("Karsts");
        var teksts = temp + " gradi - karsts";
    }

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 9 - dalamiba
function dalaamibaPaarbaude() {
    var skaitlis = prompt("Ievadi skaitli:");
    if (skaitlis == null) return;

    skaitlis = Number(skaitlis);

    var teksts = "Skaitlis: " + skaitlis + "\n";

    // parbaudu dalamibu
    var ar3 = skaitlis % 3 == 0;
    var ar5 = skaitlis % 5 == 0;

    if (ar3 && ar5) {
        teksts += "Dalas ar 3 UN 5";
    } else if (ar3) {
        teksts += "Dalas ar 3";
    } else if (ar5) {
        teksts += "Dalas ar 5";
    } else {
        teksts += "Nedalas ne ar 3, ne ar 5";
    }

    alert(teksts);

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}

// Uzdevums 10 - login sistema
function piesleegsanasSistema() {
    var lietotajs = prompt("Ievadi lietotajvardu:");
    if (lietotajs == null) return;

    var parole = prompt("Ievadi paroli:");
    if (parole == null) return;

    // pareize info
    var pareizaisLietotajs = "admin";
    var pareizaParole = "password123";

    if (lietotajs == pareizaisLietotajs && parole == pareizaParole) {
        alert("Veiksmigi piesledzies!");
        var teksts = "Piesleksanas OK";
    } else {
        alert("Nepareizi dati!");
        var teksts = "Nepareizi dati\nPareizais: " + pareizaisLietotajs + "/" + pareizaParole;
    }

    document.getElementById('resultContent').textContent = teksts;
    document.getElementById('resultArea').style.display = 'block';
}