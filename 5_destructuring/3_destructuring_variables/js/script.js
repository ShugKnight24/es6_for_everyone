'use strict';

let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

console.log(inRing, onSide);
[inRing, onSide] = [onSide, inRing];
console.log(inRing, onSide);
