module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/microfront-poc/microfronts/container/dist/'
        : '/'
}
