# admin-adshboard
admin-adshboard-DGRSDT

Preview
![Alt text](dist/img/admin-preview.gif/?raw=true "Title")



### install gulp globally 
npm i gulp@3.9.1

### initilise the project
npm init

### install gulp locally (project)
npm i gulp@3.9.1 --save-dev

### install all nessary plugin
npm i gulp-concat gulp-sass gulp-autoprefixer gulp-pug gulp-livereload gulp-notify gulp-sourcemaps gulp-minify --save-dev

### install a static server 
npm i static-server

### add this line to package.json
 "browsserlist":[
    "last 2 version ",
    ">2%"
  ],


## install glup-newy
npm install --save-dev gulp-newy

## Set-ExecutionPolicy Unrestricted
//taskkill /F /IM node.exe   ==> to stop all node instance using port 8000


##How we compile Sass to css
sass --watch stage\css\main.scss:dist\css\main.css

##How we compile Pug to HTML
gulp watch