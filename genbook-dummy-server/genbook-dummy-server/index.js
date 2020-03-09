
const todayTasks = require('./todayTasks');
const projects = require('./projects');
const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
     // res.header("Access-Control-Allow-Origin", "*");
    if (req.method === 'OPTIONS') {
        return res.end();
    } else {
        next();
    }
});


app.get('/', (req, res) => res.send(customerInfo.data));


app.all('/getTasks/today', function (req, res, next) {
    setTimeout(() => {
        res.send(todayTasks.data);
        // res.status(401);
        // res.send({"responseStatus":"error","errorCode":"Session Expired."}    );
        next();
    }, 1500);

});

app.all('/projects', function (req, res, next) {
    // setTimeout(() => {
        res.send(projects.data);
        // res.status(401);
        // res.send({"responseStatus":"error","errorCode":"Session Expired."}    );
        next();
    // }, 1500);

});

app.all('/getServerDate', function(req, res, next){

    res.send(
        {
            "serverDate":"07/03/2018",
            "responseStatus":"success",
            "cmd":"getServerDate"
        }
    );
    // res.status(401);
    // res.send({"responseStatus":"error","errorCode":"Session error.","cmd":"getServerDate"}    );
    next();
});



app.listen(process.env.PORT || 3001,  () => console.log('Example app listening on port ' + (process.env.PORT || 3001) + '!'));