
var Basemodel = function () {
    this.pg = require('pg');
    this.connectionString = ("pg://postgres:veganpower@localhost:5432/TestProject");
    this.getRecords = "";
    this.addRecords = "";
    this.delRecords = "";
    this.updRecords = "";
    this.selRecords = "";
    this.fullClear = "";
};

Basemodel.prototype.reqcomplete = function (res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Successfully");
};

Basemodel.prototype.readAll = function (req, res) {

    var client = new this.pg.Client(this.connectionString);
    var results = [];

    var query = client.query(this.getRecords, function (err) {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("Server Error");
            return;
        }
    });

    client.connect(function (err) {
        if (err)
            throw err;

        query.on('row', function (row) {
            results.push(row);
        });

        query.on("end", function () {
            res.json(results);
            client.end(function (err) {
                if (err)
                    throw err;
            });
        });
    });
};

Basemodel.prototype.add = function (data, res) {
    var client = new this.pg.Client(this.connectionString);

    var addRecords = this.addRecords;
    var reqcomplete = this.reqcomplete;

    client.connect(function (err) {
        if (err)
            throw err;

        client.query(addRecords, data, function (err) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Server Error");
                return;
            }

            reqcomplete(res);

            client.end(function (err) {
                if (err)
                    throw err;
            });
        });
    });
};

Basemodel.prototype.update = function (data, res, callback) {
    var client = new this.pg.Client(this.connectionString);

    var updRecords = this.updRecords;
    var reqcomplete = this.reqcomplete;


    console.log(data);
    client.connect(function (err) {
        if (err)
            throw err;

        client.query(updRecords, data, function (err) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Server Error");
                return;
            }

            reqcomplete(res);

            client.end(function (err) {
                if (err)
                    throw err;
            });
        });
    });
    if (typeof callback === "function") {
        callback(data);
    }
};

Basemodel.prototype.delete = function (id, res) {
    var client = new this.pg.Client(this.connectionString);
 
    var delRecords = this.delRecords;
    var reqcomplete = this.reqcomplete;
    
    client.connect(function (err) {
        if (err)
            throw err;

        client.query(delRecords, id, function (err) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Server Error");
                return;
            }

            reqcomplete(res);

            client.end(function (err) {
                if (err)
                    throw err;
            });
        });
    });
};

Basemodel.prototype.select = function (data, res) {
    var client = new this.pg.Client(this.connectionString);

    var results = [];

    var query = client.query(this.selRecords, data, function (err) {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("Server Error");
            return;
        }
    });

    client.connect(function (err) {
        if (err)
            throw err;

        query.on('row', function (row) {
            results.push(row);
        });

        query.on("end", function () {
            res.json(results);
            client.end(function (err) {
                if (err)
                    throw err;
            });
        });
    });
};

Basemodel.prototype.fullclear = function (res) {
    var client = new this.pg.Client(this.connectionString);

    var fullClear = this.fullClear;
    var reqcomplete = this.reqcomplete;

    client.connect(function (err) {
        if (err)
            throw err;

        client.query(fullClear, function (err) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Server Error");
                return;
            }

            reqcomplete(res);

            client.end(function (err) {
                if (err)
                    throw err;
            });
        });
    });
};




exports.Basemodel = Basemodel;