<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HTTP Self-Assessment Quiz</title>
  <link rel="stylesheet" href="css/style.css" />
  <meta name="description" content="Test your understanding of HTTP history, HTTP/2, and HTTP/3 with this self-assessment quiz." />
</head>
<body>
  <header class="site-header">
    <a class="brand" href="index.html">Web Evolution</a>
    <nav class="main-nav" aria-label="Main">
      <a href="index.html">Home</a>
      <a href="http-history.html">HTTP History</a>
      <a href="http2-http3.html">HTTP/2 & HTTP/3</a>
      <a href="key-concepts.html">Key Concepts</a>
      <a href="references.html">References</a>
      <a href="about.html">About</a>
      <a href="quiz.html" class="active">Quiz</a>
    </nav>
  </header>

  <main class="container">
    <article class="prose">
      <h1>HTTP Self-Assessment Quiz</h1>
      <p>
        Use this quiz to check your understanding of the material from:
        <em>HTTP History</em>, <em>HTTP/2 &amp; HTTP/3</em>, and <em>Key Concepts</em>.
        Answer all questions, then submit to see your score and detailed feedback.
      </p>

      <!-- QUIZ FORM: all questions live inside this form -->
      <form id="http-quiz" class="card quiz-form">
        <!-- Q1: Fill-in-the-blank (stateless) -->
        <fieldset class="question">
          <legend>1. Fill in the blank</legend>
          <p>
            HTTP is a <strong>________</strong> protocol, meaning the server does not
            remember previous requests by default.
          </p>
          <label for="q1-text" class="visually-hidden">Your answer for question 1</label>
          <input type="text" id="q1-text" name="q1-text" autocomplete="off" />
          <div class="feedback" id="q1-feedback"></div>
        </fieldset>

        <!-- Q2: Multiple choice (HTTP/1.1 feature) -->
        <fieldset class="question">
          <legend>2. HTTP history</legend>
          <p>
            Which HTTP version standardized persistent connections and caching directives,
            becoming the long-lived “workhorse” of the web?
          </p>
          <label class="option">
            <input type="radio" name="q2" value="0.9" />
            HTTP/0.9
          </label>
          <label class="option">
            <input type="radio" name="q2" value="1.0" />
            HTTP/1.0
          </label>
          <label class="option">
            <input type="radio" name="q2" value="1.1" />
            HTTP/1.1
          </label>
          <label class="option">
            <input type="radio" name="q2" value="2" />
            HTTP/2
          </label>
          <div class="feedback" id="q2-feedback"></div>
        </fieldset>

        <!-- Q3: Multiple choice (HTTP/2 multiplexing) -->
        <fieldset class="question">
          <legend>3. HTTP/2 feature</legend>
          <p>
            According to the HTTP/2 page, which feature helps reduce latency by allowing
            multiple parallel requests on a single connection?
          </p>
          <label class="option">
            <input type="radio" name="q3" value="cookies" />
            Cookies
          </label>
          <label class="option">
            <input type="radio" name="q3" value="multiplexing" />
            Multiplexing
          </label>
          <label class="option">
            <input type="radio" name="q3" value="dns" />
            DNS caching
          </label>
          <label class="option">
            <input type="radio" name="q3" value="iframes" />
            iFrames
          </label>
          <div class="feedback" id="q3-feedback"></div>
        </fieldset>

        <!-- Q4: Multiple choice (HTTP/3 transport / QUIC) -->
        <fieldset class="question">
          <legend>4. HTTP/3 transport</legend>
          <p>
            The site explains that HTTP/3 runs over QUIC. QUIC, in turn, is built on top of
            which transport protocol?
          </p>
          <label class="option">
            <input type="radio" name="q4" value="tcp" />
            TCP
          </label>
          <label class="option">
            <input type="radio" name="q4" value="udp" />
            UDP
          </label>
          <label class="option">
            <input type="radio" name="q4" value="icmp" />
            ICMP
          </label>
          <label class="option">
            <input type="radio" name="q4" value="ftp" />
            FTP
          </label>
          <div class="feedback" id="q4-feedback"></div>
        </fieldset>

        <!-- Q5: Multi-selection (HTTP/3 benefits: QUIC, TLS 1.3, HoL) -->
        <fieldset class="question">
          <legend>5. Multi-select: HTTP/3 benefits</legend>
          <p>Select <strong>all</strong> statements that are true about HTTP/3.</p>
          <label class="option">
            <input type="checkbox" name="q5" value="quic" />
            It runs over QUIC, which is built on top of UDP.
          </label>
          <label class="option">
            <input type="checkbox" name="q5" value="tls13" />
            It integrates TLS 1.3 directly into the transport layer.
          </label>
          <label class="option">
            <input type="checkbox" name="q5" value="more-tcp" />
            It requires more separate TCP connections per page than HTTP/1.1.
          </label>
          <label class="option">
            <input type="checkbox" name="q5" value="hol" />
            It helps avoid head-of-line blocking at the transport layer.
          </label>
          <div class="feedback" id="q5-feedback"></div>
        </fieldset>

        <!-- ACTION BUTTONS -->
        <div class="quiz-actions">
          <button type="submit" class="btn">Submit Quiz</button>
          <button type="button" id="reset-quiz" class="btn btn-secondary">Reset Quiz</button>
        </div>
      </form>

      <!-- RESULTS SUMMARY WILL BE INJECTED HERE BY JAVASCRIPT -->
      <section id="quiz-results" class="card quiz-results" aria-live="polite"></section>
    </article>
  </main>

  <footer class="site-footer">
    <small>&copy; 2025 Web Evolution • HTTP Quiz</small>
  </footer>

  <!-- JAVASCRIPT: grading logic and dynamic feedback -->
  <script>
    /*
      HTTP Quiz Script
      -----------------
      - Grades 5 questions based on answers from the site content
      - Shows per-question feedback (correct/incorrect + correct answer)
      - Shows overall pass/fail result and total score
      - Provides a Reset button to clear all inputs and results
    */

    document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('http-quiz');
      const resetBtn = document.getElementById('reset-quiz');
      const resultsBox = document.getElementById('quiz-results');

      // Configuration: correct answers (based on milestone 1 content)
      const correctAnswers = {
        q1Text: ['stateless'],   // HTTP is a stateless protocol
        q2: '1.1',               // HTTP/1.1 standardized persistent connections & caching
        q3: 'multiplexing',      // HTTP/2 multiplexing
        q4: 'udp',               // QUIC runs over UDP
        q5: ['quic', 'tls13', 'hol'] // all three must be checked for full credit
      };

      // Helper: normalize free-text input for comparison
      function normalize(text) {
        return text.trim().toLowerCase();
      }

      // Helper: clear per-question feedback and summary results
      function clearFeedback() {
        const feedbackEls = form.querySelectorAll('.feedback');
        feedbackEls.forEach(el => {
          el.textContent = '';
          el.classList.remove('correct', 'incorrect');
        });
        resultsBox.innerHTML = '';
        resultsBox.classList.remove('has-results', 'pass', 'fail');
      }

      // Handle quiz submission: prevent default form submit and grade locally
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearFeedback();

        let score = 0;
        const details = [];

        // ----- Question 1: fill-in-the-blank -----
        const q1Input = document.getElementById('q1-text');
        const q1Value = normalize(q1Input.value);
        const isQ1Correct = correctAnswers.q1Text.includes(q1Value);
        if (isQ1Correct) score += 1;

        const q1Feedback = document.getElementById('q1-feedback');
        q1Feedback.textContent = isQ1Correct
          ? 'Correct: HTTP is a stateless protocol.'
          : 'Incorrect. Correct answer: "stateless".';
        q1Feedback.classList.add(isQ1Correct ? 'correct' : 'incorrect');

        details.push({
          label: 'Question 1',
          correct: isQ1Correct,
          yourAnswer: q1Input.value || '(no answer)',
          correctAnswer: 'stateless'
        });

        // ----- Question 2: multiple-choice (HTTP/1.1) -----
        const q2Feedback = document.getElementById('q2-feedback');
        const q2Selected = form.querySelector('input[name="q2"]:checked');
        let q2User = '(no answer)';
        let isQ2Correct = false;
        if (q2Selected) {
          q2User = 'HTTP/' + q2Selected.value;
          isQ2Correct = q2Selected.value === correctAnswers.q2;
          if (isQ2Correct) score += 1;
        }
        q2Feedback.textContent = isQ2Correct
          ? 'Correct: HTTP/1.1 introduced persistent connections and better caching.'
          : 'Incorrect. Correct answer: HTTP/1.1.';
        q2Feedback.classList.add(isQ2Correct ? 'correct' : 'incorrect');

        details.push({
          label: 'Question 2',
          correct: isQ2Correct,
          yourAnswer: q2User,
          correctAnswer: 'HTTP/1.1'
        });

        // ----- Question 3: multiple-choice (HTTP/2 multiplexing) -----
        const q3Feedback = document.getElementById('q3-feedback');
        const q3Selected = form.querySelector('input[name="q3"]:checked');
        let q3User = '(no answer)';
        let isQ3Correct = false;
        if (q3Selected) {
          q3User = q3Selected.value;
          isQ3Correct = q3Selected.value === correctAnswers.q3;
          if (isQ3Correct) score += 1;
        }
        q3Feedback.textContent = isQ3Correct
          ? 'Correct: multiplexing lets multiple streams share one connection.'
          : 'Incorrect. Correct answer: multiplexing.';
        q3Feedback.classList.add(isQ3Correct ? 'correct' : 'incorrect');

        details.push({
          label: 'Question 3',
          correct: isQ3Correct,
          yourAnswer: q3User,
          correctAnswer: 'multiplexing'
        });

        // ----- Question 4: multiple-choice (HTTP/3 over UDP/QUIC) -----
        const q4Feedback = document.getElementById('q4-feedback');
        const q4Selected = form.querySelector('input[name="q4"]:checked');
        let q4User = '(no answer)';
        let isQ4Correct = false;
        if (q4Selected) {
          // Show a nicer label for UDP
          q4User = q4Selected.value === 'udp'
            ? 'UDP (via QUIC)'
            : q4Selected.value.toUpperCase();
          isQ4Correct = q4Selected.value === correctAnswers.q4;
          if (isQ4Correct) score += 1;
        }
        q4Feedback.textContent = isQ4Correct
          ? 'Correct: HTTP/3 uses QUIC, which is built on top of UDP.'
          : 'Incorrect. Correct answer: UDP (via QUIC).';
        q4Feedback.classList.add(isQ4Correct ? 'correct' : 'incorrect');

        details.push({
          label: 'Question 4',
          correct: isQ4Correct,
          yourAnswer: q4User,
          correctAnswer: 'UDP (via QUIC)'
        });

        // ----- Question 5: multi-selection (HTTP/3 benefits) -----
        const q5Feedback = document.getElementById('q5-feedback');
        const q5Checked = Array.from(
          form.querySelectorAll('input[name="q5"]:checked')
        ).map((el) => el.value);

        // Compare sorted arrays: user must select exactly quic + tls13 + hol
        const expected = correctAnswers.q5.slice().sort().join(',');
        const actual = q5Checked.slice().sort().join(',');
        const isQ5Correct = actual === expected;
        if (isQ5Correct) score += 1;

        const prettyUserAnswers = q5Checked.length
          ? q5Checked
              .map((val) => {
                if (val === 'quic') return 'Runs over QUIC (UDP)';
                if (val === 'tls13') return 'Integrates TLS 1.3 into the transport';
                if (val === 'more-tcp') return 'Requires more TCP connections (incorrect)';
                if (val === 'hol') return 'Helps avoid head-of-line blocking';
                return val;
              })
              .join(', ')
          : '(no answer)';

        q5Feedback.textContent = isQ5Correct
          ? 'Correct: HTTP/3 runs over QUIC, integrates TLS 1.3, and helps avoid head-of-line blocking.'
          : 'Incorrect. Correct answers: runs over QUIC, integrates TLS 1.3, and helps avoid head-of-line blocking.';
        q5Feedback.classList.add(isQ5Correct ? 'correct' : 'incorrect');

        details.push({
          label: 'Question 5',
          correct: isQ5Correct,
          yourAnswer: prettyUserAnswers,
          correctAnswer:
            'Runs over QUIC; integrates TLS 1.3; helps avoid head-of-line blocking.'
        });

        // ----- Overall result: compute percentage + pass/fail -----
        const totalQuestions = 5;
        const percentage = Math.round((score / totalQuestions) * 100);
        const passed = score >= 3; // pass threshold

        // Build summary HTML
        let summaryHtml = `
          <h2>Quiz Results</h2>
          <p class="overall">
            <span class="badge ${passed ? 'badge-pass' : 'badge-fail'}">
              ${passed ? 'Pass' : 'Fail'}
            </span>
            You scored <strong>${score}</strong> out of <strong>${totalQuestions}</strong>
            (${percentage}%).
          </p>
          <ul class="detail-list">
        `;

        details.forEach((d) => {
          summaryHtml += `
            <li class="detail-item ${d.correct ? 'detail-correct' : 'detail-incorrect'}">
              <h3>${d.label}</h3>
              <p><strong>Result:</strong> ${d.correct ? 'Correct ✅' : 'Incorrect ❌'}</p>
              <p><strong>Your answer:</strong> ${d.yourAnswer}</p>
              <p><strong>Correct answer:</strong> ${d.correctAnswer}</p>
            </li>
          `;
        });

        summaryHtml += '</ul>';

        // Inject summary HTML into the page and style it
        resultsBox.innerHTML = summaryHtml;
        resultsBox.classList.add('has-results', passed ? 'pass' : 'fail');
      });

      // Reset button: clear all inputs and feedback without reloading the page
      resetBtn.addEventListener('click', function () {
        form.reset();
        clearFeedback();
      });
    });
  </script>
</body>
</html>
