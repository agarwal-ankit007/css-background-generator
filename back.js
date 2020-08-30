var css=document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var orientation = document.querySelector(".orient");

function change()
{
    body.style.background = "linear-gradient("+orientation.value+"," +color1.value + ", "+color2.value+")";
    body.style.backgroundRepeat = "no-repeat";
}

function write()
{
    css.innerHTML="background : linear-gradient("+orientation.value+","+color1.value + ", "+color2.value+");";
}

color1.addEventListener("input",function(){
    change();    
    write();
})

color2.addEventListener("input",function(){
    change();
    write();
})
orientation.addEventListener("input",function(){
    change();
    write();
})