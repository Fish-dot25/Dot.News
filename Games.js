/ Create container
const container = document.createElement('div');
document.body.appendChild(container);

// Create heading
const heading = document.createElement('h2');
heading.textContent = 'Select an option:';
container.appendChild(heading);

// Options array
const options = ['Option 1', 'Option 2', 'Option 3'];

// Create radio buttons
options.forEach((text, index) => {
  const label = document.createElement('label');
  const radio = document.createElement('input');
  
  radio.type = 'radio';
  radio.name = 'options';
  radio.value = text;

  label.appendChild(radio);
  label.appendChild(document.createTextNode(' ' + text));
  container.appendChild(label);
  container.appendChild(document.createElement('br'));
});

// Create submit button
const button = document.createElement('button');
button.textContent = 'Submit';
container.appendChild(button);

// Create result paragraph
const result = document.createElement('p');
container.appendChild(result);

// Add click event
button.addEventListener('click', () => {
  const radios = document.getElementsByName('options');
  let selected = '';
  for (const radio of radios) {
    if (radio.checked) {
      selected = radio.value;
      break;
    }
  }
  result.textContent = selected 
    ? `You selected: ${selected}` 
    : 'No option selected.';
});
✅ What this code does:
Dynamically creates th
