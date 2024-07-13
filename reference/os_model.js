const os = require('os');
const { CLIENT_RENEG_LIMIT } = require('tls');

//Platform
console.log(os.platform());

//CPU Arch
console.log(os.arch());

//CPU info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());


//Home dir
console.log((os.homedir()));


//uptime
console.log(os.uptime());