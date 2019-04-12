const testService = require('../services/testService');

module.exports = (router) => {
    router.post('/parsed-segments', (req, res, next) => {
        testService.
            upload(req, res, function (err) {
                if (err) {
                    next(err);
                } else {
                    testService.getNumbers(req).then(result => {
                        res.status(200).send(result);
                    })
                        .catch(err => {
                            next(err);
                        });

                }
            });
    });

    router.get('/macro-polo', (req, res, next) => {
        let count = 0, result = '';
        for (let i = 1; i <= 1000000; i++) {
            if (i % 7 === 0 && i % 4 === 0) {
                count++;
                result += 'macropolo' + ','
            } else if (i % 7 === 0) {
                count++;
                result += 'polo' + ','
            } else if (i % 4 === 0) {
                count++;
                result += 'macro' + ','
            } else {
                count++;
                result += i + ','
            }

            if (count === 1000) {
                result += '\n';
                count = 0;
            }
        }
        res.status(200).send(result);
    });
};
