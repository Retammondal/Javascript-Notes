// flatMap() -> Combination of one map and then flat to 1 level
// flatMap strictly flattens exactly 1 level deep

// -----------------------------------------------------------------------------
// Problem --> Want Single array of all tags ??
// -----------------------------------------------------------------------------
const blogPosts = [
    { id: 1, title: "JS Basics", tags: ["javascript", "web"] },
    { id: 2, title: "React Props", tags: ["react", "frontend"] }
];

// Method 01 - map() followed by .flat()

const nestedTags = blogPosts.map(post => post.tags);
// Result: [["javascript", "web"], ["react", "frontend"]]
const badFlatTags = nestedTags.flat();

// Method 02 - flatMap()
const masterTagsList = blogPosts.flatMap(post => post.tags);
console.log(masterTagsList);
// Output: ["javascript", "web", "react", "frontend"]