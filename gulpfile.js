var gulp=require('gulp');
var stylus=require('gulp-stylus');
var vinyl=require('vinyl-source-stream');
var browserify=require('browserify');

gulp.task('css',function(){
	gulp.src('./dev/stylus/index.styl')
	  .pipe(stylus({'include css':true}))
	  .pipe(gulp.dest('./sources/css/'))
});

gulp.task('js',function(){
	browserify('./dev/js/login/index.js')
	.bundle()
	.pipe(vinyl('index.js'))
	.pipe(gulp.dest('./sources/js/'))
});

gulp.task('default',['css','js']);
