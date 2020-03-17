const extraInformation = `tomato`;

function helloWorld() {
    console.log(`hi`);
    return "hello, world";
};

function helloPerson(name) {
    return `Hello ${name}, ${extraInformation}`;
}

module.exports = function(info) {
    extraInformation = info;
    return {
        helloWorld: helloWorld,
        helloPerson: helloPerson
    };
};

console.log(helloPerson(`potato`));