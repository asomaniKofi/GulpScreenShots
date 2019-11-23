"use strict"
const gulp = require("gulp");
const bs = require("browser-sync").create();
const webshot = require("webshot");
const del = require("del");

gulp.task("browserSync",function() {
    bs.init({
        server:{
            baseDir:"build"
        },
    });
});

gulp.task('clean:images', function(){
  return del(["screenshots/*"]);
});

// gulp.task('server', gulp.series('build', function(){
//     browser.init({server: './_site', port: port});
//   }));

// const optionsMobile = {
//     screenSize: {
//         width: 1024,
//         height: 768
//     },
//     shotSize:{
//         width: 1024,
//         height: 768
//     },
//     userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1"
//     }

const options = {
    captureSelector: ".ff-FeaturedFixtureModule_Pod",
    screenSize: {
        width: 425,
        height: 466
    },
    shotSize:{
        width: 425,
        height: 466
    },
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1"
}

gulp.task('default',gulp.series(gulp.parallel('browserSync', 'clean:images'),function (){
}));

// webshot("http://localhost:3000","./screenshots/iPad.png", optionsMobile ,function(err){
//     console.log(err);
// });
// webshot("http://localhost:3000","./screenshots/iPad.png", options ,function(err){
//     console.log(err);
// });

webshot("https://mobile.bet365.com","./screenshots/b365.png", options ,function(err){
    console.log(err);
});