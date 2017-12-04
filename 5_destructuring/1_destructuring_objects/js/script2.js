'use strict';

// Object Destructuring with variable renaming & default values
const { w: width = 400, h: height = 500 } = { w: 800 }

// here w is being destructured from the default 800. It will be overwritten by 400 and renamed to width
// h tries to destructure from the object, but since it isn't there it falls to the default and changes the name to height
