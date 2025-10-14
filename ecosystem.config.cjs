module.exports = {
  apps: [
    {
      name: "app_name",
      script: "npm",
      args: "run start",

      max_memory_restart: "1000M",
      exp_backoff_restart_delay: 10000,

      max_restarts: 3,
      min_uptime: 60000,
    },
  ],
};
