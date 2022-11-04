
public class animal {

	protected int hunger;
	protected int hungerResistance;
	protected int thirst;
	protected int thirstResistance;
	protected String animalType;
	protected boolean isDead;
	protected int size;
	
	/**
	 * Hunger counter counts up every day - the hunger resistance of each animal. After each time the hunger resistance is used, it has
	 * one subtracted from it.
	 * @return hunger
	 */
	public int hungerCount() {
		hunger++;
		
		hunger = hunger - hungerResistance;
		
		if(hunger < 0) {//If hungerResistance makes hunger less than 0 it sets hunger back to 0
			hunger = 0;
		}
		if(hungerResistance != 0) {//If hungerResistance doesn't equal 0 then hungerResistance is decreased by 1
			hungerResistance = hungerResistance - 1;
		}
		if(hunger == 8) {//If the hunger counter hits 8 then the creature dies
			isDead = true;
		}
		
		return hunger;
	}
	
	/**
	 * Thirst counter counts up everyday - the thirst resistance of each animal. After each time the thirst resistance is used, it has
	 * one subtracted from it.
	 * @return Thirst
	 */
	public int thirstCount() {
		thirst++;
		
		thirst = thirst - thirstResistance;
		
		if(thirst < 0) {//If thirstResistance makes thirst less than 0 it sets thirst back to 0
			thirst = 0;
		}
		if(thirstResistance != 0) {//If thirstResistance doesn't equal 0 then thristResistance is decreased by 1
			thirstResistance = thirstResistance - 1;
		}
		if(thirst == 5) {//if the thirst counter hits 5 the creature dies
			isDead = true;
		}
		
		return thirst;
	}
	
	/**
	 * isDead() tests to see if the creature is dead. An animal dies if it's thirst counter hits 5 or the hunger counter hits 8
	 * @return isDead
	 */
	public boolean isDead() {
		return isDead;
	}
}
