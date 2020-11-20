var user = 'Quoc';
function displayGreet(name, sal='Hello') {
    console.log(`${sal}, ${name}`);
}
displayGreet(user);

function displayDone() {
    console.log('3 sec elapsed.');
}

setTimeout(displayDone, 3000);

setTimeout(3000, function(){
    console.log('3 sec elapsed.');
});

setTimeout(3000, () => {
    console.log('3 sec elapsed.');
});