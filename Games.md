<!DOCTYPE html>
<html>
<head>
  <title>Option Buttons</title>
</head>
<body>
  <h2>Guess the country of the day:</h2>
  
  <label><input type="radio" name="options" value="option 1"> Poland</label><br>
  <label><input type="radio" name="options" value="option 2"> Norway</label><br>
  <label><input type="radio" name="options" value="option 3"> Brazil</label><br><br>
  
  <button onclick="showSelected()">Submit</button>

  <p id="result"></p>

  <script>
  function showSelected() {
    const radios = document.getElementsByName('options');
    let selected = '';
    const correctAnswer = 'option 1'; 
    for (let radio of radios) {
      if (radio.checked) {
        selected = radio.value;
        break;
      }
    }

    const result = document.getElementById('result');

    if (selected) {
      if (selected === correctAnswer) {
        result.textContent = `✅ Correct! You selected: ${selected}`;
        result.style.color = 'green';
      } else {
        result.textContent = `❌ Incorrect. You selected: ${selected}`;
        result.style.color = 'red';
      }
    } else {
      result.textContent = 'Please select an option';
      result.style.color = 'black';
    }
  }
</script>

</body>
