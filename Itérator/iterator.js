//Fonction qui nous permet de savoir si il y a un element juste après celui ciblé par l'index.
function hasNext(array){
    if( index >= array.length ){
        checknext = false;
    }else{
         
        checknext = true;      
    } 
};
// retour true ou false--> pqui va etre utilister dans la fonction next().

//Fonction qui nous permet de retourner la valeur en cour ou la fin de l'iteration.
function next(array) { 
    if(checknext===true){
        return (console.log(index+"="+array[index]))
    }else{
        return (console.log("fin de l'iteration"));
    }   
};  

//Fonction iteration
function getIterator(array){
    index =0;
    checknext=true
    while(checknext ===true){
        hasNext(array);
        next(array);
        index+=1;
    }
};


var names = ["Robert" ,"John" ,"Julie" ,"Lora"]
//tableau a itérer. 

getIterator(names);
//appel de la fonction iteration avec comme argument le tableau a itérer

//nous avont utiliser la variable checknext pour pallier un probleme de fonctions pures et impures.
