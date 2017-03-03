var SubdivModel = require('./Subdivisions_model');
var express = require('express')
        , router = express.Router();

router.use(function (req, res, next) {
    console.log('Something is happening.');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

router.get('/', function (req, res) {
    res.json({message: 'hello! welcome to our api!'});
});

router.get('/Subdivision', function (req, res) {
    var model = SubdivModel.modelSubdiv;
    model.readAll(req, res);
});

router.get('/Subdivision/:Subdivision_id', function (req, res) {
    var model = SubdivModel.modelSubdiv;
    var id = req.params.Subdivision_id;
    model.select(id, res);
});

router.post('/Subdivision', function (req, res) {
    var model = SubdivModel.modelSubdiv;
    var id = req.body.id;
    var name = req.body.name;
    model.add([id, name], res);
});

router.delete('/Subdivision/:Subdivision_id', function (req, res) {
    var model = SubdivModel.modelSubdiv;
    var id = req.params.Subdivision_id;
    model.delete([id], res);
});

router.put('/Subdivision/:Subdivision_id', function (req, res) {
    var model = SubdivModel.modelSubdiv;
    var id = req.params.Subdivision_id;
    var name = req.body.name;
    model.update([id, name], res);
});

module.exports = router;