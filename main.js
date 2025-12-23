let lastCity = null; // 👈 STATE (HAFIZA)

function getCityInfo() {
    const city = document.getElementById("cityInput").value.trim().toLowerCase();
    if (!city) return;

    lastCity = city; // STATE GÜNCELLENİYOR

    const plate = getPlate(city);
    const population = getPopulation(city);

    const result = document.getElementById("result");

    if (!plate) {
        result.innerHTML = "Şehir bulunamadı";
        return;
    }

    result.innerHTML = `
        <b>${city.toUpperCase()}</b><br>
        Plaka: ${plate}<br>
        Nüfus: ${population}
    `;
}
