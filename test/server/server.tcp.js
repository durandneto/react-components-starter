const fs = require('fs')
const path = require('path')
const net = require('net')

// const readFile = ((resolve, reject) => {
//     try {
//         fs.readFile(path.resolve(`${__dirname}/package.json`), 'utf8', (err , data) =>{
//             console.log('data is read')
//             if ( err ) {
//                 reject('data is null')
//             }
//             resolve(data)
//         })
//     } catch (error) {
//         reject(error)
//     }
// })

// function Node() {

//     // constructor(props) {
//     //     super(props)
//     //     this.pathname = null
//     // }

//     const readFile = pathname => {
//         this.pathname = pathname
//         return new Promise(execReadFile)
//     }

//     const execReadFile = ((resolve, reject) => {
//         try {
//             fs.readFile(path.resolve(this.pathname), 'utf8', (err , data) =>{
//                 console.log('data is read')
//                 if ( err ) {
//                     reject('data is null')
//                 }
//                 resolve(data)
//             })
//         } catch (error) {
//             reject(error)
//         }
//     })

//     const execFreateFile = ((resolve, reject) => {
//         console.log(this.newFilename, this.newFilePathname)
//         try {
//             fs.exists(this.newFilePathname, exists => {
//                 if ( exists ) {
//                     resolve('ok')
//                 } else {
//                     fs.mkdir(this.newFilePathname, {
//                             recursive: true
//                         }, (err, path) => {
//                             fs.writeFile(this.newFilePathname, '' ,(err, response) => {
//                                 if ( err ) {
//                                     reject(`error on write a file, ${err}`)
//                                 }
//                                 resolve('ok')
//                             })

//                         })
//                 }
//             })
//         } catch (error) {
//             reject(error)
//         }
//     })

//     const createDB = pathname => {
//         const path = pathname.split('/')
//         this.newFilename = path[path.length - 1]
//         delete path[path.length - 1]
//         this.newFilePathname = path.join('/')

//         return new Promise(execFreateFile)
//     }

//     return  {
//         readFile,
//         createDB
//     }
// }

// var n = new Node()

// // // n.readFile(`${__dirname}/README.md`)
// // n.readFile(`${__dirname}/package.json`)
// //     // .then( response => {
// //     //     console.log('parsin file')
// //     //     return JSON.parse(response)
// //     // })
// //     .then( jsonFile => {
// //         console.log('converted file', jsonFile)
// //         return jsonFile.split('\n')
// //     })
// //     .then( arrLines => {
// //         console.log('converted file', arrLines.length)
// //     })
// //     .catch( error => {
// //         console.log('error on read file', error)
// //     })
// //     .finally( response => {
// //         process.exit('process endded by promisse')
// //     })

// n.createDB(`${__dirname}/m/my-db.txt`)
//     .then(response => {
//         console.log(response)
//     })
//     .catch( error => {
//         console.log('catch on trying to create DB', error)
//     })


// TCP Server
let tcpServer = net.createServer((socket) => {
    console.log('New socket connected');

    const send = data => socket.write(JSON.stringify(data))

    const checkMessage = message => {
      switch ( true ) {
          case message.subject === 'create-table':
            console.log(message.data)
            send({subject: 'created-table'})
            break
        }
    }

    socket.on('data', data => {
      const allMessages = data.toString()
      allMessages.pop()
      for (const message of allMessages) {
        checkMessage(JSON.parse(message))
      }

    });



    socket.on('close', () => {
        console.log('Socket closed');
    })
});
      // Grab an arbitrary unused port.
    //   server.listen(() => {
    //     console.log('opened server on', server.address());
    //   });

    tcpServer.listen({
        host: 'localhost',
        port: 8012,
        ipv6Only: true
      }, () => {
        console.log('opened server on', tcpServer.address());
      });

