const teks = ['cherly', 'cece', 'cheche'];
let count = 0;
let teksIndex = 0;
let teksCurrent = '';
let kata ='';

(function nulis(){

    if(count== teks.length){
        count=0;
    }

    teksCurrent = teks[count];

    kata = teksCurrent.slice(0, ++teksIndex);
    document.querySelector('.efek').textContent = kata;

    if(kata.length == teksCurrent.length){
        count++;
        teksIndex = 0;
    }
    setTimeout(nulis, 500);
})();