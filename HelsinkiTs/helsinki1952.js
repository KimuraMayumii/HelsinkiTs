var helsinki = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak-kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak-kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat"
];
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var daraboltAdatok = feltoltendoElem[i].split(" ");
        var eredmenyek = {
            helyezes: Number(daraboltAdatok[0]),
            sportolokSzama: Number(daraboltAdatok[1]),
            sportag: daraboltAdatok[2],
            versenyszam: daraboltAdatok[3]
        };
        beolvasottAdatok.push(eredmenyek);
    }
    return beolvasottAdatok;
}
var helsinkiAdatok = ObjektumFeltolto(helsinki);
console.log(helsinkiAdatok);
function PontszerzoHelyezesek(vizsgaltTomb) {
    return vizsgaltTomb.length;
}
function PontszerzoHelyezesekKiir(eredmeny) {
    console.log("3. feladat:");
    console.log("Pontszerző helyezések száma: " + eredmeny);
}
PontszerzoHelyezesekKiir(PontszerzoHelyezesek(helsinkiAdatok));
function ErmekSzama(vizsgaltTomb) {
    var ermek = [0, 0, 0];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].helyezes == 1) {
            ermek[0]++;
        }
        else if (vizsgaltTomb[i].helyezes == 2) {
            ermek[1]++;
        }
        else if (vizsgaltTomb[i].helyezes == 3) {
            ermek[2]++;
        }
    }
    return ermek;
}
function ErmekSzamaKiir(ermekSzama) {
    console.log("4. feladat:");
    console.log("Arany: " + ermekSzama[0]);
    console.log("Ezüst: " + ermekSzama[1]);
    console.log("Bronz: " + ermekSzama[2]);
    console.log("Összesen: " + (ermekSzama[0] + ermekSzama[1] + ermekSzama[2]));
}
ErmekSzamaKiir(ErmekSzama(helsinkiAdatok));
function OlimpiaiPontok(vizsgaltTomb) {
    var olimpiaipontok = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].helyezes == 1) {
            olimpiaipontok += 7;
        }
        else if (vizsgaltTomb[i].helyezes == 2) {
            olimpiaipontok += 5;
        }
        else if (vizsgaltTomb[i].helyezes == 3) {
            olimpiaipontok += 4;
        }
        else if (vizsgaltTomb[i].helyezes == 4) {
            olimpiaipontok += 3;
        }
        else if (vizsgaltTomb[i].helyezes == 5) {
            olimpiaipontok += 2;
        }
        else if (vizsgaltTomb[i].helyezes == 6) {
            olimpiaipontok += 1;
        }
    }
    return olimpiaipontok;
}
function OlimpiaiPontokKiir(eredmeny) {
    console.log("5. feladat:");
    console.log("Olimpiai pontok száma: " + eredmeny);
}
OlimpiaiPontokKiir(OlimpiaiPontok(helsinkiAdatok));
function UszasTorna(vizsgaltTomb) {
    var Felirat = "";
    var UszasErmek = 0;
    var TornaErmek = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].sportag == "torna" && vizsgaltTomb[i].helyezes < 4) {
            TornaErmek++;
        }
        else if (vizsgaltTomb[i].sportag == "uszas" && vizsgaltTomb[i].helyezes < 4) {
            UszasErmek++;
        }
        else { }
    }
    if (UszasErmek == TornaErmek) {
        Felirat = "Egyenlő volt az érmek száma.";
    }
    else if (UszasErmek > TornaErmek) {
        Felirat = " Az úszásban szereztek több érmet.";
    }
    else {
        Felirat = " Tornában szereztek több érmet.";
    }
    return Felirat;
}
function UszasTornaKiir(eredmeny) {
    console.log("6. feladat:");
    console.log(eredmeny);
}
UszasTornaKiir(UszasTorna(helsinkiAdatok));
function Kajakkenu(vizsgaltSzoveg) {
    if (vizsgaltSzoveg == "kajakkenu") {
        return "kajak-kenu";
    }
    else {
        return vizsgaltSzoveg;
    }
}
// A nyolcadik feladatba beletört a bicskám, utólag megnéztem hogyan kellett volna csinálni.
