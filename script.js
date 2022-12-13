function calculate(event) {
    var result = document.getElementById('result');
    var a = document.getElementById('a').valueAsNumber;
    var b = document.getElementById('b').valueAsNumber;
    var c = document.getElementById('c').valueAsNumber;

    console.log(a,b,c);

    var d = Math.pow(b, 2) - 4 * a * c;

    console.log(d);

    if(d == 0){
        result.innerHTML = "x1, x2=" + (-b + Math.sqrt(d)) / 2 * a;
    }

    if(d > 0){
        result.innerHTML = "x1=" + ((-b + Math.sqrt(d)) / 2 * a) + "<br>" +"x2=" + ((-b + Math.sqrt(d)) / 2 * a);
    }

    if(d < 0) {
        result.innerHTML = "немає розвʼязків";
    }

    event.preventDefault();
}
