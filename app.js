// A tools for blahdns.com debug ip or host
// author: ookangzheng
// License: Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
// IP location lookup API: http://ip-api.com/docs/api:json

var dns = require('dns')
var net = require('net')
const fetch = require("node-fetch")
var myArgs = process.argv.slice(2)
var input = myArgs[0]
var domainReg = /([a-z])([a-z0-9]+\.)*[a-z0-9]+\.[a-z.]+/g
//console.log(input)

const hostLookup = (host) => {
    dns.lookup(host, function (err, address, family) {
    console.log(address);
})
}

const ipLocation = (ip) => {
    if(net.isIP(ip)) { 
        let url = `http://ip-api.com/json/${ip}`
        fetch(url).then(data => data.json())
        .then(data => console.log(`Country: ${data.country}, ${data.countryCode}, ISP ${data.isp}`))
        .catch(error => console.error('Error:', error));
    }
}

if (domainReg.test(input)) {
    hostLookup(input)
    //hostLookup(input.slice(2))
} else {
    ipLocation(input)
}