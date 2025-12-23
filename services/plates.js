function getPlate(city) {
    const plates = {
        adana: 1, adıyaman: 2, afyon: 3, ağrı: 4, amasya: 5,
        ankara: 6, antalya: 7, artvin: 8, aydın: 9, balıkesir: 10,
        bilecik: 11, bingöl: 12, bitlis: 13, bolu: 14, burdur: 15,
        bursa: 16, çanakkale: 17, çankırı: 18, çorum: 19, denizli: 20,
        diyarbakır: 21, edirne: 22, elazığ: 23, erzincan: 24, erzurum: 25,
        eskişehir: 26, gaziantep: 27, giresun: 28, gümüşhane: 29, hakkari: 30,
        hatay: 31, isparta: 32, mersin: 33, istanbul: 34, izmir: 35,
        kars: 36, kastamonu: 37, kayseri: 38, kırklareli: 39, kırşehir: 40,
        kocaeli: 41, konya: 42, kütahya: 43, malatya: 44, manisa: 45,
        kahramanmaraş: 46, mardin: 47, muğla: 48, muş: 49, nevşehir: 50,
        niğde: 51, ordu: 52, rize: 53, sakarya: 54, samsun: 55,
        siirt: 56, sinop: 57, sivas: 58, tekirdağ: 59, tokat: 60,
        trabzon: 61, tunceli: 62, şanlıurfa: 63, uşak: 64, van: 65,
        yozgat: 66, zonguldak: 67, aksaray: 68, bayburt: 69,
        karaman: 70, kırıkkale: 71, batman: 72, şırnak: 73,
        bartın: 74, ardahan: 75, ığdır: 76, yalova: 77,
        karabük: 78, kilis: 79, osmaniye: 80, düzce: 81
    };

    return plates[city];
}
