/* Promise é um objeto usado para processamento assíncrono. Uma Promise (de "promessa")
 representa um valor que pode estar disponível agora, no futuro ou nunca.*/

// Uma promise está em um destes estados:
// pending (pendente): Estado Inicial, que não foi realizada nem rejeitada.
// fulfilled (realizada): sucesso na operação.
// rejected (rejeitado): falha na operação.

let count = 0;
function testPromise() {
    const promiseCount = ++count;

    console.log("sync started");

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promiseCount % 2 == 0) {
                resolve(promiseCount);
            } else {
                reject(promiseCount);
            }
        }, 1000)
    }).then((value) => {
        console.log(`async finished ${value}`)
    }).catch(() => {
        console.error(`async error`)
    })

    console.log("sync finished")
};

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", testPromise)