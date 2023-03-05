const {src,dest,watch,series,parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');

//Autoprefixer
const autoprefixer = require('autoprefixer');

//sourmaps
const sourcemaps = require('gulp-sourcemaps');
//css nano
const cssnano = require('cssnano');

//imagenes
const imagemin = require('gulp-imagemin');


//está Función compilas sass
function css(done){
    //ideptificamos el archivo css
    src('src/scss/app.scss')
    .pipe(sourcemaps.init())
    //compilamos sass y generamos el css
    .pipe(sass({outputStyle : 'compressed' }))
    //usamos el autoprefixer en el pipe
    .pipe(postcss([autoprefixer(),cssnano()]))

    //guardar
    .pipe(sourcemaps.write('.'))

    //Guardamos el css
    .pipe(dest('build/css'))

    done();



}
function script(done){
     //ideptificamos el archivo css
     src('src/js/app.js')

     //Guardamos el css
     .pipe(dest('build/js'))


     done();

}

function imagenes(done){
    src('src/img/**/*')
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(dest('build/img'))

    done();
}

//Está función esta atenta a todos los cambios en los archivos que compila la función de css
function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', script);
    watch('src/img/**/*', imagenes);//por si llegamos a tener nuevas imagenes 

   


 done();
}

exports.css = css;
exports.script = script;
exports.imagenes = imagenes;
exports.dev = dev;
exports.default = series(css, script,imagenes, dev);
