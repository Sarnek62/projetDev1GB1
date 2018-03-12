var statelife ;
var pvHero=100;


function getlife(degat){
    
    if (pvHero<=degat){
        return 0.0
    }else{
        var difDeg=pvHero-degat;
        return difDeg/pvHero  
    }

}

function state (degat){ 
    if(getlife(degat)>=0.8){
        statelife="goodForme"
    }
    if(getlife(degat)>=0.6 && getlife(degat)<0.8 ){
        statelife="indemne"
    }
    if(getlife(degat)>=0.4 && getlife(degat)<0.6 ){
        statelife="blessé"
    }
    if(getlife(degat)>=0.20 && getlife(degat)<0.40 ){
        statelife="grievement Blessé"
    }
    if(getlife(degat)<0.20 && getlife(degat)>0 ){
        statelife="Zone de vie critique"
    }
    if(getlife(degat)==0 ){
        statelife="Mort"
    }
    return (console.log(statelife))
}

