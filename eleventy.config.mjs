export default function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addWatchTarget("src/styles");

  eleventyConfig.addFilter("dateFilter", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    })
  );


  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}