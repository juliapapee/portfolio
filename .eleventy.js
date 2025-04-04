module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets/*');
    eleventyConfig.addPassthroughCopy('./src/script.js');
    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addWatchTarget('./src/script.js');
    eleventyConfig.addWatchTarget('./src/styles.css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
