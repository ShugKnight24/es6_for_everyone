'use strict';

let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

console.log({inRing}, {onSide});
[inRing, onSide] = [onSide, inRing];
console.log({inRing}, {onSide});

// This is a pretty nifty trick.
	// There haven't been too many scenarios where I've needed this in the past, if any, but I realize the usefulness of this.
