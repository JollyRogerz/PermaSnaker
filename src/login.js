
function login(files) {
    const fr = new FileReader()
    fr.onload = function (ev) {
        try {
            const wallet = JSON.parse(ev.target.result);
            arweave.wallets.jwkToAddress(wallet).then((address) => {
                console.log(`Arweave wallet address: ${address}`)
            });

        } catch (err) {
            console.log('Error logging in: ', err);
        }
        console.log(address);

    };

    fr.readAsText(files[0]);
}