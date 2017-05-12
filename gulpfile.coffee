gulp = require('gulp')
fileinclude = require('gulp-file-include')
#minify = require('gulp-minify-css')
minify = require('gulp-clean-css')
sass = require('gulp-sass')
browserSync = require('browser-sync')
del = require('del')
runSequence = require('run-sequence')
concat = require('gulp-concat')
uglify = require('gulp-uglify')
autoprefixer = require('gulp-autoprefixer')
plumber = require('gulp-plumber')
#csso = require('gulp-csso')
babel = require('gulp-babel')
sourcemaps = require("gulp-sourcemaps")
replace = require("gulp-replace")
rename = require("gulp-rename")
imagemin = require('gulp-imagemin')


# 构建任务部分
gulp.task('default', (callback) ->
  runSequence(['clean'], ['build'], ['serve', 'watch'], callback)
)

gulp.task('clean', (callback)->
  del(['./dist/'], callback)
)

gulp.task('build', (callback) ->
  runSequence(['concatHtml', 'copy'], ['sassCss', 'miniJs','miniImg'], callback)
)

#scss预编译设置css样式并合并到style中
gulp.task('sassCss', ->
  gulp.src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'Android >= 4.0', '> 1%', 'Firefox >= 20', 'Firefox ESR', 'ie 8', 'IOS 7'],
      cascade: true,
      remove: true
      add: true
      flexbox: true
    }))
    .pipe(minify())
#    .pipe(replace('}','}\n'))
    .pipe(sourcemaps.write('./map'))
#    .pipe(gulp.dest('./dist/css'))
#    .pipe(minify())
    .pipe(plumber.stop())
#    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/css'))
)

#将js合并到all.js中
gulp.task('miniJs', ->
  gulp.src('./src/component/**/**/*.js')
    .pipe(plumber())
    .pipe(concat('all.js', {newLine: ';\n'}))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./dist/js/'))

  gulp.src(['./src/js/bootstrap.js', './src/js/script.js'])
    .pipe(plumber())
#    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./dist/js/'))
)

#将图片压缩
gulp.task('miniImg',->
  gulp.src('./src/img/*.*')
    .pipe(plumber())
  .pipe(imagemin({
    progressive: true
  }))
    .pipe(plumber.stop())
  .pipe(gulp.dest('./dist/img/'))
)

#将html中模板合并到html中
gulp.task('concatHtml', ->
  gulp.src(["./src/page/*.html"])
    .pipe(plumber())
    .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file',
    context: {
      name: 'test'
    }
  }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./dist/'))
)


#gulp.task('spriteCss', ->
#   gulp.src('./src/style/style.css')
#     .pipe(plumber())
#    .pipe(spriter({
#      'spriteSheet' : './dist/img/spriteSheet_a.png'
#      'pathToSpriteSheetFromCSS' : '../img/spriteSheet_a.png'
#    }))
#    .pipe(minify())
#    .pipe(plumber.stop())
#    .pipe(gulp.dest('./dist/css'))
#)


#复制图片，公共css以及js
gulp.task('copy', ->
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js/'))
  gulp.src('./src/js/jqx/*.*')
    .pipe(gulp.dest('./dist/js/jqx/'))
  gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts/'))
#  gulp.src('./src/img/*.*')
#    .pipe(gulp.dest('./dist/img/'))
)

gulp.task('serve', ->
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
    port: 7413
  })
)

gulp.task('watch', ->
  gulp.watch('./src/**/*.*', ['reload'])
)

gulp.task('reload', (callback)->
  runSequence(['build'], ['reload-browser'], callback)
)

gulp.task('reload-browser', ->
  browserSync.reload()
)

