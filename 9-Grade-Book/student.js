const avSpan = document.getElementById("average");

const addStudent = document.getElementById("add");
const deleteStudent = document.getElementById("delete");
//storage system because I haven't learned objects yet.

let studentIDs = [];
let studentElements = [];
let studentPassFail = [];
//autoincrementing number for every student added.
let autoNumID = 1;
//text for our student cards!!
const studentNames = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jack", 
    "Karen", "Liam", "Megan", "Nathan", "Olivia", "Paul", "Quinn", "Rachel", "Steve", "Tina",
    "Uma", "Violet", "Will", "Xander", "Yara", "Zane", "Aaron", "Bella", "Caleb", "Diana",
    "Ethan", "Fiona", "George", "Helen", "Ian", "Julia", "Kyle", "Lila", "Matt", "Nina",
    "Oscar", "Penny", "Quincy", "Rita", "Sam", "Tara", "Ursula", "Victor", "Wes", "Xenia", 
    "Yvonne", "Zack", "Aiden", "Brianna", "Cole", "Daisy", "Elijah", "Faith", "Gavin", "Holly", 
    "Isaiah", "Jade", "Kurt", "Leah", "Miles", "Nora", "Owen", "Paige", "Quentin", "Rose", 
    "Simon", "Tessa", "Ulric", "Val", "Warren", "Ximena", "Yosef", "Zoey", "Andy", "Brandon",
    "Cassie", "Derek", "Eva", "Finn", "Gina", "Henry", "Ivy", "Jonah", "Kate", "Luke", 
    "Molly", "Nick", "Opal", "Peter", "Quin", "Ryan", "Sarah", "Trent"
  ];
  let studentGrades = [];
  const quirks = [
    "Stares at teacher’s cleavage during class",
    "Always raises hand but never answers",
    "Snores loudly during every history lecture",
    "Writes notes in invisible ink for fun",
    "Spins pencils like a ninja during tests",
    "Chews gum like it’s a rock concert",
    "Talks to themselves while solving equations",
    "Only answers in riddles during class discussions",
    "Doodles masterpieces instead of taking notes",
    "Says 'bless you' for every cough",
    "Spells name backwards on every assignment",
    "Asks for homework extensions daily, without fail",
    "Refuses to sit anywhere but the floor",
    "Wears sunglasses indoors because 'it’s too bright'",
    "Laughs uncontrollably at their own jokes",
    "Sits backward in chair like it's cool",
    "Brings snacks but never shares with anyone",
    "Hums movie soundtracks during every quiet moment",
    "Pretends to be invisible when called on",
    "Keeps a secret stash of cookies everywhere",
    "Writes poems on the classroom whiteboard secretly",
    "Constantly adjusts imaginary glasses on their face",
    "Befriends every bug that crawls by",
    "Always pretends to mishear the teacher's name",
    "Dances in place while waiting for instructions",
    "Asks deep philosophical questions about snack time",
    "Brings a blanket to class and naps",
    "Writes essay titles in emojis only",
    "Uses class time to practice magic tricks",
    "Creates paper airplanes out of important documents",
    "Asks random trivia questions during math tests",
    "Speaks exclusively in third-person during presentations",
    "Gives teachers random nicknames, never remembers real names",
    "Draws smiley faces on all quiz answers",
    "Wears mismatched socks every single day",
    "Answers questions with song lyrics only",
    "Quotes movies instead of reciting lessons",
    "Pretends to understand foreign languages fluently",
    "Carries a rubber chicken as emotional support",
    "Talks like a pirate on Thursdays only",
    "Laughs loudly at every whisper or mumble",
    "Types loudly on an invisible keyboard daily",
    "Brings fake awards to show-and-tell constantly",
    "Asks for extra credit on every assignment",
    "Brings a giant water bottle, never drinks it",
    "Talks to their pen like it’s alive",
    "Sings 'Happy Birthday' to themselves every day",
    "Brings glitter to class for no reason",
    "Uses sticky notes as fashion accessories"
  ];
  const nameTxt = document.getElementById("name");
  const gradeTxt = document.getElementById("grade");
  const quirkTxt = document.getElementById("quirk");
  let rand = 0;
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//these two function push and pop student Id's onto our array, our array will be usefull for laying out our student cards.
function addStudentID() {
    addStudent.addEventListener("click", () => {
        studentIDs.push(autoNumID);
        let [randGrade, randNumGrade] = getGrade();
        let randName = getRandomElement(studentNames);
        let randQuirk = getRandomElement(quirks);
        
        const student = document.createElement("p");
        student.setAttribute("class", "studentCard");

        studentGrades.push(randNumGrade);
        studentNames.push(randName);
        quirks.push(randQuirk);
        
        avSpan.innerHTML = getAverageGrade();
        
        student.innerHTML = randGrade
        document.querySelector(".studentDisplay").appendChild(student);
        studentElements.push(student);

        student.addEventListener("mouseover", () => {
            nameTxt.innerHTML = randName;
            gradeTxt.innerHTML = randNumGrade;
            quirkTxt.innerHTML = randQuirk;
        });
        student.addEventListener("mouseout",()=>{
            nameTxt.innerHTML ="<strong>Name:</strong>";
            gradeTxt.innerHTML ="Grade:";
            quirkTxt.innerHTML ="About:";
        })

        autoNumID++;
        console.log(studentGrades);
        console.log(studentIDs);
        console.log(studentElements);
    });
}
function deleteStudentID() {
    deleteStudent.addEventListener("click", () => {
        if (studentIDs.length > 0) {
            studentIDs.pop();
            studentGrades.pop();
            studentNames.pop();
            quirks.pop();
            const lastStudentElement = studentElements.pop();
            avSpan.innerHTML = getAverageGrade();
            document.querySelector(".studentDisplay").removeChild(lastStudentElement);
            autoNumID--;
        }
    });
}

function getGrade() {
    let numberGrade = Math.floor(Math.random() * (100 - 50 + 1)) + 50; 
    let grade = "";

    if (numberGrade >= 90) {
        grade = "A";
    } else if (numberGrade >= 80) {
        grade = "B";
    } else if (numberGrade >= 70) {
        grade = "C";
    } else if (numberGrade >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    return [grade, numberGrade];
}

function getAverageGrade(){
    let total = 0
    for(let i = 0;i<studentGrades.length;i++){
        total+= studentGrades[i]
    }
    return Math.floor(total/studentGrades.length);
}

    

addStudentID();
deleteStudentID();
listenForStudentHover();