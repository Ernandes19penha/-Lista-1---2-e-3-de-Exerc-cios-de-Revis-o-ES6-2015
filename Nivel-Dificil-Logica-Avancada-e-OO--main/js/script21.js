// 21. HTML Generator
const tags = [{t: "Home", u: "/"}, {t: "Blog", u: "/blog"}].map(({t, u}) => `<a href="${u}">${t}</a>`);
console.log("21. HTML:", tags);
