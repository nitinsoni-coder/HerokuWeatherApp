const express = require('express');
const app = express(); //here we call express function. 
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 9000; //here we create environment port so that we can use this wesite when we host it 
//And here port variable check that the first condition we given "9000" that the website is running on localhost on this port or not if it is not running on port 9000 then it will run that website on "process.enc.PORT".

//public static path
const staticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//to set template engine
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

//to access static web page 
app.use(express.static(staticpath));

//Routing
// app.get(route, callback) //here we use get() method to get data and inside that we pass two parameter 1.route (mtlb kha pr add krna h uska url) 2. callback function

app.get("", (req, res)=> {
    res.render("index")
})

app.get("/about", (req, res)=> {
    res.render("about")
})

app.get("/weather", (req, res)=> {
    res.render("weather")
})

app.get("*", (req,res) => {
    res.render("404", {
        errorMsg: 'Opps! page Not Found'
    })
})

//server listen
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
