//express.js
it is an npm package
it is a framework means it gives a flow
it manages everything from receiving a request to giving the response.

//setting up a basic express appln:
  npm i express
  then copy paste the code from npm and then run it, the server starts running in the local host.
    now we can create routes instead of this. 
//what is route?
      anything which is after the domain name after the slash is called the route. 
      like for examplle anything after youtube.com/ajbjkdfbisidfnun and after the / is called route in
      any website url we see.
  app.get(route, requestHandler) -- requestHandler is a middleware and a function which takes req and res
  =>means app.get("/", function(req, res){
              res.send('hii champion');
                       })
             app.listen(3000)
then run this, and open localhost 3000 then u can see hii champion.

  if app.get('/profile', function(req, res){
        res.send("hi welcome to profile");})
then run, in localhost:3000/profile you can see hi welcome to profile msg
        //nodemon
        nodemon is a package. npm nodemon -g means we are installing it globally dobara krna nhi pdega.

//MIDDLEWARE
1. whenever a request is sent, it travels in the internet and reaches the server before reaching the routes
then response is sent back. but if u want to perform anything that is known as middleware.
2. or, jb bhi server req accept krta hai, waha se route ke beech pachuchne tk uss req ko rokh te ho aur kuch perform krte ho,
to ye element middleware hai (in most cases)   

(1) APPLICATION LEVEL MIDDLWARE:
app.use(function(req,res, next){   //app.use is smthng tht will run before running any get req or any other req
  console.log("middleware chal gya")
  next(); } //next means after running it is now frwrding the req to the route.

(2) ROUTER-LEVEL/ROUTER-SPECIFIC MIDDLEWARE: when you only want the middleware to run for specific routes
  (like protecting an admin page or validating data for a login route).


//ERROR HANDLING:
there is a spcl route in express.js which is meant for error handling.
  so after app.get("/profile", function(req, res, next){ //just add next so that our next middleware works 
             return next( new Error('something is wrong')); });
           app.use((err,req,res,next) => {
             console.error(err.stack)             //this was copied from documentation. just search express js error handling
             res.status(500).send("something broke") })  //frontend pe ye msg dikhega

          app.listen(3000);

                  
  
