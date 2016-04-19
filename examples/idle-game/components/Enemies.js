import React, { Component, PropTypes } from 'react'

const enemyList = {
	areas: [
	{
		name: 'area1',
		enemies: [
		{
			'name': 'Ike',
			'attack': 3,
			'health': 5,
			'reward': 1
		},
		{
			'name': 'Wendy',
			'attack': 7,
			'health': 9,
			'reward': 2
		},
		{
			'name': 'Craig',
			'attack': 4,
			'health': 16,
			'reward': 3
		},
		{
			'name': 'Timmy',
			'attack': 2,
			'health': 7,
			'reward': 2
		},
		{
			'name': 'Butters',
			'attack': 6,
			'health': 8,
			'reward': 1
		}
		]
	}
	]
}

class Enemies {

	getRandomEnemy() {
		const currentArea = 0; //TODO: Store which area you're currently on
		const numberOfEnemies = enemyList.areas[currentArea].enemies.length;
		const randomEnemy = Math.floor(Math.random() * numberOfEnemies);
		return enemyList.areas[currentArea].enemies[randomEnemy];
	}

}

//Enemies.contextTypes = {
//  store: React.PropTypes.object
//}

export default Enemies