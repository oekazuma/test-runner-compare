const { promisify } = require('util');
const { execFile } = require('child_process');

const spawn = promisify(execFile);

const runners = {
	jest: [require.resolve('./node_modules/jest/bin/jest.js'), './jest', '--env=node'],
	ava: [require.resolve('./node_modules/ava/cli.js'), './ava/**'],
	jasmine: [require.resolve('./node_modules/jasmine/bin/jasmine.js'), './jasmine'],
	mocha: [require.resolve('./node_modules/mocha/bin/mocha'), './mocha'],
	tape: [require.resolve('./node_modules/tape/bin/tape'), './tape'],
	uvu: [require.resolve('./node_modules/uvu/bin.js'), './uvu'],
};

function format(arr) {
	let num = Math.round(arr[1] / 1e6);
	if (arr[0] > 0) return (arr[0] + num / 1e3).toFixed(2) + 's';
	return `${num}ms`;
}

async function run(name, args) {
	let timer = process.hrtime();
	let pid = await spawn('node', args, { cwd: __dirname });
	let delta = process.hrtime(timer);

	console.log('~> "%s" %s', name, format(delta));
}

(async function () {
	for (let name of Object.keys(runners)) {
		await run(name, runners[name]);
	}
})().catch(err => {
	console.error('Oops~!', err);
	process.exit(1);
});