const pnjMiddleSchool = [
    "Jason",
    "Tahj",
    "Kalel",
    "Jacey",
    "Layla",
    "Sophia",
    "Dante",
    "Lala",
    "Kloe"
];

const pnjElemSchool = [
    "Garvin",
    "Malakai",
    "Ryan",
    "Jacob",
    "Jayla",
    "Jaslene",
    "Veronica",
    "William",
    "Alina",
    "Ethan",
    "Jaelyn",
    "Yaniah"
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

let pickedStudent = "";

basic.forever(() => basic.showString(pickedStudent, 65));

input.onButtonPressed(Button.A, () => pickedStudent = pnjMiddlePicker());

input.onButtonPressed(Button.B, () => pickedStudent = pnjElemPicker());

