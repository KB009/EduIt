module.exports={
    entry:"./src/index.js",
    output:{
        path:"Idist/assets",
        filename:"bundle.js",
        publicPath:"assets",
        module: {
            loaders: [
                {
                    loader: 'babel-loader',
                    query: {
                        presets: ["es2015", "react", "stage-2"],
                        plugins: ["transform-runtime","transform-class-properties"]
                    }
                },
                {
                    loader: 'json-loader',
                    test: /\.json$/
                }
            ],
    }
}