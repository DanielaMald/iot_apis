function on_off(valor) {
    alert("Actualizar Led ")
    const URL = "https://api-iot-dev-jfpf.4.us-1.fl0.io/iot/1"

    var request = new XMLHttpRequest;
    request.open('PUT',URL +"/" + valor,true);
    request.setRequestHeader("Content-Type", "application/json");
    data = JSON.stringify( {
        "id": 1,
        "dispositivo": "LED",
        "valor": valor})
    request.send(data)

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log(json);
        console.log("status_code: " + request.status);
        window.location.href = "../templates/index.html"
    }
}
