const server = {
    url: 'https://polar-oasis-87155.herokuapp.com/'
}
// const server = window.location.href.includes('192') ? window.location.origin.split(':')[0] + ':5000' :(window.location.href.includes('localhost') ? 'http://localhost:5000/' : window.location.origin + '/')

const func = (to, post = false, body = null) => {
    if (post) {
        return fetch(server.url + to, {
            method: "POST", body: JSON.stringify(body),
            // headers: { 'Content-Type': 'application/json' }
        }).then(e => e.json()).catch(err => console.log(err));
    }
    return fetch(server.url + to).then(e => e.json()).catch(err => console.log(err));
}
export default func