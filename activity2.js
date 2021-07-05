function back() {
    window.location= "activatie_1.html.";
}
function getScorer() {
    score= localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1> Score:" + score +"</h1>";
}