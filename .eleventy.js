module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/interaction.js');
    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addWatchTarget('./src/interaction.js');
    eleventyConfig.addWatchTarget('./src/styles.css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
