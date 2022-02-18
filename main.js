const data = [
    {
        name: "KANCHAN N",
        regno: "4122101",
        NUMBER_THEORY:"70",
        DIGITAL_CIRCUITS:"70",
        COMPUTER_NETWORKS: "80",
        DATA_STRUCTURES: "60"
    },
    {
        name: "SHWETA M",
        regno: "4122102",
        NUMBER_THEORY:"85",
        DIGITAL_CIRCUITS:"60",
        COMPUTER_NETWORKS: "70",
        DATA_STRUCTURES: "55"
    },
    {
        name: "SEJAL P",
        regno: "4122103",
        NUMBER_THEORY:"90",
        DIGITAL_CIRCUITS:"65",
        COMPUTER_NETWORKS: "70",
        DATA_STRUCTURES: "80"




    }
]




const results = document.getElementById('res')




const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "NUMBER_THEORY : " + data[i].NUMBER_THEORY +"</h3>" + "<h3>" + "DIGITAL_CIRCUITS : " 
            + data[i].DIGITAL_CIRCUITS +"</h3>" +"<h3>" + "COMPUTER_NETWORKS : " + data[i].COMPUTER_NETWORKS +"</h3>"+
            "DATA_STRUCTURES : " +data[i].DATA_STRUCTURES + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h1>" + "Not available" + "</h1>" 




})

