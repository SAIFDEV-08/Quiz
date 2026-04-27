const masterBank = [
  { u: 1, q: "0.25 as a percentage is", o: ["2.5%", "25%", "50%", "75%"], a: 1 },

  { u: 1, q: "45 is what percent of 180?", o: ["20%", "25%", "30%", "35%"], a: 1 },

  { u: 1, q: "10% of 2 kg equals", o: ["100 g", "200 g", "250 g", "500 g"], a: 1 },

  { u: 1, q: "Average of 5, 10, 15 is", o: ["8", "10", "12", "15"], a: 1 },

  { u: 1, q: "Average of first 20 natural numbers is", o: ["9.5", "10", "10.5", "11"], a: 2 },

  { u: 1, q: "HCF of 18 and 24 is", o: ["3", "6", "9", "12"], a: 1 },

  { u: 1, q: "LCM of 10 and 15 is", o: ["20", "25", "30", "40"], a: 2 },

  { u: 1, q: "LCM of 6, 8, 12 is", o: ["12", "18", "24", "48"], a: 2 },

  { u: 1, q: "HCF of 36 and 54 is", o: ["6", "9", "18", "27"], a: 2 },

  { u: 1, q: "Two numbers are co-prime if their HCF is", o: ["0", "1", "2", "Same"], a: 1 },

  { u: 1, q: "Square, Rectangle, Triangle, Cube", o: ["Square", "Rectangle", "Triangle", "Cube"], a: 3 },

  { u: 1, q: "Pen, Pencil, Eraser, Book", o: ["Pen", "Pencil", "Eraser", "Book"], a: 3 },

  { u: 1, q: "Distance covered in 3 hours at 50 km/hr is", o: ["120 km", "140 km", "150 km", "180 km"], a: 2 },

  { u: 1, q: "Relative speed of two trains moving opposite at 40 & 60 km/hr is", o: ["20", "60", "80", "100"], a: 3 },

  { u: 1, q: "Time = Distance / ?", o: ["Speed", "Power", "Work", "Force"], a: 0 },

  { u: 1, q: "A man walks at 5 km/hr for 2 hrs. Distance is", o: ["8 km", "9 km", "10 km", "12 km"], a: 2 },

  { u: 1, q: "A and B together finish work in 12 days. Work per day is", o: ["1/10", "1/12", "1/15", "1/20"], a: 1 },

  { u: 1, q: "6 men complete work in 12 days. Men needed in 6 days", o: ["6", "10", "12", "15"], a: 2 },

  { u: 1, q: "Work and time are", o: ["Directly proportional", "Inversely proportional", "Equal", "Independent"], a: 1 },

  { u: 1, q: "A does work in 20 days, B in 30 days. Together they take", o: ["10", "12", "15", "18"], a: 1 },

  { u: 1, q: "Father’s age is twice son’s age. If son is 15, father is", o: ["25", "30", "35", "40"], a: 1 },

  { u: 1, q: "Average age of 4 people is 30. Total age is", o: ["90", "100", "110", "120"], a: 3 },

  { u: 1, q: "Age of a person 10 years ago was 20. Present age is", o: ["25", "28", "30", "35"], a: 2 },

  { u: 1, q: "If present age is x, age after 5 years is", o: ["x−5", "x", "x+5", "5x"], a: 2 },

  { u: 1, q: "Ratio of 15 and 20 is", o: ["3:4", "4:3", "2:3", "5:6"], a: 0 },

  { u: 1, q: "Ratio of 500 g to 2 kg is", o: ["1:4", "1:2", "2:1", "4:1"], a: 0 },

  { u: 1, q: "Simplest form of 12:18 is", o: ["3:4", "2:3", "4:5", "6:9"], a: 1 },

  { u: 1, q: "SI on ₹1,000 at 10% for 1 year is", o: ["₹50", "₹100", "₹150", "₹200"], a: 1 },

  { u: 1, q: "Time in SI is measured in", o: ["Days", "Months", "Years", "Hours"], a: 2 },

  { u: 1, q: "Rate of interest is expressed in", o: ["Rupees", "Percentage", "Ratio", "Time"], a: 1 },

  { u: 1, q: "A, C, E, G, ?", o: ["H", "I", "J", "K"], a: 1 },

  { u: 1, q: "Z, X, V, T, ?", o: ["R", "S", "P", "Q"], a: 0 },

  { u: 1, q: "B, D, G, K, ?", o: ["O", "M", "N", "P"], a: 0 },

  { u: 1, q: "@, #, $, %, ?", o: ["&", "*", "^", "!"], a: 0 },

  { u: 1, q: "M, N, P, Q, S, ?", o: ["T", "U", "R", "V"], a: 0 },

  { u: 1, q: "a, c, f, j, ?", o: ["n", "o", "p", "q"], a: 0 },

  { u: 1, q: "Statement: Smoking is injurious to health. Argument: It causes cancer.", o: ["Strong", "Weak", "Irrelevant", "False"], a: 0 },

  { u: 1, q: "Statement: Schools should have uniforms. Argument: It creates equality.", o: ["Strong", "Weak", "False", "Illogical"], a: 0 },

  { u: 1, q: "An article is bought for ₹800 and sold for ₹1,000. Profit %?", o: ["20%", "22%", "25%", "30%"], a: 2 },

  { u: 1, q: "Selling price is ₹1,200 and gain is 20%. Cost price?", o: ["₹900", "₹1,000", "₹1,050", "₹1,100"], a: 1 },

  { u: 1, q: "CP = ₹500, SP = ₹450. Loss %?", o: ["5%", "8%", "10%", "15%"], a: 2 },

  { u: 1, q: "Number Series: 1,1,2,3,5,?", o: ["6", "7", "8", "9"], a: 2 },

  { u: 1, q: "Number Series: 2,6,18,54,?", o: ["108", "162", "216", "324"], a: 1 },

  { u: 1, q: "Number Series: 7,14,28,?,112", o: ["42", "49", "56", "84"], a: 2 },

  { u: 1, q: "Find odd: 2,4,6,9,8", o: ["2", "4", "6", "9"], a: 3 },

  { u: 1, q: "Find odd: Apple, Mango, Banana, Carrot", o: ["Apple", "Mango", "Banana", "Carrot"], a: 3 },

  { u: 1, q: "Find odd: 3,5,7,9", o: ["3", "5", "7", "9"], a: 3 }
]
let activeSet = [];
let responses = [];
let cursor = 0;
let time = 5400;

