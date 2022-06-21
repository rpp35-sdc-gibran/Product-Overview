var fs = require('fs');
var csv = require('csv-parser');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('productOverview', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

var connect = (req, res, next) => {
  sequelize.authenticate()
  .then(() => {
    console.log('connected to db')
    next();
  })
  .catch((err) => {
    console.log('error connecting to db')
  })

}


// var read = (req, res, next) => {
//   fs.createReadStream("/Users/danielweiner/Documents/hackReactor/senior/system-design-capstone/Product-Overview/photos.csv")
//     .pipe(csv())
//     .on('data', (data) => {

//       console.log('data is', data)
//     })
//     .on('end', () => { console.log('fin')})

//   next();
// }

module.exports = connect;



