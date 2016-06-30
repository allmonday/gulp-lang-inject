# gulp-lang-inject

One day, I wrote a html page in chinese, but it also need to be tested in Russian. I dont't like to change it again so I wrote a gulp plugin..
`gulp-lang-inject` to automatically generate text of different for me.

# Install
`npm install --save-dev gulp-lang-inject`

# Usage
```javascript
var gulp = require('gulp');
var lang = require('gulp-lang-inject');

gulp.task('default', function () {
	return gulp.src('src/**/*.html')
		.pipe(lang({langType: 'cn'}))  
		// .pipe(lang({langType: 'ru'}))  
		.pipe(gulp.dest('dest'))
})
```

input html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p><%= lang(12) %></p>	
	<p><%= lang(10) %></p>	
</body>
</html>
```

output html in chinese:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>心开扉扉宁扉  和敞敞宁</p>	
	<p>开心扉扉 宁 和  </p>	
</body>
</html>
```

output html in russian:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>ел зоныннл л</p>	
	<p>рродо зезл</p>	
</body>
</html>
```

if you have any question or issue, please open issue to me :)
