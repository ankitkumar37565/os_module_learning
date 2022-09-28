//os module
//provides many function to interact with os and computer the program runs on
const os=require("os")
// console.log(os.arch())//x64
// console.log(os.cpus())
// console.log(os.freemem()/(1024*1024))// free mem in sys in mb
// console.log(os.homedir()) // home dir of current user
// console.log(os.hostname())//DESKTOP-JVFRKGF
// console.log(os.loadavg())//AVG TIME
// console.log(os.networkInterfaces().Ethernet[1].address) //network interfaces avail in sys
// console.log(os.platform())//WIN32
// console.log(os.release())//version
// console.log(os.tmpdir())//tmp dir
// console.log(os.totalmem()/(1024*1024))//total mem
// console.log(os.type())//type of os win linux mac
// console.log(os.uptime()/(60*60))//uptime of sys
// console.log(os.userInfo())//details of user
// console.log(os.networkInterfaces().lo)
console.log(os.networkInterfaces())
// let networkInterfaces=os.networkInterfaces().LoopbackPseudoInterface1
// console.log(JSON.stringify(os.networkInterfaces()).split("{")[2])
// let connectionType=Object.keys(obj)[0]
// let ip=obj.connectionType.address
// console.log(ip)
// console.log(JSON.stringify(os.networkInterfaces()).split("IPv4"))
console.log(os.networkInterfaces().lo?os.networkInterfaces().lo[1].address:os.networkInterfaces().Ethernet?os.networkInterfaces().Ethernet[1].address:"u")
