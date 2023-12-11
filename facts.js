function displayFact(data) {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#fact');
  
        const factEl = document.createElement('p');
        factEl.classList.add('fact');
  
        factEl.textContent = data.text;
  
        containerEl.appendChild(factEl);
      });
  }
  displayFact();