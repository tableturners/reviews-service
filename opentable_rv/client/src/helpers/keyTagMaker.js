import React from "react"


const keyTag = ['calculate','capacitor','bandwidth','bluetooth','synthesize','transmit','monitor','auxiliary',
'synthesize',"redundant",'matrix','virtual','SCSI','circuit','application','protocol','open-source','SDD','navigating','microchip']


// const randomkeyTagMaker = function(){
//     return keyTag[Math.floor(Math.random() * keyTag.length)];
// }

const keyTagMaker = function(){
    let keyTagData = [];
    for(var i = 0; i < Math.floor(Math.random() * 6); i++){
        const currentRandomElement = keyTag[Math.floor(Math.random() * keyTag.length)];
        // if (!keyTagData.includes(currentRandomElement)) {
        //     keyTagData.push(currentRandomElement);
        // }
        
        keyTagData.push(currentRandomElement);
        console.log("everytime +++", keyTagData)
    }
    return keyTagData;
}



export default keyTagMaker

