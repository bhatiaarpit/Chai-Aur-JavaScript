const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give A Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give A Valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>BMI: ${BMI}</span>`;
    
    // Weight category classification based on BMI
    let weightCategory;
    if (BMI < 18.6) {
      weightCategory = 'Underweight';
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      weightCategory = 'Normal Weight';
    } else {
      weightCategory = 'Overweight';
    }
    
    // Displaying the weight category
    results.innerHTML += `<br><span>${weightCategory}</span>`;
  }
});
