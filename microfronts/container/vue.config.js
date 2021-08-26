module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/microfronts/container/dist/'
        : '/'
}
