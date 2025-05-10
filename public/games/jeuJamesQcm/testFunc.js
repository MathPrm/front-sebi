//function pour afficher 3 nombre au hasard et la bonne reponse dans les bouton

let score = 1;
let res = 1222;

let array=[];
const max = 3;


function displayAnswer(){
    if(score === 1){
        while(array.length<max){
            alea = Math.floor(Math.random()*21); //retourne un chiffre entre 0 et 20 inclus
            array.push(alea);
        }
        array.push(res);
        return array;        
    }else if(score === 2){
        while(array.length<max){
            alea = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
            array.push(alea);
        }
        array.push(res);
        return array;  
    }else if(score === max){
        while(array.length<3){
            alea = Math.floor(Math.random()*101); //retourne un chiffre entre 0 et 100 inclus
            array.push(alea);
        }
        array.push(res);
        return array;  
    }else{
        while(array.length<max){
            alea = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
            array.push(alea);
        }
        array.push(res);
        return array;  
    }
}

function melange(array2){
    for(let i = array.length - 1; i >= 0; i--){
        let j = Math.floor(Math.random()*i+1);
        let temp = array2[i];
        array2[i] = array2[j];
        array2[j] = temp;
    }
    return array2;
}

let array2=[1,4,2,3];

let tab = displayAnswer();
let tab2 = melange(tab);

console.log(tab2);



