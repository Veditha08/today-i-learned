
//WHAT IS NODE
environment to run js outside of the browser
built on chrome's v8 engine
not a prg lang, not a technology, not a framework. its a js runtime environment

//what is npm?
its like playstore or appstore where u can upload ur packages and u can use theirs by borrowing

//NODE FEATURES
no global window objects
_dirname: gives the path to curr directory
_filename: gives the file name
process: info abt the env where the prog is being executed
module: info about the current module
require: func to use modules(common js)

//WORKING WITH NODE AND NPM:
npm init -y or just npm init (keep pressing enter after it to set default values): used to create package.json
package.json: basically keeps the account of the whole project

to run a node code use //node filename// 

//GLOBAL SHARING USING MODULE AND REQUIRE
modules.export = {bla bla} can be used to declare the variables that we want to share globally.. like to all the files
in order to access them from other files, we need to use-   require{./file_name_where_we_want_to_accessthemodule}


//file system operations read from official node js doc

//http module: reqd for sending or receiving anything
const http = require('http);
const server = http.createServer(function(req,res){
res.end("helloo");
                  })
server.listen(3000);                                                               
the above code will create a http server and it starts running. go to localhost:3000 u will get helloo
