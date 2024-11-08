document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const energySource = document.getElementById('energy-source').value;
    const location = parseFloat(document.getElementById('location').value);

    if (isNaN(location) || location <= 0) {
        alert('Please enter a valid location or energy demand.');
        return;
    }

   
    let savings = 0;
    let energyProduction = 0;

    switch (energySource) {
        case 'solar':
            savings = location * 0.05; 
            energyProduction = location * 1.2; 
            break;
        case 'wind':
            savings = location * 0.04; 
            energyProduction = location * 1.5; 
            break;
        case 'hydro':
            savings = location * 0.06; 
            energyProduction = location * 1.0;
            break;
        case 'geothermal':
            savings = location * 0.07; 
            energyProduction = location * 1.3; 
            break;
        case 'biomass':
            savings = location * 0.045;
            energyProduction = location * 1.1; 
            break;
        default:
            break;
    }

    document.getElementById('savings').textContent = `Potential savings: $${savings.toFixed(2)}`;
    document.getElementById('energy-production').textContent = `Energy produced: ${energyProduction.toFixed(2)} kWh`;
});


var map = L.map('map-container').setView([51.505, -0.09], 2); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var projects = [
    { lat: 40.7128, lon: -74.0060, name: 'Solar Project - NYC' },
    { lat: 34.0522, lon: -118.2437, name: 'Wind Project - LA' },
    { lat: 48.8566, lon: 2.3522, name: 'Hydroelectric Project - Paris' },
    { lat: 51.5074, lon: -0.1278, name: 'Geothermal Project - London' }
];


projects.forEach(function(project) {
    L.marker([project.lat, project.lon])
        .addTo(map)
        .bindPopup(project.name);
});
