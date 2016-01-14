function isIRAeligible(money) {
    var input = document.getElementById('answerLabel');
    input.value = "Yes";
}

function evalFinance() {
    var salary = document.getElementById("salary").value;
    var age = document.getElementById("age").value;
    var workretirementplan = document.getElementById("workretirementplan").checked;


    var answer = document.getElementById('answerLabel');
    answer.value = salary + "," + age + "," + workretirementplan;
}