const pnjMiddleSchool = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
];

const pnjElemSchool = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
];

function shuffleArray (arr: any[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

function getPicker (arr: string[]) {
    let alreadyPicked: string[] = [];
    shuffleArray(arr)
    const picker = () => {
        if (arr.length == 0) {
            shuffleArray(alreadyPicked);
            arr = alreadyPicked.slice();
            alreadyPicked = [];
        }
        const student = arr.pop();
        alreadyPicked.push(student);
        return student;
    }
    return picker;
}

const pnjMiddlePicker = getPicker(pnjMiddleSchool)
const pnjElemPicker = getPicker(pnjElemSchool);

input.onButtonPressed(Button.A, () => 
    basic.showString(pnjMiddlePicker()));

input.onButtonPressed(Button.B, () => 
    basic.showString(pnjElemPicker()));

