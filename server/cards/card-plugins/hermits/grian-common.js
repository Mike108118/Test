import HermitCard from './_hermit-card'

class GrianCommonHermitCard extends HermitCard {
	constructor() {
		super({
			id: 'grian_common',
			name: 'Grian',
			rarity: 'common',
			hermitType: 'builder',
			health: 300,
			primary: {
				name: 'Copper Golem',
				cost: ['builder'],
				damage: 60,
				power: null,
			},
			secondary: {
				name: 'Waffle',
				cost: ['builder', 'any'],
				damage: 70,
				power: null,
			},
		})
	}

	register(game) {}
}

export default GrianCommonHermitCard
