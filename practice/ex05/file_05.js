var arr = new Array('kris', 45.2, 8, true);
for(var i=0; i<arr.length; i++)
    document.write(arr[i] + "<br />");
arr = new Array();
for (i=0; i<10; i++){
    arr[i] = i*2;
    document.write(arr[i] + "<br />");
}
var sum = 0;
for(i=0; i<arr.length; i++)
    sum +=arr[i];
document.write('средне арифмитическое - ' + (sum / arr.length));