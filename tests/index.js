var webpack = require("webpack");
var config = require('../webpack.config')
webpack(config, function(error, stats){
    if (error) {
        console.log(error)
    }
})
