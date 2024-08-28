/* eslint-disable react/prop-types */
import diceBlue01 from '/src/assets/dice-blue-1.svg';
import diceBlue02 from '/src/assets/dice-blue-2.svg';
import diceBlue03 from '/src/assets/dice-blue-3.svg';
import diceBlue04 from '/src/assets/dice-blue-4.svg';
import diceBlue05 from '/src/assets/dice-blue-5.svg';
import diceBlue06 from '/src/assets/dice-blue-6.svg';
import diceRed01 from '/src/assets/dice-red-1.svg';
import diceRed02 from '/src/assets/dice-red-2.svg';
import diceRed03 from '/src/assets/dice-red-3.svg';
import diceRed04 from '/src/assets/dice-red-4.svg';
import diceRed05 from '/src/assets/dice-red-5.svg';
import diceRed06 from '/src/assets/dice-red-6.svg';

function Dice({ color = 'blue', num = 1 }) {
  const DICE_IMAGES = {
    blue: [
      diceBlue01,
      diceBlue02,
      diceBlue03,
      diceBlue04,
      diceBlue05,
      diceBlue06,
    ],
    red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
  };

  const src = DICE_IMAGES[color][num - 1];
  const alt = `${color} ${num}`;
  console.log(src);
  console.log(alt);
  return <img src={src} alt={alt} />;
}

export default Dice;
