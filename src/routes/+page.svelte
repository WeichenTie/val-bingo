<script lang="ts">
	import '../styles/app.css';

	const allPredicates = [
		'Get at least 20 kills',
		'Win with someone on team with less than 10 kills',
		'Get knife kill',
		'Get single digit kills',
		'1v3 clutch',
		'Get at least 5 first bloods',
		'Witness teammate miss a full spray',
		'Steal an ace',
		'Overtime',
		'Flawless',
		'Get flawlessed on',
		'Top frag',
		'Bottom frag',
		'9-3 win',
		'Another incident...',
		'Play a game on LOTUS',
		'Tilted teammate',
		'Teammate pushing the wrong site',
		'Win a game',
		'Anybody on team rankup',
		'Anybody on team derank',
		'Odin kill',
		'Sheriff kill',
		'Marshal kill',
		'Operator kill',
		'Pick up operator from enemy team',
		'Get killed from a bad call',
		'Play a controller',
		'Lose a 3/4/5 vs 1 ',
		'Teammate dies from ego peaking',
		'2 or more teammates buy an Operator',
		'Win a round due to lineups',
		'Teammate misses a lineup',
		'Thrifty the enemy',
		'Team ace',
		'Defuse the bomb while enemies are still alive',
		'Collateral',
		'Dies from teammate not clearing site',
		'Died from someone being a RAT',
		'Get knifed',
		'Died due to skin shopping',
		'Defuse bomb with less than 1 sec remaining',
		'Get trash talked by the enemy',
		'Kill teammate with bad call',
		'Teammate saying "we lost" when still ahead',
		'Same teammate always last alive (Master Baiter)',
		'Win by over 5 rounds',
		'Lose by over 8 rounds',
		'Get T-bagged by enemy'

		// 'Marcus calls Luka / Tom stupid',
		// "Tom AFK's a round"
	];

	const tomPredicates = ['Tom meows'];

	const marcusPredicates = [];

	const curtisPredicates = [];

	const swinsonPredicates = ['Swin wants to pipe anything', ''];

	const yangPredicates = [];

	const lukaPredicates = [];

	const calvinPredicates = [];

	const carlosPredicates = [];

	let grid = [
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false]
	];

	let predicates = genPredicates();

	function genPredicates() {
		allPredicates.sort(() => Math.random() - 0.5);
		return allPredicates.slice(0, 25);
	}

	function onClick(row: number, col: number) {
		grid[row][col] = !grid[row][col];
	}

	function onReset() {
		predicates = genPredicates();
		grid = [
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false]
		];
	}
</script>

<main
	class="w-full flex justify-center items-center font-primary text-xl md:text-lg sm:text-sm flex-col gap-4 p-4"
>
	<div class="grid grid-cols-5 grid-rows-5 max-w-[900px] w-full max-h-[900px] h-full text-white">
		{#each grid as row, ri}
			{#each row as value, ci}
				<button
					class={`transition-colors aspect-square border p-4 lg:p-2 overflow-auto ${
						value ? 'bg-[#661b1c]' : 'hover:bg-[#191d26]'
					}`}
					on:click={() => onClick(ri, ci)}>{predicates[ri * 5 + ci]}</button
				>
			{/each}
		{/each}
	</div>
	<button on:click={onReset} class="px-4 py-2 text-white bg-slate-700">Reset</button>
</main>
