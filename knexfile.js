
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/moon_cycle'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
  
}
