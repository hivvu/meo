var TelnetClient = require('./telnet');
var tc = new TelnetClient();

const controller = (req, res) => {
    var key = req.params.key;
    var conf = {
        "host": '192.168.1.64',
        "port": 8082,
        "username": '',
        "password": '',
        "enpassword": ''
    };

    tc.connect(conf, function(err) {
        if (err) { console.error('Error: '+err) }

        tc.read();
        tc.write('key=' + key + '\n');
        tc.close();
    });

    res.status(200).send({
        "message": "Key pressed"
    })
}

module.exports = controller;
