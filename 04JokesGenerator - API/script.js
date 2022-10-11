let jokebtn = document.querySelector("#jokeBtn");

var jokes = ["What’s the best thing about Switzerland?I don’t know, but the flag is a big plus.",
             "I invented a new word! Plagiarism!",
             "Did you hear about the mathematician who’s afraid of negative numbers?He’ll stop at nothing to avoid them.",             "Why do we tell actors to “break a leg? Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor."];

function jokeGenerate() {
    let joketext = Math.floor(Math.random() * (jokes.length));
    document.getElementById('joke').innerHTML = jokes[joketext];
}

jokebtn.addEventListener("click", jokeGenerate);





