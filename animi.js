function convert(){
    let usd = document.getElementById('inputUSD').value;
    if(usd!=0){
    let cINR = (usd*82.42).toFixed(2);
    document.getElementById('inputINR').value=cINR;
    }
    let inr=document.getElementById('inputINR').value;
    if(inr!=0){
    let cUSD=(inr/82.42).toFixed(2);
    document.getElementById('inputUSD').value=cUSD;
}
}
function conver(){
    let cel = document.getElementById('CELCIUS').value;
    if(cel!=0){
    let cfAh= ((1.8*cel)+32).toFixed(2);
    document.getElementById('FAH').value=cfAh;
    }
    let fah=document.getElementById('FAH').value;
    if(fah!=0){
    let cCEL=(((fah-32)*5)/9).toFixed(2);
    document.getElementById('CELCIUS').value=cCEL;
}
}
function conve(){
    let gbps = document.getElementById('GB').value;
    if(gbps!=0){
    let cKB= (gbps*1024);
    document.getElementById('MB').value=cKB;
    }
    let kbps=document.getElementById('MB').value;
    if(kbps!=0){
    let cGB=(kbps*0.0009765625);
    document.getElementById('GB').value=cGB;
}
}
