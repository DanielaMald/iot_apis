async function updateValues() {
    try {
        const response = await fetch("https://iot-apii-b9be325b71d5.herokuapp.com/iot/1");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const ledValue = data[0].valor;

        document.getElementById("led-value").innerText = `Valor del LED: ${ledValue}`;

    } catch (error) {
        console.error('Error al obtener y actualizar el estado del LED:', error);
    }
}

function visualizarDatos() {
    fetch("https://iot-apii-b9be325b71d5.herokuapp.com/iot")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            mostrarDatos(data);
            console.log("Se cargaron los datos desde la base de datos:", data);
        })
        .catch(error => {
            console.error('Error al obtener datos desde la base de datos:', error);
            console.log("Error al cargar datos desde la base de datos");
        });
}

function mostrarDatos(data) {
    const ledValue = data[0].valor;
    document.getElementById("led-value").innerText = `Valor del LED: ${ledValue}`;

    const tableBody = document.getElementById("sensor-table-body");
    tableBody.innerHTML = "";

    data.forEach(entry => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = entry.dispositivo;
        row.insertCell(1).innerText = entry.valor.toFixed(2);
        row.insertCell(2).innerText = entry.fecha;
    });
}

// Llama a updateValues al cargar la página
document.addEventListener('DOMContentLoaded', updateValues);
