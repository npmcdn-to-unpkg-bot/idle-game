//PLAYER

export const updateAttack = (amount, cost = 0) => {
  return {
    type: 'UPDATE_ATTACK',
    amount,
    cost
  }
}

export const updateBlock = (amount, cost = 0) => {
  return {
    type: 'UPDATE_BLOCK',
    amount,
    cost
  }
}

export const updateHealth = (amount, cost = 0) => {
  return {
    type: 'UPDATE_HEALTH',
    amount,
    cost
  }
}

export const updateCurrency = (amount) => {
  return {
    type: 'UPDATE_CURRENCY',
    amount
  }
}

//ENEMY

export const updateEnemyHealth = (amount) => {
  return {
    type: 'UPDATE_ENEMY_HEALTH',
    amount
  }
}

export const createNewEnemy = (attack, health, reward) => {
  return {
    type: 'CREATE_NEW_ENEMY',
    attack,
    health,
    reward
  }
}