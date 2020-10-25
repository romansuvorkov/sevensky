export default function tableCreator(name, number) {
    const outputObj = {};
    for (let i=1; i<=number; i+=1) {
        const prefix = name + i;
        // console.log(prefix);
        outputObj[prefix] = {
            occupied: false,
            ordered: false,
            name: prefix,
            type: name,
            orderer: '',
            spotQuantity: 2
        } 
    }

    return outputObj;
}