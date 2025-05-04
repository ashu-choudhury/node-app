module.exports = {
  apps: [
    {
      name: 'node-app',            // Name of the application
      script: './server.js',     // Path to the main script
      instances: 'max',           // Set to 'max' to run the app with as many instances as there are CPU cores (can be a number as well)
      exec_mode: 'cluster',      // Use 'cluster' for multi-core systems to maximize performance
      watch: false,               // Enable watching for file changes (optional)
      autorestart: true,         // Automatically restart the app if it crashes
      max_memory_restart: '1G',  // Restart if memory usage exceeds 1GB
      env: {
        NODE_ENV: 'development', // Environment variables for the development environment
        PORT: 3000               // Port for the app
      },
      env_production: {
        NODE_ENV: 'production',  // Environment variables for the production environment
        PORT: 80                 // Port for the app in production
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',  // Log date format
      error_file: './logs/app-error.log',      // Path to error log
      out_file: './logs/app-out.log',          // Path to output log
      pid_file: './pids/app.pid',              // Path to store the pid file
    }
  ]
};
