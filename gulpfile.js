const gulp = require('gulp')

// Image Optimization
const imagemin = require('gulp-imagemin')

// Javascript
const concat = require('gulp-concat')
const terser = require('gulp-terser')

// Tailwind
const postcss = require('gulp-postcss')
const cssnano = require('gulp-cssnano')
const tailwindcss = require('tailwindcss')
const sourcemaps = require('gulp-sourcemaps')
const { src, series, parallel, dest, watch } = require('gulp')

// Headers & Footers
const fs = require('fs')
const header = require('gulp-header')
const footer = require('gulp-footer')
const pkg = JSON.parse(fs.readFileSync('./package.json'))

function layout() {
    return src('src/sections/*.liquid')
        .pipe(gulp.dest('public/layout'))
}
function templates() {
    return src('src/sections/*.liquid')
        .pipe(gulp.dest('public/templates'))
}
function sections() {
    return src('src/sections/*.liquid')
        .pipe(gulp.dest('public/sections'))
}
function snippets() {
    return src('src/sections/*.liquid')
        .pipe(gulp.dest('public/snippets'))
}

function js() {
    const jsHeader = [
        '/*',
            '\t Name: ' + pkg.name,
            '\t Version: ' + pkg.version,
            '\t Description: ' + pkg.description,
            '\t Repository: ' + pkg.repository.url,
            '\t Author: ' + pkg.author,
            '\t Author URI: ' + pkg.authoruri,
            '\t License: ' + pkg.license,
        '*/',
        '\n'
    ].join('\n')
    
    const jsFooter = [
        '\n'
    ]

    return src('src/assets/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('katana.js'))
        .pipe(terser())
        .pipe(header(jsHeader, {pkg: pkg}))
        .pipe(footer(jsFooter, {pkg: pkg}))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('public/assets'))
        .on('error', console.error.bind(console))
}

function css() {
    return src('src/assets/css/**/*.css')
        .pipe(postcss([
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer')
            ])
        )
        .pipe(cssnano())
        .pipe(dest('public/assets'))
        .on('error', console.error.bind(console))
}

function images() {
    return src('src/assets/images/')
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets'))
        .on('error', console.error.bind(console))
}

exports.css = css
exports.js = js
exports.liquid = parallel(layout, templates, sections, snippets)
exports.images = images
exports.default = parallel(layout, templates, sections, snippets, css, images)
