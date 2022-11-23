const form = document.querySelector("#form");
let resultadoKills = 0;
let resultadoDeaths = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputKills = e.target.querySelector("#kills");
    const inputDeaths = e.target.querySelector("#deaths")
    const kills = Number(inputKills.value);
    const deaths = Number(inputDeaths.value);
    
    totalDeaths(deaths);
    totalKills(kills);
    killDeathRatio(resultadoKills, resultadoDeaths);
    clearInputs();
});

function totalKills (kills) {
    const total = document.querySelector('#kill');
    total.innerHTML = kills
    let resultadoPartida = document.querySelector('#kill').innerHTML;
    resultadoKills = resultadoKills + parseFloat(resultadoPartida);
    total.innerHTML = `Você matou: ${resultadoKills}`;
}

function totalDeaths (deaths) {
    const totalMortes = document.querySelector('#death');
    totalMortes.innerHTML = deaths
    let resultadoMortes = document.querySelector('#death').innerHTML;
    resultadoDeaths = resultadoDeaths + parseFloat(resultadoMortes);
    totalMortes.innerHTML = `Você morreu: ${resultadoDeaths}`;
}

function killDeathRatio (resultadoKills, resultadoDeaths) {
    const calculoKd = document.querySelector('#kd');
    let resultadoKd = (parseFloat(resultadoKills) / parseFloat(resultadoDeaths).toFixed(2));
    calculoKd.innerHTML = `Seu K/D é: ${resultadoKd}`;
}

// function clearInputs () {
//     const formulario = document.querySelector('#form');
//     document.querySelector('#formulario').reset
