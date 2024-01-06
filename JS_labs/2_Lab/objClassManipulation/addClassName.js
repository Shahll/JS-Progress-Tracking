function addClassName(obj, cls) {
    let nameText = obj.name
    if(!nameText.includes(cls))
        obj.name += " " + cls
    return obj.name;
}

function removeClassName(obj, cls) {
    let nameText = obj.name
    nameText = nameText.split(" ");
    for(let i = 0; i < nameText.length; i++){
        if(nameText[i] == cls)
            nameText.splice(i, 1);
    }
    obj.name = nameText.join(" ")
    return obj.name;
}

obj = {
    name : "open menu"
}
addClassName(obj, 'new');   // obj.className='open menu new'
addClassName(obj, 'open');  // без змін (клас вже існує)
addClassName(obj, 'me');    // obj.className='open menu new me'
console.log(obj)

removeClassName(obj, 'menu');   // obj.className='menu'
removeClassName(obj, 'blabla'); // без змін (такого класу немає)
console.log(obj)