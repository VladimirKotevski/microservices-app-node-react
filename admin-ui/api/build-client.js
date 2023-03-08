import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server

    const { host, ...headers } = req.headers;
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: {
        Host: 'ticketing.dev',
        subdomain: host,
        ...headers
      },
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseURL: 'https://ticketing.dev',
    });
  }
};
