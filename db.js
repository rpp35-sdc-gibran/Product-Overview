var fs = require('fs');
var csv = require('csv-parser');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('productOverview', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('connected to db')

  })
  .catch((err) => {
    console.log('error connecting to db')
  })



fs.createReadStream("/Users/danielweiner/Documents/hackReactor/senior/system-design-capstone/Product-Overview/photos.csv")
  .pipe(csv())
  .on('data', (data) => {

    console.log('data is', data)
  })
  .on('end', () => { console.log('fin')})
// var read = (req, res, next) => {


//   next();
// }





