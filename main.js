document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const lottoDisplay = document.getElementById('lotto-display');
  const historyList = document.getElementById('history-list');
  const clearHistoryBtn = document.getElementById('clear-history');
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  // 테마 초기화
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcons(currentTheme);

  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
  });

  function updateThemeIcons(theme) {
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  let history = JSON.parse(localStorage.getItem('lottoHistory')) || [];

  // 초기 히스토리 렌더링
  renderHistory();

  generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
    addToHistory(numbers);
  });

  clearHistoryBtn.addEventListener('click', () => {
    history = [];
    localStorage.removeItem('lottoHistory');
    renderHistory();
  });

  function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      numbers.add(num);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  function getColorClass(num) {
    if (num <= 10) return 'color-yellow';
    if (num <= 20) return 'color-blue';
    if (num <= 30) return 'color-red';
    if (num <= 40) return 'color-gray';
    return 'color-green';
  }

  function displayNumbers(numbers) {
    lottoDisplay.innerHTML = '';
    numbers.forEach((num, index) => {
      const ball = document.createElement('div');
      ball.className = `ball ${getColorClass(num)}`;
      ball.textContent = num;
      ball.style.animationDelay = `${index * 0.1}s`;
      lottoDisplay.appendChild(ball);
    });
  }

  function addToHistory(numbers) {
    const timestamp = new Date().toLocaleString();
    history.unshift({ numbers, timestamp });
    
    // 최대 20개까지만 저장
    if (history.length > 20) {
      history.pop();
    }
    
    localStorage.setItem('lottoHistory', JSON.stringify(history));
    renderHistory();
  }

  function renderHistory() {
    historyList.innerHTML = '';
    
    if (history.length === 0) {
      historyList.innerHTML = '<li class="placeholder">최근 생성된 번호가 없습니다.</li>';
      return;
    }

    history.forEach(item => {
      const li = document.createElement('li');
      li.className = 'history-item';
      
      const ballsDiv = document.createElement('div');
      ballsDiv.style.display = 'flex';
      ballsDiv.style.gap = '4px';
      ballsDiv.style.flexWrap = 'wrap';

      item.numbers.forEach(num => {
        const ball = document.createElement('div');
        ball.className = `history-ball ${getColorClass(num)}`;
        ball.textContent = num;
        ballsDiv.appendChild(ball);
      });

      const timeSpan = document.createElement('span');
      timeSpan.className = 'timestamp';
      timeSpan.style.fontSize = '0.7rem';
      timeSpan.style.color = '#94a3b8';
      timeSpan.style.marginLeft = 'auto';
      timeSpan.textContent = item.timestamp.split(' ').slice(1).join(' '); // 시간 정보만 간략히 표시

      li.appendChild(ballsDiv);
      li.appendChild(timeSpan);
      historyList.appendChild(li);
    });
  }
});
