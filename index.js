'use strict';

const path = require('path');
const fastify = require('fastify')({logger: true});

fastify.register(require('fastify-cors'), {
	origin: ['http://localhost:3000', 'http://localhost:5000']
});

fastify.register(require('fastify-static'), {
	root: path.join(__dirname, 'components'),
	prefix: '/components/'
});

fastify.get('/', async (req, res) => {
	return { hello: 'world' };
});


const start = async () => {
	try {
		await fastify.listen(3000);
		fastify.log.info(`Server Listening on ${fastify.server.address().port}`);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}

start();

