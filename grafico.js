// conecta grafico.js a la API de https://analisi.transparenciacatalunya.cat/resource/8idm-becu.json  
const url = 'https://analisi.transparenciacatalunya.cat/resource/8idm-becu.json';
// Define la funciÃ³ que obtÃ© les dades de l'API
async function getData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// Defineix la funciÃ³ per crear el grÃ fic
async function createChart() {
    const data = await getData();
    if (!data) return;

    // Filtra les dades per obtenir les que tenen un valor de 0
    const filteredData = data.filter(item => item.valor === 0);

    // Crea un array amb els noms dels municipis
    const municipalities = filteredData.map(item => item.municipi);

    // Crea el grÃ fic de barres
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: municipalities,
            datasets: [{
                label: 'Municipis amb valor 0',
                data: new Array(municipalities.length).fill(1), // Cada municipi tindrÃ  un valor de 1
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// Crida a la funciÃ³ per crear el grÃ fic
createChart().catch(error => console.error('Error creating chart:', error));
// Afegeix un event listener per carregar el grÃ fic quan el document estigui llest
document.addEventListener('DOMContentLoaded', () => {
    createChart().catch(error => console.error('Error creating chart:', error));
});
// Afegeix un event listener per actualitzar el grÃ fic quan es faci clic al botÃ³
document.getElementById('updateChart').addEventListener('click', () => {
    createChart().catch(error => console.error('Error updating chart:', error));
});
// Afegeix un event listener per actualitzar el grÃ fic quan es faci clic al botÃ³
document.getElementById('updateChart').addEventListener('click', () => {
    createChart().catch(error => console.error('Error updating chart:', error));
});
// Afegeix un event listener per actualitzar el grÃ fic quan es faci clic al botÃ³  
document.getElementById('updateChart').addEventListener('click', () => {
    createChart().catch(error => console.error('Error updating chart:', error));
});
// Afegeix un event listener per actualitzar el grÃ fic quan es faci clic al botÃ³  
document.getElementById('updateChart').addEventListener('click', () => {
    createChart().catch(error => console.error('Error updating chart:', error));
});
// Afegeix un event listener per actualitzar el grÃ fic quan es faci clic al botÃ³
document.getElementById('updateChart').addEventListener('click', () => {
    createChart().catch(error => console.error('Error updating chart:', error));
});
// Afegeix un event listener per actualitzar el grÃ fic quan es faci clic al botÃ³
document.getElementById('updateChart').addEventListener('click', () => {
    createChart().catch(error => console.error('Error updating chart:', error));
});

// agrega los graficos al grafics.html
document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chartContainer');
    if (chartContainer) {
        const canvas = document.createElement('canvas');
        canvas.id = 'myChart';
        chartContainer.appendChild(canvas);
    }
});