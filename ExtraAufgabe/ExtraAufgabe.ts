window.addEventListener("load", my Function(): void{

    function myFunction(): void {
        var txt: string;
        var person: string = prompt("Gebe deinen Namen ein", "Sade Babatunde")
        if (person == null || person =="") {
            txt = "User cancelled the prompt."; 
    
        } else {
            txt = "Hallo" + person + "| Einen wunderschönen Tag wüsche ich";
        }
        document.getElementById("demo").innerHTML = txt;
    }
}
