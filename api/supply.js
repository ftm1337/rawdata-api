module.exports = (req, res) => {
    res.json({
      "msg": 'hello there, how are you!!',
      "max": 1337,
      "total": 1336.9999,
      "circulating": 250,
      "burned": 17.8501337,
      "reserved": 671,
      "locked": 384,
      "outstanding": 666,
      "burns": {
        "burn": 0.00001337,
        "zero": 17.85,
        "dead": 0
      },
      "locks": {
        "0xetl1": 384
      },
      "treasury": 0,
      "team": 0
      "timestamp" : "2022-10-01"
    });
  };
