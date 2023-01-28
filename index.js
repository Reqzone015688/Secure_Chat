function log(message){
    document.getElementById("log").textContent += message + "\n"

}

log("Hello World")

var b = Bugout("A")
b.on("seen",function(address){
    log(address + " [seen]");
} );

log(b.address() + " [me]");
