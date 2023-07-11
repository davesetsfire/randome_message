let listPerson = ["You", 'Your'];
let subject = ["day", "life", "relationship"];
let adjective = ["happy", "boring", "cool", "funny", "lucky", 'nice', 'even nicer'];

function createMessage() {
    let randomeNumberOne = Math.floor(Math.random()*2);
    if (randomeNumberOne === 0) {
        return listPerson[0] + " are " + adjective[Math.floor(Math.random()*adjective.length)];
    } else {
        return listPerson[1] + ' ' + subject[Math.floor(Math.random())*subject.length] + ' will be ' + adjective[Math.floor(Math.random()*adjective.length)]
    }
    
}
console.log(createMessage());









