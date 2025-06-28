document.getElementById('routineForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "<p>AI가 당신만의 루틴을 생성 중입니다... 🧠💪</p>";

  setTimeout(() => {
    resultDiv.innerHTML = `
      <h3>🎯 오늘의 루틴</h3>
      <ul>
        <li>아침: 계란 2개 + 닭가슴살 샐러드</li>
        <li>운동: 스쿼트 3세트, 푸쉬업 3세트, 플랭크 1분</li>
        <li>저녁: 단백질 쉐이크 + 고구마</li>
      </ul>
    `;
  }, 1500);
});
