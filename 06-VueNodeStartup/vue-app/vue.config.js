module.exports = {
    chainWebpack: config => {
        config.optimization.delete('splitChunks');
    },
    configureWebpack: {
        output: {
          filename: 'app.js'
        }
    },
    css: {
        extract: false
    },    
    //outputDir: '../node-app/src/dist'
    outputDir: '../dist'
}