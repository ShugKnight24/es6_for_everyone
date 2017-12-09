'use strict';

/* eslint-disable */
Array.prototype.shuffle = function() {
	var i = this.length, j, temp;
	if ( i == 0 ) return this;
	while ( --i ) {
		j = Math.floor( Math.random() * ( i + 1 ) );
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
};

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

cuts.shop = 'MM MEats';

// for (let i = 0; i < cuts.length; i++) {
//   console.log(cuts[i]);
// }

// cuts.forEach((cut) => {
//   console.log(cut);
//   if(cut === 'Brisket') {
//     continue;
//   }
// });

// for (const index in cuts) {
//   console.log(cuts[index]);
// }

for (const cut of cuts) {
	if(cut === 'Brisket') {
		continue;
	}
	console.log(cut);
}
