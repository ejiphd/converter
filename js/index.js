// mass
function getMass(){
    let getval = document.getElementById('get').value;
    let setval = document.getElementById('set').value;

    let inp_1 = document.getElementById('input1').value;
    let inp_2 = document.getElementById('input2');

    if(getval == setval){
        alert('Same Answer');
    } else if(getval == "grams" && setval == "kilograms"){ //grams 
        let result1 = (inp_1 / 1000);
        inp_2.value = result1;
    }else if(getval == "grams" && setval == "milligrams"){
        let result2 = (inp_1 * 1000);
        inp_2.value = result2;
    } else if(getval == "kilograms" && setval == "grams"){ //kilograms
        let result3 = (inp_1 * 1000);
        inp_2.value = result3;
    } else if(getval == "kilograms" && setval == "milligrams"){
        let result4 = (inp_1 * 1e+6);
        inp_2.value = result4;
    } else if(getval == "milligrams" && setval == "grams"){ //milligrams
        let result5 = (inp_1 / 1000);
        inp_2.value = result5;
    } else if(getval == "milligrams" && setval == "kilograms"){
        let result5 = (inp_1 / 1e+6);
        inp_2.value = result5;
    }
}
// length
function getLength(){
    let getval = document.getElementById('get1').value;
    let setval = document.getElementById('set1').value;

    let inp_1 = document.getElementById('input_len1').value;
    let inp_2 = document.getElementById('input_len2');

    if(getval == setval){
        alert('Same Answer');
    } else if(getval == "meter" && setval == "kilometer"){ //meter
        let result1 = (inp_1 / 1000);
        inp_2.value = result1; 
    } else if(getval == "meter" && setval == "centimeter"){
        let result2 = (inp_1 / 100);
        inp_2.value = result2; 
    } else if(getval == "kilometer" && setval == "meter"){ //kilometer
        let result3 = (inp_1 * 1000);
        inp_2.value = result3; 
    } else if(getval == "kilometer" && setval == "centimeter"){
        let result4 = (inp_1 * 100000);
        inp_2.value = result4; 
    } else if(getval == "centimeter" && setval == "meter"){ //centimeter
        let result5 = (inp_1 / 100);
        inp_2.value = result5; 
    } else if(getval == "centimeter" && setval == "kilometer"){
        let result6 = (inp_1 / 100000);
        inp_2.value = result6; 
    } 
}
// frequency
function getFrequency(){
    let getval = document.getElementById('get2').value;
    let setval = document.getElementById('set2').value;

    let inp_1 = document.getElementById('input_freq1').value;
    let inp_2 = document.getElementById('input_freq2');

    if(getval == setval){
        alert('Same Answer');
    } else if(getval == "hertz" && setval == "kilohertz"){ //hertz
        let result1 = (inp_1 / 1000);
        inp_2.value = result1; 
    } else if(getval == "hertz" && setval == "megahertz"){
        let result2 = (inp_1 / 1e+6);
        inp_2.value = result2; 
    } else if(getval == "hertz" && setval == "gigahertz"){
        let result3 = (inp_1 / 1e+9);
        inp_2.value = result3; 
    } else if(getval == "kilohertz" && setval == "hertz"){ //kilohertz
        let result4 = (inp_1 * 1000);
        inp_2.value = result4; 
    } else if(getval == "kilohertz" && setval == "megahertz"){
        let result5 = (inp_1 / 1000);
        inp_2.value = result5; 
    } else if(getval == "kilohertz" && setval == "gigahertz"){
        let result6 = (inp_1 / 1e+6);
        inp_2.value = result6; 
    } else if(getval == "megahertz" && setval == "hertz"){ //megahertz
        let result7 = (inp_1 * 1e+6);
        inp_2.value = result7; 
    } else if(getval == "megahertz" && setval == "kilohertz"){
        let result8 = (inp_1 * 1000);
        inp_2.value = result8; 
    } else if(getval == "megahertz" && setval == "gigahertz"){
        let result9 = (inp_1 / 1000);
        inp_2.value = result9; 
    } else if(getval == "gigahertz" && setval == "hertz"){ //gigahertz
        let result10 = (inp_1 * 1e+9);
        inp_2.value = result10; 
    } else if(getval == "gigahertz" && setval == "kilohertz"){ 
        let result11 = (inp_1 * 1e+6);
        inp_2.value = result11; 
    } else if(getval == "gigahertz" && setval == "megahertz"){ 
        let result12 = (inp_1 * 1000);
        inp_2.value = result12; 
    } 
}

// active button
const active1 = document.querySelector('#btn1');
const active2 = document.querySelector('#btn2');
const active3 = document.querySelector('#btn3');

active1.addEventListener('click', function(){
    active1.classList.add('clicked');
    active3.classList.remove('clicked');
    active2.classList.remove('clicked');
});

active2.addEventListener('click', function(){
    active1.classList.remove('clicked');
    active3.classList.remove('clicked');
    active2.classList.add('clicked');
});
active3.addEventListener('click', function(){
    active1.classList.remove('clicked');
    active2.classList.remove('clicked');
    active3.classList.add('clicked');
});