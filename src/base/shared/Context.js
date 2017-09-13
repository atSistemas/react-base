const host = (typeof window !== 'undefined') ? 'client' : 'server';

export const context = {
  context :host,
  client : host === 'client' ? true : false,
  server : host === 'server' ? true : false   
};