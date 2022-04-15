let first = 1;
let second = 1;
let sum = first + second;

//document.write('<ol>');
document.write('<li>' + first);
document.write('<li>' + second);


for(count = 3; count <= 30; count++){
    sum = first + second;
    document.write('<li>' + first + ' + ' + second + ' = ' + sum + '</li>');

    first = second;
    second = sum;
}