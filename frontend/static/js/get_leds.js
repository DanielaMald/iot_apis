function get_leds(){
    const URL = "https://api-iot-dev-jfpf.4.us-1.fl0.io/iot"
    var request = new XMLHttpRequest;
    request.open('GET',URL);
    request.send();

    request.onload = () => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);
        for (var i = 0; i < Object.keys(json).length; i++) {
            console.log(i)
    
           
        }
    }
    
}
