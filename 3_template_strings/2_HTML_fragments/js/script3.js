const song = {
	name: 'Dying to live',
	artist: 'Tupac',
	featuring: 'Biggie Smalls'
};

const markup = `
	<div class="song">
		<p>
			${song.name} — ${song.artist}
			${song.featuring ? `(Featuring ${song.featuring})` : ''}
		</p>
	</div>
`;

document.body.innerHTML = markup;

// Really cool that you can use a ternary and conditional logic within a template strings

// This would again help me as I am building out dynamic content that some items may have certain properities while others do not
