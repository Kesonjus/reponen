var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);
router.get('/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);
router.post('/xd',
	function(request, response){
		response.send('lol ');
	}
	);
module.exports = router;
