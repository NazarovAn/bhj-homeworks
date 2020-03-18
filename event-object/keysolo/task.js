class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.timer');
    this.output = document.querySelector('.output');

    this.reset();

    this.registerEvents();
  }

  countdown() {
    clearInterval(this.countDown);
    this.timer.textContent = this.wordElement.textContent.length;
    this.countDown = setInterval(() => {
        if (this.timer.textContent == 0) {
          clearInterval(this.countDown);
          this.fail();
          return        
        }

        this.timer.textContent --;
              
      },1000);
  }

  writePrinted(pressed) {
    if(pressed === 'shift' || pressed === 'alt' || pressed === 'control'){return};
    this.output.textContent = `${this.output.textContent}${pressed}`;    
  }
  

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

   registerEvents() {
    let pressedBtn = '';      

    document.addEventListener('keyup', (e) => {
      pressedBtn = e.key.toLowerCase();
      let currentSymbol = this.currentSymbol.textContent.toLowerCase(),
          currentSymbolUnicode = currentSymbol.charCodeAt(0);
          
      
      this.writePrinted(pressedBtn);

      if(pressedBtn === 'shift' || pressedBtn === 'alt' || pressedBtn === 'control'){
        return
      } else if(pressedBtn.charCodeAt(0) === currentSymbolUnicode){
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    this.output.textContent = '';
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    this.output.textContent = '';
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    this.countdown();
  }

  getWord() {
    const words = [
        'Меня зовут Bob',
        '!ого awesome!',
        'учусь в Netology',
        'hello, Друг',
        'kitty',
        'rock',
        'YouTube',
        'Popcorn',
        'Кино - это "cinema"',
        'love',
        'JavaScript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

