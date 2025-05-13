import ansicolors from 'ansi-colors';
const { green, blue, magenta, gray, yellow, red } = ansicolors;

class LoggerUtility {
	log(message) {
		console.log(green('- - - - - - >>'), message);
	}
	info(message) {
		console.log(blue('- - - - - - >>'), message);
	}
	special(message) {
		console.log(magenta('- - - - - - >>'), message);
	}
	idle(message) {
		console.log(gray('- - - - - - >>'), message);
	}
	warn(message) {
		console.log(yellow('- - - - - - >>'), message);
	}
	error(message, error) {
		console.log(red('- - - - - - >>'), message);
		if (error) console.log(error);
	}
}

export const Logger = new LoggerUtility();
