const ids = ["ac", "+/-", "%", "÷", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", "^", ".", "="];
const [clear, negative, percent, division, seven, eight, nine, multiplication, four, five, six, minus, one, two, three, plus, zero, exponent, decimal, equal] = ids.map(id => document.getElementById(id));
const numberButtons = [zero, one, two, three, four, five, six, seven, eight, nine];
const oppButtons = [division, multiplication, minus, plus, exponent, percent];
const screen = document.getElementById("screen"), icon = document.getElementById("icon");
let [currentValue, firstValue, secondValue, opperation] = ['', '', '', ''];

const sound = (btn, sound) => btn.addEventListener("click", () => (sound.playbackRate = 1.5, sound.currentTime = btn === equal ? 0 : 0.3, sound.play()));
const boop = document.getElementById("click-sound"), ding = document.getElementById("equals-sound");
const sounds = all => all.forEach(btn => sound(btn, btn === equal ? ding : boop));

const appendOps = [negative, decimal], appendOpsText = ["-", "."];
const oppText = ["/", "X", "-", "+", "^", "%"];

const listen = (btns, fn) => btns.forEach((btn, i) => btn.addEventListener("click", () => fn(i)));

listen(numberButtons, i => (screen.value += i, currentValue = screen.value));
listen(appendOps, i => (!currentValue.includes(appendOpsText[i]) ? currentValue += appendOpsText[i] : null, screen.value = currentValue));

listen(oppButtons, i => {
    if (currentValue) {
        firstValue = currentValue, opperation = oppText[i], screen.value = currentValue = '';
    }
});

clear.addEventListener("click", () => screen.value = currentValue = firstValue = secondValue = '');

equal.addEventListener("click", () => {
    if (firstValue && currentValue) {
        secondValue = currentValue;
        let result;
        switch (opperation) {
            case "+": result = +firstValue + +secondValue; break;
            case "-": result = +firstValue - +secondValue; break;
            case "X": result = +firstValue * +secondValue; break;
            case "/": result = +firstValue / +secondValue; break;
            case "^": result = Math.pow(+firstValue, +secondValue); break;
            case "%": result = +firstValue % +secondValue; break;
        }
        screen.value = firstValue = result, currentValue = secondValue = opperation = '';
    }
});

let counter = 0;
icon.addEventListener("click", () => {
    document.body.style.background = ++counter % 2 ? "linear-gradient(135deg, black, white)" : "", document.body.style.backgroundColor = "rgb(169, 197, 216)";
});

sounds([clear, negative, percent, division, seven, eight, nine, multiplication, four, five, six, minus, one, two, three, plus, zero, exponent, decimal, equal]);
