var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});
router.get('/cats', function (req, res) {

    allVids = [
        'https://www.youtube.com/watch?v=tntOCGkgt98', '    https://www.youtube.com/watch?v=njSyHmcEdkw',
        '    https://www.youtube.com/watch?v=-hIugp7p5O0', '    https://www.youtube.com/watch?v=G8KpPw303PY',
        '    https://www.youtube.com/watch?v=htOroIbxiFY', '    https://www.youtube.com/watch?v=CE-JlvmnRtY',
        '    https://www.youtube.com/watch?v=VJHnPUFffCU', '    https://www.youtube.com/watch?v=9nZMHBDw8os',
        '    https://www.youtube.com/watch?v=25OUFtdno8U', '    https://www.youtube.com/watch?v=cNycdfFEgBc',
        '    https://www.youtube.com/watch?v=95ImXirddgU', '    https://www.youtube.com/watch?v=mW3S0u8bj58',
        '    https://www.youtube.com/watch?v=MG8KADiRbOU', '    https://www.youtube.com/watch?v=FAiKuOL8Os8',
        '    https://www.youtube.com/watch?v=b8kPufW2yYE', '    https://www.youtube.com/watch?v=7kignj0hcdg',
        '    https://www.youtube.com/watch?v=ryStD65KT9k', '    https://www.youtube.com/watch?v=WlRxNSRA7Rg',
        '    https://www.youtube.com/watch?v=Y6wGlaPXYFk', '    https://www.youtube.com/watch?v=MuN1tUWqV4s',
        '    https://www.youtube.com/watch?v=ekK7peRxKGc', '    https://www.youtube.com/watch?v=tdHIhAFvEa0',
        '    https://www.youtube.com/watch?v=xz-aX0zILc0', '    https://www.youtube.com/watch?v=lsnVO2RT8Nk',
        '        https: //www.youtube.com/watch?v=MVh-S4bfPZI','https://www.youtube.com/watch?v=F_JqkY2Pb2o'
    ];
    rand = allVids[Math.floor(Math.random() * allVids.length)];
    rand = rand.replace("https://www.youtube.com/watch?v=", '').replace(' ','').trim();
    res.send(rand);
});

module.exports = router;