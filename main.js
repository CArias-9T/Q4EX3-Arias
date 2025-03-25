function gradeVerify() {

    let grade = document.getElementById('gradeinput').value;

    // if-else statements
    if (grade < 65) {
        document.getElementById('demo').innerHTML = 'You failed your classes.';
    } 
    else if (grade < 75) {
        document.getElementById('demo').innerHTML = 'You passed with a below average score.';
    }
    else if (grade < 80) {
        document.getElementById('demo').innerHTML = 'You passed with an average score.';
    }
    else {
        document.getElementById('demo').innerHTML = 'You passed with an above average score.';
    }
    

}
