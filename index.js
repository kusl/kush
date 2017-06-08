var extraInformation;

function helloWorld() {
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