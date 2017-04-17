export default ['APP_PORT', 'DB_HOST', 'DB_USER', 'DB_PASS', 'DB_DATABASE']
.reduce((acc, val) => {
  // TODO: fix this damn thing can't set blank pass. ty, Bash
  acc[val] = process.env[val]
  return acc
}, {})
