
document.getElementById('routineForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const age = parseInt(document.getElementById('age').value);
  const weight = parseInt(document.getElementById('weight').value);
  const goal = document.getElementById('goal').value;

  let routine = "";

  if (goal === "체중 감량") {
    if (age < 20 || weight < 60) {
      routine = "가벼운 유산소 + 샐러드 위주 식단";
    } else {
      routine = "중강도 인터벌 트레이닝 + 고단백 저탄수 식단";
    }
  } else if (goal === "근육 증가") {
    if (weight < 70) {
      routine = "기본 근력운동 3세트 + 단백질 보충 식단";
    } else {
      routine = "고강도 중량운동 + 크레아틴 & 단백질 식단";
    }
  } else {
    routine = "가벼운 스트레칭 + 영양 밸런스 식단";
  }

  document.getElementById('result').innerHTML = `
    <h3>🎯 맞춤 루틴</h3>
    <p>${routine}</p>
  `;
});
