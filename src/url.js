
const url = require('url')

const urlData = ("https://www.wix.com/website/templates")

console.log(url.parse(urlData));

const urlCreate = {
    protocol: 'https',
    host: 'www.skyNet.com',
    query: {
        name: 'skyNet',
        age: 20
    },
    path: '/consultancy'
}

console.log(url.format(urlCreate));

const urlPath = ("https://www.skyNet.com?name=skyNet&age=20")
const urlPath1 = ("../85")

console.log(url.resolve(urlPath,urlPath1));

