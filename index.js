document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  const body = document.querySelector('body');

  const rainbow = [
    'red',
    'darkorange',
    'orange',
    'yellow',
    'greenyellow',
    'green',
    'cadetblue',
    'blue',
    'indigo',
    'blueviolet',
    'violet'
  ];

  console.log(rainbow.indexOf('blue'));

  button.addEventListener('click', function() {
    if (body.style.backgroundColor) {
      const currentColor = body.style.backgroundColor;
      const newColorIndex =
        rainbow.indexOf(currentColor) + 1 === rainbow.length
          ? 0
          : rainbow.indexOf(currentColor) + 1;
      body.style.backgroundColor = rainbow[newColorIndex];
    } else {
      body.style.backgroundColor = rainbow[0];
    }
  });
});
