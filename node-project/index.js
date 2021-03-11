const http = require('http');

const server = http.createServer((req, res) =>{//creates server for us
	console.log(req.url, req.method); //req = request being made 
	//set header content type
	res.setHeader('Content-Type', 'text/plain'); //setting the header to content type being sent back to the browser 
	
	res.write('hello'); //the content we want to send to the browser
	res.end(); //ending the response which send it to the browser
});  

server.listen(3000, 'localhost', () =>{ //this function listens to the url on the local host on port 3000
	console.log('listening for requests on port 3000');
});

