var through = require('through2');
var gutil = require('gulp-util');
var _ = require('lodash');

var _langs = {
	'cn': '感受宁静敞开心扉祥和',
	'id': 'LfidKA sidfq wernmz',
	'en': 'abcde fghijklmnop qrstuvwxyz',
	'ru': 'железнодоро жный'
};

var randGenerator = function (langType) {
	var langData = _langs[langType];
}

var repeat = function (langType, len) {
	var lang = {
		'cn': '感宁 敞开心 扉祥和',
		'id': 'LfidKA sidfq werdis',
		'en': 'abcde fghijklmnop qrstuvwxyz',
		'ru': 'железнодоро жный'
	};
	var a = [];
	while(a.length < len) {
		a.push(_.sample(lang[langType]));
	}
	return a.join('');
} 

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
				this.emit('error', new gutil.PluginError('test', 'streaming not supported'));
				return cb();
			}

		var content = file.contents.toString();
		var compiled = _.template(content);
		var bindedRepeat = _.bind(repeat, {}, options.langType || 'cn');
		var returnVal = compiled({'foo': bindedRepeat });
		file.contents = new Buffer(returnVal);

		this.push(file);

		cb();
	});
}
