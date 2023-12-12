const {src,dest,watch,series} = require('gulp')

const sass = require('gulp-sass')(require('sass'))


function builtStyles(){
    return src('shinobi/**/*.scss').pipe(sass()).pipe(dest('css'))
}

function watchTask(){
    watch(['shinobi/**/*.scss'],builtStyles)
}

exports.default = series(builtStyles,watchTask)