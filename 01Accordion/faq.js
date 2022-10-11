const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  }
];


faqQuestion = ["Who are we?",,"Who are we?",,"Who are we?",]

let accordianBody;
const faqs = [];

function showFaq(questionList) {
  questionList.forEach((set) => {
    const questionDiv = document.createElement("div");
    const questionDivHeader = document.createElement("div");
    const questionDivH3 = document.createElement("h3");
    const answerDivParagrah = document.createElement("p");
    const showButton = document.createElement("button");

    questionDivHeader.classList = ["faq_header"];
    questionDivH3.textContent = set["question"];
    showButton.textContent = "+";
    showButton.classList = ["show_btn"];
    answerDivParagrah.textContent = set["answer"];
    questionDivHeader.appendChild(questionDivH3);
    questionDivHeader.appendChild(showButton);


    questionDiv.appendChild(questionDivHeader);
    questionDiv.appendChild(answerDivParagrah);
    questionDiv.id = set["id"];
    //questionDiv.innerHTML = `<h3>${set['question']}</h3><p class="hidden">${set['answer']}</p>`;
    questionDiv.classList = ['faq'];
    document.getElementsByClassName("accordian_body")[0].appendChild(questionDiv);
    questionDiv.addEventListener("click", (element) => {
        element.target.parentElement.children[1].classList.toggle("hidden");
      });
    //window.document.documentElement.appendChild(answerParagraph);
  })
}

// function createFaq() {

// }

// function btnStatusUpdate() {

// }

showFaq(faqData);
