function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`Hello ${name}!`);
            resolve(`Hello ${name}!`);
        });
    });
}

greet('naveen').then((greeting) => {
    console.log(greeting);
})