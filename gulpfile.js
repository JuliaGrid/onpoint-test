var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var autoprefixer = require("gulp-autoprefixer");
var server = require("browser-sync").create();

gulp.task("style", function () {
    return gulp.src('./app/less/**/*.less')
      .pipe(plumber())
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(server.stream());
  });

gulp.task("server", function () {
    server.init({
        server: "app/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
    gulp.watch("app/less/*.less", gulp.series("style"));
    gulp.watch("app/").on("change", server.reload);
});

gulp.task("start", gulp.series("style", "server"));