function startExam(setNum) {
    let pool = (setNum === 1) ? masterBank.filter(x => x.u <= 3) : masterBank;
    activeSet = pool.sort(() => 0.5 - Math.random()).slice(0, 50);
    responses = new Array(activeSet.length).fill(null);
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('exam-page').classList.remove('hidden');
    render();
    setInterval(() => {
        time--;
        let m = Math.floor(time / 60);
        let s = time % 60;
        document.getElementById('timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if(time <= 0) finish();
    }, 1000);
}

function render() {
    const data = activeSet[cursor];
    document.getElementById('q-num').innerText = cursor + 1;
    document.getElementById('unit-label').innerText = `Unit ${data.u}`;
    document.getElementById('question-text').innerText = data.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    data.o.forEach((txt, i) => {
        const div = document.createElement('div');
        div.className = 'custom-radio';
        div.innerHTML = `<input type="radio" name="exam-q" id="opt${i}" ${responses[cursor] === i ? 'checked' : ''}><label for="opt${i}">${txt}</label>`;
        div.onclick = () => responses[cursor] = i;
        container.appendChild(div);
    });
    document.getElementById('prev-btn').style.opacity = cursor === 0 ? '0' : '1';
    if(cursor === activeSet.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }
}

function nav(dir) {
    cursor += dir;
    render();
}

function finish() {
    let score = 0;
    activeSet.forEach((q, i) => { if(responses[i] === q.a) score++; });
    document.getElementById('exam-page').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');
    document.getElementById('res-percent').innerText = `${Math.round((score / activeSet.length) * 100)}%`;
    document.getElementById('res-raw').innerText = `${score}/${activeSet.length}`;
}