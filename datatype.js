var x = prompt("enter any number");
parseInt(x)
if(x>0)
{
    document.write("yes positive");
    document.write("<br>");
    document.write("it is of else block");

}
else if
(x<0){
document.write("yes negative");
document.write("<br>");
document.write("it is of else if block");


}
else if (x==0)
{
document.write("zerozero");
document.write("<br>");
document.write("it is of zero block");
}
else{
    document.write("invalid");
    document.write("<br>");
    document.write("it is of invalid output");
}