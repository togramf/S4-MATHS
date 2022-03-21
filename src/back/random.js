// On renvoie un entier aléatoire entre 0 et une valeur max exclue
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

export const flip_a_coin =
    function() {
  if (getRandomInt(2) == 0)
    return 'face';
  else
    return 'pile';
}

export const roll_a_dice = function() {
  return Math.floor(getRandomInt(6)) + 1;
}
