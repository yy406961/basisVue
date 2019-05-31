const BASE_URL = "/JD/";

module.exports = {
    baseUrl: process.argv[3] === "--dev" ? BASE_URL : "/",
    outputDir: "dist",
    lintOnSave: true,
    assetsDir: "lib",
    runtimeCompiler: true,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            css: {
                localIdentName: "[folder]__[hash:base64:8]",
                camelCase: "only"
            }
        }
    },
    devServer: {
        port: 8555,
        https: false,
        hotOnly: false,
        proxy: null // string | Object
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "development") {
            config.devtool = "source-map";
            // mutate config for production...
        }
        config.externals = {
            jquery: "jQuery",
            BMap: "BMap",
            BMapLib: "BMapLib"
        };
    }
};
