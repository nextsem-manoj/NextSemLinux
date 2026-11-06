let allQuestions = [];
let currentFilter = 'all';
let currentSearch = '';
let userMode = 'practice'; // 'practice' or 'exam'
let userAnswers = {}; // { [qId]: 'A' }
let examSubmitted = false;
let examTimer = null;
let secondsRemaining = 90 * 60; // 90 minutes for exam mode

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('questions.json');
    allQuestions = await res.json();
    setupEventListeners();
    renderNavigator();
    renderQuestions();
    updateStats();
  } catch (err) {
    console.error('Failed to load questions.json', err);
  }
});

function setupEventListeners() {
  // Mode switcher
  document.getElementById('btn-mode-practice').addEventListener('click', () => setMode('practice'));
  document.getElementById('btn-mode-exam').addEventListener('click', () => setMode('exam'));

  // Reset
  document.getElementById('btn-reset').addEventListener('click', resetAssessment);

  // Tier filter buttons
  document.querySelectorAll('.tier-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tier-tab-btn').forEach(b => {
        b.classList.remove('active', 'bg-cyan-500', 'text-slate-950');
        b.classList.add('text-slate-400');
      });
      e.target.classList.add('active', 'bg-cyan-500', 'text-slate-950');
      e.target.classList.remove('text-slate-400');
      currentFilter = e.target.dataset.tier;
      renderQuestions();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    renderQuestions();
  });

  // Exam submit
  document.getElementById('btn-submit-exam').addEventListener('click', submitExam);

  // Modal buttons
  document.getElementById('modal-close-btn').addEventListener('click', () => {
    document.getElementById('report-modal').classList.add('hidden');
  });
  document.getElementById('modal-retake-btn').addEventListener('click', () => {
    document.getElementById('report-modal').classList.add('hidden');
    resetAssessment();
  });
}

function setMode(mode) {
  userMode = mode;
  const practiceBtn = document.getElementById('btn-mode-practice');
  const examBtn = document.getElementById('btn-mode-exam');
  const timerLabel = document.getElementById('timer-label');
  const timerDisplay = document.getElementById('stat-timer');
  const submitBar = document.getElementById('exam-submit-bar');

  if (mode === 'practice') {
    practiceBtn.className = 'px-2.5 py-1 rounded bg-cyan-500 text-slate-950 font-bold transition-all shadow-sm';
    examBtn.className = 'px-2.5 py-1 rounded text-slate-400 hover:text-white transition-all';
    timerLabel.textContent = 'Mode Active';
    timerDisplay.textContent = 'Practice (Untimed)';
    submitBar.classList.add('hidden');
    clearInterval(examTimer);
  } else {
    examBtn.className = 'px-2.5 py-1 rounded bg-cyan-500 text-slate-950 font-bold transition-all shadow-sm';
    practiceBtn.className = 'px-2.5 py-1 rounded text-slate-400 hover:text-white transition-all';
    timerLabel.textContent = 'Time Remaining';
    submitBar.classList.remove('hidden');
    startExamTimer();
  }
  renderQuestions();
  renderNavigator();
  updateStats();
}

