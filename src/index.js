require('babel-polyfill');

import normalize from 'normalize-url';
import got from 'got';
import Ora from 'ora';
import chalk from 'chalk';

import isMonth from '@splash-cli/is-month';
import printBlock from '@splash-cli/print-block';
import splashError from '@splash-cli/splash-error';

const jparse = JSON.parse;
const spinner = new Ora({
	text: `Connecting to UNSPLASH`,
	color: 'yellow',
	spinner: isMonth('december') ? 'christmas' : 'earth'
});

const splash = async (url, {
	quiet
}) => {
	url = normalize(url);

	if (quiet) {
		spinner.start = () => {};
		spinner.stop = () => {};
		spinner.fail = () => {};
		spinner.succeed = () => {};
	}

	spinner.start();

	try {
		const {
			body,
			statusCode,
			statusMessage
		} = await got(url);
		const photo = jparse(body);

		spinner.text = 'Connected';
		spinner.succeed();

		return {
			data: photo,
			status: {
				statusCode,
				statusMessage
			}
		};
	} catch (err) {
		spinner.fail();
		splashError(err);
		return err;
	}
};

module.exports = splash;
