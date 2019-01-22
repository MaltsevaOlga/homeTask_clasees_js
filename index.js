'use sctrict'


class Character{
	constructor(name, maxHealth, currentHealth, maxActionPoints, currentActionPoints){
		this.name = name,
		this.maxHealth = maxHealth,
		this.currentHealth = currentHealth;
		this.maxActionPoints = maxActionPoints;
		this.currentActionPoints = currentActionPoints;
	}

	useItem(item, target){
		item.apply(this);
		this.currentActionPoints -= item.actionPointsCost;
	}

	showCharacterInfo(){
		console.log(this.name, this.maxHealth, this.currentHealth, this.maxActionPoints, this.currentActionPoints)
	}
}

class Warrior extends Character{
	showCharacterInfo(){
		super.showCharacterInfo();
			if (this instanceof Warrior){
				console.log('Warrior');
			}
	}
}

class Wizzard extends Character{
	showCharacterInfo(){
		super.showCharacterInfo();
			if (this instanceof Wizzard){
				console.log('Wizzard');
			}
	}
}

class Item{
	constructor(name, actionPointsCost){
		this.name = name;
		this.actionPointsCost = actionPointsCost;
	}

	apply(target){

	}

	showInfo(){
		console.log(this.name, this.apply()) //добавить вывод что делает предмет
	}
}

class HealthPoition extends Item{
	constructor(healthPoints){
		super('healthPoition', 1);
		this.healthPoints = healthPoints;
		}

	apply(target){
			super.apply();
			target.currentHealth += this.healthPoints;
		}
}

const garrosh = new Warrior('garrosh', 100, 100, 20, 20);
const jaina = new Wizzard('jaina', 100, 100, 20, 20);


const healthPoition = new HealthPoition(2);
console.log(healthPoition);


