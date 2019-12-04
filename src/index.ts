import { IncomingMessage } from 'http';

function getBaseURL(req?: IncomingMessage) {
  if (req) {
    const isDev =
      process.env.NODE_ENV === 'development' ||
      process.env.NOW_REGION === 'dev1';

    const protocol =
      req.headers['x-forwarded-proto'] || isDev ? 'http' : 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    return `${protocol}://${host}`;
  } else {
    return window.location.origin;
  }
}

export { getBaseURL };
