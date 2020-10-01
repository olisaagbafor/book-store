const app = require('./server');
const chalk = require('chalk');

app.listen(3000, () => {
    console.log(`App Listening on port ${chalk.green('3000')}`);
});