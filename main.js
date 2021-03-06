var positionA = [{
        x: 30,//10-40
        y: 80,//50-100
        r: 40
    }]
var positionB = [{
        x: 20,//10-40
        y: 30,//10-50
        r: 40
    }]
var positionC = [{
        x: 70,
        y: 40,
        r: 40
}]

var positionC = [{
    x: 70,
    y: 90,
    r: 40
}]

var positionCartA = [{
    x: 70,
    y: 90,
    r: 40
}]

$(function() {

    var container = $("#live-chart");
    var iot = $("#iot")
    var mqtt_icon = $("#mqtt-icon");
    var mqtt_status = $("#mqtt-status");
    var mqtt_panel = $("#mqtt-panel");

    var esp1_icon = $("#esp1-icon");
    var esp1_status = $("#esp1-status");
    var esp1_panel = $("#esp1-panel");

    var esp2_icon = $("#esp2-icon");
    var esp2_status = $("#esp2-status");
    var esp2_panel = $("#esp2-panel");

    var esp1_led_icon = $("#esp1-led-icon");
    var esp1_led_status = $("#esp1-led-status");
    var esp1_led_panel = $("#esp1-led-panel");
    var esp1_led_button = $("#esp1-led-cutton");

    var esp2_led_icon = $("#esp2-led-icon");
    var esp2_led_status = $("#esp2-led-status");
    var esp2_led_panel = $("#esp2-led-panel");
    var esp2_led_button = $("#esp2-led-cutton");

    esp1_led_panel.hide();
    esp2_led_panel.hide();

    // Determine how many data points to keep based on the placeholder's initial size;
    // this gives us a nice high-res plot while avoiding more than one point per pixel.
    var totalPoints = container.outerWidth() / 20 || 100;
    console.log("Chart: max points = "+totalPoints);

    var esp1_sensor_data = [];
    var esp2_sensor_data = [];

    var esp1_led = false;
    var esp2_led = false;
    var esp1_offline = 0;
    var esp2_offline = 0;

    var dataset = {
        get: function() {
            var data = [];
            if(esp1_sensor_data.length>0)
                data.push({ label: "Random ESP1", data: esp1_sensor_data, color: "#00FFee" });
            if(esp2_sensor_data.length>0)
                data.push({ label: "LDR ESP2", data: esp2_sensor_data, color: "#00FF00" });
            return data;
        }
    };

    // Update Graph
    var update = function () {
        var HEATMAP = $('#heatMap')
        // HEATMAP.canvas.width = 500;
        // HEATMAP.canvas.height = 500;
        var myHEATMAP = new Chart(HEATMAP, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: ['CartA'],
                    data: positionCartA,
                    backgroundColor: 'rgba(156, 39, 176,0.8)'
                },
                {
                    label: ['CartB'],
                    data: [{
                      x: 60,
                      y: 20,
                      r: 40
                    }],
                    backgroundColor: 'rgba(244, 67, 54,0.8)'
                },
                {
                    label: ['CartC'],
                    data: [{
                      x: 50,
                      y: 10,
                      r: 40
                    }],
                    backgroundColor: 'rgba(33, 150, 243,0.8)'
                }
            
            ]
            },
            options: {
                        responsive: true,
                        title:{
                            display:true,
                        },
                        tooltips: {
                                callbacks: {
    
                                }
                        },
                        scales: {
                            
                            yAxes : [{
                                display: false,
                                ticks : {
                                    max : 100,    
                                    min : 0
                                }
                            }],
                            xAxes : [{
                                display: false,
                                ticks : {
                                    max : 100,    
                                    min : 0
                                }
                            }]
                        }
                    }
        });
    }

    // Boker info
    var hostname = "broker.mqtt-cpe.ml";
    var port = 9001;
    var clientid = "cpe24-demo-"+parseInt(Math.random() * 100000, 16);

    var ESP1_PING_TOPIC = "IoTProjectG1.2/backend";


    var ESP2_PING_TOPIC = "cpe24mqttdemo/esp2/ping";

    var ESP1_LED_TOPIC = "cpe24mqttdemo/esp1/led";
    var ESP1_SENSOR_TOPIC = "cpe24mqttdemo/esp1/sensor";

    var ESP2_LED_TOPIC = "cpe24mqttdemo/esp2/led";
    var ESP2_SENSOR_TOPIC = "cpe24mqttdemo/esp2/sensor";

    var client = new Messaging.Client(hostname, port, clientid);
 
    var options = {

        //connection attempt timeout in seconds
        timeout: 3,

        //Gets Called if the connection has successfully been established
        onSuccess: function () {
            console.log("Connected");
            mqtt_status.text("Connected");
            mqtt_icon.removeClass("fa-close");
            mqtt_icon.addClass("fa-check");
            mqtt_panel.removeClass("panel-danger");
            mqtt_panel.addClass("panel-primary");

            // Subscibe TOPIC
            // Ping Pong. Checking esp is alive?
            client.subscribe(ESP1_PING_TOPIC, {qos: 2});
            client.subscribe(ESP2_PING_TOPIC, {qos: 2});
            // sensor and switch status
            client.subscribe(ESP1_SENSOR_TOPIC, {qos: 2});
            client.subscribe(ESP1_LED_TOPIC, {qos: 2});
            client.subscribe(ESP2_SENSOR_TOPIC, {qos: 2});
            client.subscribe(ESP2_LED_TOPIC, {qos: 2});

            // Set default ping message
            publish("0", ESP1_PING_TOPIC, 2, true);
            publish("0", ESP2_PING_TOPIC, 2, true);
        },

        //Gets Called if the connection could not be established
        onFailure: function (message) {
            console.log("Connection failed: " + message.errorMessage);
            mqtt_status.text("ERROR");
        },

    };
     
    //Attempt to connect
    client.connect(options);

    var shift_data = function() {
        if(esp1_sensor_data.length>0 && esp2_sensor_data.length>0 ){
            var min = Math.max(esp1_sensor_data[0][0], esp2_sensor_data[0][0]);
            while(esp1_sensor_data.length>0 && esp1_sensor_data[0][0]<min) 
                esp1_sensor_data.shift();
            while(esp2_sensor_data.length>0 && esp2_sensor_data[0][0]<min) 
                esp2_sensor_data.shift();
        }
    }

    // Handle incomming subscibed Message from broker
    client.onMessageArrived = function (message) {
        var topic = message.destinationName;
        var payload = message.payloadString;

        console.log('Topic: ' + topic + '  | ' + payload);
        if(payload == "A") {
            positionCartA = positionA;
        } else if (payload == "B") {
            positionCartA = positionB;
        } else if (payload == "C") {
            positionCartA = positionC;
        }
        update();

    };

    // Public on/off message when toggle icon was clicked
    esp1_led_icon.click(function(){
        publish(esp1_led?"0":"1", ESP1_LED_TOPIC, 2, true);
    });

    esp2_led_icon.click(function(){
        publish(esp2_led?"0":"1", ESP2_LED_TOPIC, 2, true);
    });

    //Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
    var publish = function (payload, topic, qos=2, retained=false) {
        var message = new Messaging.Message(payload);
        message.destinationName = topic;
        message.qos = qos;
        message.retained = retained;
        client.send(message);
    }

});