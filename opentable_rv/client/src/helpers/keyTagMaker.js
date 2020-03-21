import React from "react"


const keyTag = ['calculate','capacitor','bandwidth','bluetooth','synthesize','transmit','monitor','auxiliary',
'synthesize',"redundant",'matrix','virtual','SCSI','circuit','application','protocol','source','SDD','navigating','microchip']


// const randomkeyTagMaker = function(){
//     return keyTag[Math.floor(Math.random() * keyTag.length)];
// }

const keyTagMaker = function(){
    const numberOfTags = Math.floor(Math.random() * 6 + 1);
    let keyTagData = []; 
    for(var i = 0; i < numberOfTags; i++){
        const currentRandomElement = keyTag[Math.floor(Math.random() * keyTag.length)];
        if (!keyTagData.includes(currentRandomElement)) {
            keyTagData.push(currentRandomElement);
        }
        console.log("everytime +++", keyTagData)
    }
    return keyTagData;
}



export default keyTagMaker

