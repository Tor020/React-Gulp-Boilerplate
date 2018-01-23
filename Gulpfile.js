const gulp = require('gulp'); // https://github.com/gulpjs/gulp
const sass = require('gulp-sass'); // https://github.com/dlmanning/gulp-sass
const concat = require('gulp-concat'); // https://github.com/contra/gulp-concat can be used with any filetype
const postcss = require('gulp-postcss'); // https://github.com/postcss/postcss
const uncss = require('postcss-uncss'); // https://github.com/ben-eb/gulp-uncss
const cssnano = require('cssnano'); // minifier https://github.com/postcss/postcss

// checkCss to Task
  gulp.task('checkCss', () => {
    const plugins = [
      uncss({
        html: ['./Dev/*.html']
      }),
    ];
    return gulp.src('./Dev/css/*.css')
      .pipe(postcss(plugins))
      .pipe(rename('stylesInUse.css'))
      .pipe(gulp.dest('./Dev/css/'));
  });

// minifyCss Task
  gulp.task('minifyCss', () => {
    const processors = [
      cssnano
    ];
    return gulp.src('./Dev/css/style.css')
      .pipe(postcss(processors)) //all of the items in the processors array will be applied to the src css files
      .pipe(gulp.dest('./Build/css/'));
  });

// pipeAllFiles task
  gulp.task('pipeAllFiles', () => {  // to ensure that all files have been transferred to Build Folder
    const html = './Dev/*.html';
    const scripts = './Dev/scripts/*.js';
    const css = './Dev/css/*.css';

    gulp.src(html)
      .pipe(gulp.dest('./Build/'));

    // gulp.src(scripts)
    //   .pipe(gulp.dest('./Build/scripts/'));

    // gulp.src(css) //commented out since using postcss
    // .pipe(gulp.dest('./Build/css/'));
  });

// concatcss Tasks
  // can be used for javascript
  gulp.task('concatcss', () => {
    return gulp.src('./Dev/sass/baseUtilities/*.scss') //returns all of the .scss files from currentDir/Dev/sass/baseUtilities/AnyFilesThatEndIn.scss
      .pipe(concat('all.scss')) //concats all of the found files into one file named here
      .pipe(gulp.dest('./Build/')); //spits it out in this directory  cwd/dist/
  });

  gulp.task('concatMultiFolders', () => {
      return gulp.src(['./Dev/sass/baseUtilities/*.scss', './Dev/sass/pages/*.scss', './Dev/sass/bulmaOverWrites/*.scss'])  //the files will be concatted in the order they are specified here
        .pipe(concat('all.scss'))
        .pipe(gulp.dest('./Build/')); //spits it out in this directory  cwd/dist/
    });

// sassStyles task 
  gulp.task('sassStyles', () => {
    gulp.src('Dev/sass/**/*.scss') //relative to Gulpfile.js 
      .pipe(sass().on('error', sass.logError)) //compiles the sass and if there is an error it explains where
      .pipe(gulp.dest('./Dev/css/'));  //outputs compiled sass here 
  });

gulp.task('default', ['sassStyles','sass']);


  gulp.task('default', () => {
    gulp.watch('Dev/sass/**/*.scss', ['sassStyles']); //path to the files to watch, pass in an array with the tasks that we want to run when the files are changed
  });
  gulp.task('test', ['checkCss']) //to test against bulma files in use
  gulp.task('sass', () => {

    let path1 = 'Dev/sass/**/*.scss';
    let path2 = 'Dev/sass/**/**/*.scss';

    gulp.watch([path1, path2], ['sassStyles']); //path to the files to watch, pass in an array with the tasks that we want to run when the files are changed
  });


  
  