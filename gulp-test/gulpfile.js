const { src, dest, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
// gulp-uglify => plugins.uglify = require('gulp-uglify')
const del = require('del');
const plugins = require('gulp-load-plugins')();
// 压缩js uglifyis
function js(cb) {
  src('js/*.js')
    // 下一个处理环节
    .pipe(plugins.uglify())
    .pipe(dest('./dist/js'))
    .pipe(reload({ stream: true }));
  cb()
}

// 对scss/less编译，压缩，输出 css 文件
function css(cd) {
  src('./css/*.scss')
    .pipe(plugins.sass({outputStyle: 'compressed'}))
    .pipe(plugins.autoprefixer({
      cascade: false,
      remove: false
    }))
    .pipe(dest('./dist/css'))
    .pipe(reload({ stream: true }));
  cd()

}

// 监听这些文件的变化
function watcher() {
  watch('js/*.js', js);
  watch('css/*.scss', css);

}

// 删除dist目录中的内容
function clean(cb) {
  del('./dist');
  cb()
}

// server 任务
function server(cb) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  cb()
}
exports.scripts = js;
exports.styles = css;
exports.clean = clean;
exports.default = series([
  clean,
  js,
  css,
  server,
  watcher
]);