function startExamTimer() {
  clearInterval(examTimer);
  secondsRemaining = 90 * 60;
  updateTimerDisplay();
  examTimer = setInterval(() => {
    secondsRemaining--;
    if (secondsRemaining <= 0) {
      clearInterval(examTimer);
      alert('Time is up! Submitting your exam automatically.');
      submitExam();
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  document.getElementById('stat-timer').textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function renderNavigator() {
  const grid = document.getElementById('navigator-grid');
  grid.innerHTML = '';

  allQuestions.forEach(q => {
    const btn = document.createElement('button');
    btn.textContent = q.id;
    btn.dataset.qid = q.id;
    btn.className = getNavButtonClass(q.id);
    btn.addEventListener('click', () => {
      const targetCard = document.getElementById(`q-card-${q.id}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('ring-2', 'ring-cyan-400');
        setTimeout(() => targetCard.classList.remove('ring-2', 'ring-cyan-400'), 1500);
      }
    });
    grid.appendChild(btn);
  });
}

function getNavButtonClass(qid) {
  const base = 'w-7 h-7 rounded-md text-xs font-mono font-bold transition-all flex items-center justify-center ';
  const answered = userAnswers[qid] !== undefined;

  if (userMode === 'exam' && !examSubmitted) {
    if (answered) return base + 'bg-cyan-600 text-white';
    return base + 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-slate-500';
  }

  // In practice mode or after exam submission:
  if (!answered) return base + 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-slate-500';
  const q = allQuestions.find(item => item.id === qid);
  const isCorrect = userAnswers[qid] === q.correctAnswer;
  if (isCorrect) return base + 'bg-emerald-600 text-white';
  return base + 'bg-rose-600 text-white';
}

function renderQuestions() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';

  const filtered = allQuestions.filter(q => {
    const matchesTier = currentFilter === 'all' || q.tier === currentFilter;
    const matchesSearch = !currentSearch || 
      q.question.toLowerCase().includes(currentSearch) ||
      Object.values(q.options).some(opt => opt.toLowerCase().includes(currentSearch)) ||
      q.explanation.toLowerCase().includes(currentSearch);
    return matchesTier && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card p-8 rounded-xl text-center text-slate-400">
        No questions matched your search criteria.
      </div>
    `;
    return;
  }

  filtered.forEach(q => {
    const card = document.createElement('div');
    card.id = `q-card-${q.id}`;
    card.className = 'glass-card question-card p-5 sm:p-6 rounded-xl space-y-4';

    const tierBadgeClass = q.tier === 'Basic' ? 'badge-basic' : (q.tier === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced');
    const selectedAnswer = userAnswers[q.id];
    const isAnswered = selectedAnswer !== undefined;
    const showExplanation = (userMode === 'practice' && isAnswered) || examSubmitted;

    let optionsHtml = '';
    ['A', 'B', 'C', 'D'].forEach(letter => {
      const optionText = q.options[letter];
      if (!optionText) return;

      let optionClasses = 'option-btn w-full p-3.5 rounded-lg border text-left text-xs sm:text-sm font-medium flex items-center justify-between gap-3 ';
      let badgeStyle = 'w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0 ';

      if (!isAnswered) {
        optionClasses += 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800/80';
        badgeStyle += 'bg-slate-800 text-slate-400';
      } else if (userMode === 'exam' && !examSubmitted) {
        if (selectedAnswer === letter) {
          optionClasses += 'bg-cyan-950 border-cyan-500 text-cyan-200 font-bold';
          badgeStyle += 'bg-cyan-500 text-slate-950';
        } else {
          optionClasses += 'bg-slate-900/60 border-slate-800/60 text-slate-400';
          badgeStyle += 'bg-slate-800 text-slate-500';
        }
      } else {
        // Practice mode or exam submitted
        if (letter === q.correctAnswer) {
          optionClasses += 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold';
          badgeStyle += 'bg-emerald-500 text-slate-950';
        } else if (selectedAnswer === letter) {
          optionClasses += 'bg-rose-950/90 border-rose-500 text-rose-200';
          badgeStyle += 'bg-rose-500 text-slate-950';
        } else {
          optionClasses += 'bg-slate-900/40 border-slate-800/40 text-slate-500';
          badgeStyle += 'bg-slate-800/60 text-slate-600';
        }
      }

      optionsHtml += `
        <button class="${optionClasses}" onclick="selectAnswer(${q.id}, '${letter}')" ${examSubmitted ? 'disabled' : ''}>
          <div class="flex items-center gap-3">
            <span class="${badgeStyle}">${letter}</span>
            <span class="leading-relaxed">${escapeHtml(optionText)}</span>
          </div>
          ${(showExplanation && letter === q.correctAnswer) ? '<span class="text-emerald-400 font-bold shrink-0">✓ Correct</span>' : ''}
          ${(showExplanation && selectedAnswer === letter && letter !== q.correctAnswer) ? '<span class="text-rose-400 font-bold shrink-0">✗ Your Choice</span>' : ''}
        </button>
      `;
    });

    let explanationHtml = '';
    if (showExplanation) {
      explanationHtml = `
        <div class="p-4 rounded-lg bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1.5 animate-fadeIn">
          <div class="flex items-center gap-2 font-bold text-cyan-400">
            <span>💡 Technical Explanation</span>
            <span class="text-slate-500">&bull;</span>
            <span class="text-white">Answer: ${q.correctAnswer}</span>
          </div>
          <p class="leading-relaxed text-slate-300 font-mono text-xs">${escapeHtml(q.explanation)}</p>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold ${tierBadgeClass}">
            ${q.tier.toUpperCase()}
          </span>
          <span class="text-xs font-mono text-slate-400">Q#${q.id} of 75</span>
        </div>
        ${isAnswered ? '<span class="text-[11px] font-mono text-cyan-400">Answered</span>' : '<span class="text-[11px] font-mono text-slate-600">Pending</span>'}
      </div>
      <div class="text-sm sm:text-base font-bold text-white leading-relaxed">
        ${escapeHtml(q.question)}
      </div>
      <div class="space-y-2 pt-1">
        ${optionsHtml}
      </div>
      ${explanationHtml}
    `;

    container.appendChild(card);
  });
}

function selectAnswer(qid, letter) {
  if (examSubmitted) return;
  userAnswers[qid] = letter;
  renderQuestions();
  renderNavigator();
  updateStats();
}

function updateStats() {
  const answeredCount = Object.keys(userAnswers).length;
  document.getElementById('stat-answered').textContent = answeredCount;

  let correctCount = 0;
  let wrongCount = 0;

  Object.entries(userAnswers).forEach(([qid, ans]) => {
    const q = allQuestions.find(item => item.id === parseInt(qid, 10));
    if (q && q.correctAnswer === ans) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  document.getElementById('stat-correct').textContent = correctCount;
  document.getElementById('stat-wrong').textContent = wrongCount;

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
}

function submitExam() {
  examSubmitted = true;
  clearInterval(examTimer);

  let correctCount = 0;
  let tierStats = { Basic: 0, Intermediate: 0, Advanced: 0 };

  allQuestions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
      tierStats[q.tier]++;
    }
  });

  const percentage = Math.round((correctCount / allQuestions.length) * 100);
  const statusElem = document.getElementById('modal-status');

  document.getElementById('modal-score').textContent = `${correctCount}/75`;
  document.getElementById('modal-percentage').textContent = `${percentage}%`;

  if (percentage >= 70) {
    statusElem.textContent = 'PASSED';
    statusElem.className = 'text-lg font-black text-emerald-400';
  } else {
    statusElem.textContent = 'NEEDS REVIEW';
    statusElem.className = 'text-lg font-black text-rose-400';
  }

  document.getElementById('modal-tier-basic').textContent = `${tierStats.Basic}/25`;
  document.getElementById('modal-tier-intermediate').textContent = `${tierStats.Intermediate}/25`;
  document.getElementById('modal-tier-advanced').textContent = `${tierStats.Advanced}/25`;

  document.getElementById('report-modal').classList.remove('hidden');

  renderQuestions();
  renderNavigator();
  updateStats();
}

function resetAssessment() {
  if (confirm('Are you sure you want to reset all answers and start fresh?')) {
    userAnswers = {};
    examSubmitted = false;
    clearInterval(examTimer);
    if (userMode === 'exam') {
      startExamTimer();
    }
    renderQuestions();
    renderNavigator();
    updateStats();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

