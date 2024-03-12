function checkpoint (a, b, c, d) {
  var result = (a + b) * (c + d);
  if (result > 50) {
    console.log('¡El número es mayor que 50!');
  } if (result < 50) {
    console.log('¡El número es menor que 50!');
  }
}

checkpoint(2, 3, 2, 2);
checkpoint(5, 6, 3, 5);