const pkg = require('./package.json')

module.exports = {
  apps: [
    {
      name: pkg.name,
      script: './dist/index.js',
      cwd: './apps/api',
      env_production: {
        NODE_ENV: 'production',
        PORT: 8099,
      },
    },
  ],
}
