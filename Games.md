<!DOCTYPE html>
<html>
<head>
  <title>Guess the Country Game</title>
  <meta name="description" content="Interactive game to guess the country of the day.">
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
      background: #f9f9f9;
    }
    main {
      background: #fff;
      display: inline-block;
      padding: 24px 32px 32px 32px;
      margin: 30px auto;
      border-radius: 10px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.11);
    }
    fieldset {
      border: none;
      margin-bottom: 18px;
    }
    label {
      display: block;
      margin: 0.5em 0;
      font-size: 1.1em;
      cursor: pointer;
    }
    button {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 10px 22px;
      cursor: pointer;
      font-size: 1.1em;
      border-radius: 6px;
      margin: 0 8px;
      transition: background 0.2s;
    }
    button:hover {
      background-color: #0056b3;
    }
    #result {
      font-size: 1.2em;
      margin-top: 18px;
      min-height: 1.4em;
    }
  </style>
</head>
<body>
  <main>
    <h2>Guess the country of the day:</h2>
    <form id="quizForm" onsubmit="event.preventDefault(); showSelected();">
      <fieldset>
        <legend class="sr-only">Country options</legend>
        <label><input type="radio" name="options" value="Poland" aria-label="Poland"> Poland</label>
        <label><input type="radio" name="options" value="Norway" aria-label="Norway"> Norway</label>
        <label><input type="radio" name="options" value="Brazil" aria-label="Brazil"> Brazil</label>
      </fieldset>
      <button type="submit">Submit</button>
      <button type="button" onclick="resetQuiz()">Reset</button>
    </form>
    <p id="result"></p>
  </main>
  <script>
    const correctAnswer = "Poland";
    function showSelected() {
      const radios = document.querySelectorAll('input[name="options"]');
      let selected = '';
      for (const radio of radios) {
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
          result.textContent = `❌ Incorrect. The correct answer is: ${correctAnswer}`;
          result.style.color = 'red';
        }
      } else {
        result.textContent = 'Please select an option.';
        result.style.color = 'black';
      }
    }

    function resetQuiz() {
      const radios = document.querySelectorAll('input[name="options"]');
      radios.forEach(radio => radio.checked = false);
      document.getElementById('result').textContent = '';
    }
  </script>
</body>
</html>
