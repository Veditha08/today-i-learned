
//WHAT IS NODE
environment to js outside of the browser
built on chrome's v8 engine

//NODE FEATURES
no global window objects
_dirname: gives the path to curr directory
_filename: gives the file name
process: info abt the env where the prog is being executed
module: info about the current module
require: func to use modules(common js)

//GLOBAL SHARING USING MODULE AND REQUIRE
modules.export = {bla bla} can be used to declare the variables that we want to share globally.. like to all the files
in order to access them from other files, we need to use require{./file_name_where_we_want_to_accessthemodule}
