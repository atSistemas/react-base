const host = (typeof window !== 'undefined') ? 'client' : 'server'

export const context = {
  context: host,
  client: host === 'client',
  server: host === 'server'
}
