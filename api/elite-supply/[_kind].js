supplies = {
  "maximum" : 1337,
  "total" : 1336.999999,
  "circulating" : 250  
}

module.exports = (req, res) => {
    const {
        query: { _kind },
      } = req;

      res.send({
          supplies: supplies
      });
  };
