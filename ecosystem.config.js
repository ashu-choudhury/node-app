module.exports = {
  apps: [
    {
      name: 'node-app',
      script: 'server.js',
      watch: true,
      ignore_watch: ['node_modules', 'logs'],
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
