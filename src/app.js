import { createServer } from 'node:http';

export function createApp() {
  return createServer((request, response) => {
    const isHealthCheck = request.method === 'GET' && request.url === '/health';

    response.statusCode = isHealthCheck ? 200 : 404;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(isHealthCheck ? { status: 'ok' } : { error: 'not found' }));
  });
}
