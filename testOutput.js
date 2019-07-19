const md = require('markdown-it')()
const copy = require('./index')

const src = `
## Cras risus
Donec sodales sagittis magna. Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.

Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc: [quis gravida magna mi a libero](https://img.itch.zone/aW1hZ2UvMzA0OTY1LzE0OTU1MzYucG5n/315x250%23c/JE6YnC.png).

Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.

Suspendisse eu ligula. Ut a nisl id ante tempus hendrerit. Fusce fermentum:
\`\`\`js
for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
\`\`\`
`;
md.use(copy);
console.log(md.render(src));