// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage

  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }


}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
      this.health -= damage
      if (this.health > 0) {
          return `A Saxon has received ${damage} points of damage`
      }
      else {
          return `A Saxon has died in combat`
      }
  }
}

// War
class War {
  vikingArmy = []
  saxonArmy = []

  addViking(viking) {
      this.vikingArmy.push(viking)
      console.log(this.vikingArmy)
  }

  addSaxon(Saxon){
      this.saxonArmy.push(Saxon)

  }

  vikingAttack() {
    let saxInd = [Math.floor(this.saxonArmy.length * Math.random())]
    let vikInd = [Math.floor(this.vikingArmy.length * Math.random())]
    const randomSaxon = this.saxonArmy[saxInd]
    const randomViking = this.vikingArmy[vikInd]
    let outcome = randomSaxon.receiveDamage(randomViking.strength)
    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(saxInd, 1)
        //return outcome
    }
    return outcome
}

  saxonAttack() {
    let saxInd = [Math.floor(this.saxonArmy.length * Math.random())]
    let vikInd = [Math.floor(this.vikingArmy.length * Math.random())]
    const randomSaxon = this.saxonArmy[saxInd]
    const randomViking = this.vikingArmy[vikInd]
    let outcome = randomViking.receiveDamage(randomSaxon.strength)
    if (randomViking.health <= 0) {
        this.vikingArmy.splice(vikInd, 1)
    }
    return outcome
  }

  //assuming that the attackm method receives two arrays as parameters
  attack(attacker, victim) {
    let attackerInd = [Math.floor(attacker.length * Math.random())]
    let victimInd = [Math.floor(victim.length * Math.random())]
    const randomAttacker = attacker[attackerInd]
    const randomVictim = victim[victimInd]
    console.log(`Random attacker is:`, randomAttacker)
    console.log(`Random victom is `, randomVictim)
    console.log(`Random victim's health is: ${randomVictim.health} and Random's Attacker's strength is ${randomAttacker.strength} `)
    let outcome = randomVictim.receiveDamage(randomAttacker.strength)
    if (randomVictim.health <= 0) {
        victim.splice(victimInd, 1)
        console.log(randomVictim.receiveDamage(randomAttacker.strength))
        return outcome
    }
    return outcome
}

  showStatus() {
    if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`
    }
    else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`
    }
    else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
        return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
