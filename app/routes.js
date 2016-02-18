var Tasks = require('./models/tasks');

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.sendfile('./public/index.html');
    });

    app.post('/api/tasks', function(req, res){
        Tasks.create({
            text:req.body.text,
            done:false
        }, function(err, result){
            if (err) res.send(err);
            res.json(result)
        })
    });

    app.get('/api/tasks', function(req, res){
        Tasks.find(function(err, tasks){
            if (err) res.send(err);
            res.json(tasks);
        })

    });
    app.delete('/api/tasks/:task_id', function(req, res){
        Tasks.findOneAndRemove({
            _id: req.params.task_id
        }, function(err, result){
            if (err) res.send(err);
            res.json(result);
        })
    })

};
