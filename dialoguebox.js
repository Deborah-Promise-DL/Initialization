alert("Voting Eligibility");

let age = prompt("Enter your age");

if (age === null || age.trim() === "" || isNaN(age)) {
    alert("You must enter a valid age!");
} else {
    age = Number(age); 
      if (age > 18) {
        let confirmation = confirm("You are above 18. Do you want to proceed?");
        if (confirmation) {
            let name = prompt("Enter your name");
            document.write("Hi " + name + ", you are " + age + " years old." + "<br>");
            document.write("So, you are eligible to vote.");
        }  else {
          alert("User confirmation was canceled");
        }          
      }  else if (age == 18) {
          let confirmation = confirm("You are 18. Do you want to proceed?");
        if (confirmation) {
            let name = prompt("Enter your name");
            document.write("Hi " + name + ", you are " + age + " years old." + "<br>");
            document.write("So, you are eligible to vote.");
        } else {
            alert("User confirmation was canceled");
        }
    } else {
        let confirmation = confirm("You are below 18. Do you want to proceed?");
        if (confirmation) {
            let name = prompt("Enter your name");
            document.write("Hi " + name + ", you are " + age + " years old." + "<br>");
            document.write("So, you are not eligible to vote.");
        } else {
            alert("User confirmation was canceled");
        }
    }
} 

  
  
