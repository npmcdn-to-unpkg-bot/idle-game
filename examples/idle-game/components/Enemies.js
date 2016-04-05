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

	//let currentArea = enemyList


	getRandomEnemy() {
		return enemyList.areas[0].enemies[0];
	}


}

//Enemies.contextTypes = {
//  store: React.PropTypes.object
//}

export default Enemies