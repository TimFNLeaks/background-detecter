const fs = require('fs');
const axios = require('axios').default;
const clock = require('date-events')();

async function updateTest() {
    clock.on('minute', async () => {
        const db = fs.readFileSync('db.json');
        const dbJson = JSON.parse(db);
        let res = await axios.get('https://fn-api.com/api/backgrounds');
        let lobby = res.data.data.lobby;
        if(dbJson.find(x => x.name === lobby.name)) return
        let newd = {
            name:  `Lobbybackground`, //You can also replace this with `${lobby.name}`
            image : lobby.image,
        }
        dbJson.push(newd);
        fs.writeFileSync('lb.json', JSON.stringify(dbJson, null, 2));
        console.log(newd);
    })
        clock.on('minute', async () => {
            const db = fs.readFileSync('db.json');
            const dbJson = JSON.parse(db);
            let res = await axios.get('https://fn-api.com/api/backgrounds');
            let vault = res.data.data.vault;
            if(dbJson.find(x => x.name === vault.name)) return
            let newd = {
                name: `Shopbackground`, //You can also replace this with `${vault.name}`
                image : vault.image,
            }
            dbJson.push(newd);
            fs.writeFileSync('sb.json', JSON.stringify(dbJson, null, 2));
            console.log(newd);
    })
}

updateTest()