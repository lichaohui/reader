var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 监视文件改动并重新载入
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['app/*.html', 'public/css/*.css', 'public/js/*.js'], {cwd: './'}, reload);
});