const express = require('express');
const app = express();
var db = require('./database/index');

if (process.env.NODE_ENV === 'production') {
    // have express serve production assets that exist within the client build file
    app.use(express.static('client/build'));

    // have expess serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT);

app.get('/api/leagues', db.getAllLeagues);
app.get('/api/leagues/:id', db.getSingleLeague);
app.post('/api/leagues', db.createLeague);
app.put('/api/leagues/:id', db.updateLeague);
app.delete('/api/leagues/:id', db.removeLeague);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.code || 500).json({
            status: 'error',
            message: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message
    });
});
