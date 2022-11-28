module.exports = {
    plugins: {
        'postcss-calc': {},
        'postcss-import': {},
        'postcss-preset-env': {
            stage: 1,
        },
        'postcss-color-converter': {
            outputColorFormat: 'hsl'
        },
        'postcss-short': {},
        autoprefixer: {},
        'postcss-sorting': {},
        'postcss-merge-rules': {},
        'postcss-sort-media-queries': {},
        'cssnano': {
            preset: ['cssnano-preset-advanced', {
                normalizeWhitespace: false,
                colormin: false
            }]
        }
    },
};
