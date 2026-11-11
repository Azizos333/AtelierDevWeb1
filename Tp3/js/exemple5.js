const notes=[9,14,7,11,10,16,5];

function compterAdmin(notes){
    let nb=0;
    for(const notee of notes){
        if (notee>=10){
            nb=nb+1
        }

    }
    return nb

}
console.log(compterAdmin(notes));
function maximum(notes){
    let maxii=notes[0]
    for(const notee of notes){
        if(notee>maxii){
            maxii=notee
        }
    }
    return maxii
    

}
console.log(maximum(notes));
