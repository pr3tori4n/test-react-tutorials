module.exports = {
    require: [
        'test/helpers/babel',
        'test/helpers/enzyme',
        'test/helpers/jsdom'
    ],
    spec: ['./components/**/*.[tT]est.js']
};