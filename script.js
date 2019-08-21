var a=0;
var b=0;

function rot(){
    a=a+1;
    b=b-1;
    document.getElementById("img1").style.transform = "rotate("+a+"deg)";
    document.getElementById("img2").style.transform = "rotate("+b+"deg)";
}