// JavaScript array for assignee options
const assignees = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Williams"];
let index;
// Function to populate the assignee select options
function populateAssigneeOptions() {
  const assigneeSelect = document.getElementById("assigneeSelect");
  assignees.forEach((assignee) => {
    const option = document.createElement("option");
    option.text = assignee;
    assigneeSelect.add(option);
  });
}

// Event listener for the + icon click event
const addIcon = document.querySelector(".add-icon");
addIcon.addEventListener("click", () => {
  populateAssigneeOptions();
  const modal = new bootstrap.Modal(document.getElementById("addModal"));
  modal.show();
});


// Function to create an issue container
function createIssueContainer(issue, assignee) {
    const issueContainer = document.getElementById("issueContainer");
  
    // Create container elements
    const container = document.createElement("div");
    container.classList.add("issue-item");
  
    const profilePicture = document.createElement("div");
    profilePicture.classList.add("profile-picture");
  
    const issueDetails = document.createElement("div");
    issueDetails.classList.add("issue-details");
  
    const name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = "Prince Darko";
  
    const actions = document.createElement("div");
    actions.classList.add("actions");
  
    const replyIcon = document.createElement("i");
    replyIcon.classList.add("fas", "fa-reply");
  
  
  
  
    const deleteMenuItem = document.createElement("a");
    deleteMenuItem.classList.add("dropdown-item");
    deleteMenuItem.setAttribute("href", "#");
    deleteMenuItem.textContent = "Delete";
  
    const updateMenuItem = document.createElement("a");
    updateMenuItem.classList.add("dropdown-item");
    updateMenuItem.setAttribute("href", "#");
    updateMenuItem.textContent = "Update";
  
    // Construct the container structure
 
    actions.appendChild(replyIcon);
    name.appendChild(actions);
    issueDetails.appendChild(name);
    issueDetails.innerHTML += `<span class="issue-value">${issue}</span><br>`;
    issueDetails.innerHTML += `<span class="assignee">Assignee: ${assignee}</span>`;
    container.appendChild(profilePicture);
    container.appendChild(issueDetails);
    issueContainer.appendChild(container);
  
  
    const downArrowIconc = document.getElementsByClassName("fa-reply");


    Array.from(downArrowIconc).forEach((arrow, i) => {
        arrow.addEventListener("click", (event) => {
            console.log('we working oo tom')
            const modal = new bootstrap.Modal(document.getElementById("replyModal"));
            modal.show()
            index = i
            console.log(i)
        });
    })
  
   
  }
  

  
  
  

  // Event listener for the issue form submission
  const issueForm = document.getElementById("issueForm");
  const replyForm = document.getElementById("replyForm");
  
  // Event listener for the issue form submission
  issueForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const issueInput = document.getElementById("issueInput").value;
    const assigneeSelect = document.getElementById("assigneeSelect");
    const assignee = assigneeSelect.options[assigneeSelect.selectedIndex].text;
    
    // Create the issue container
    createIssueContainer(issueInput, assignee);
  
    // Reset the form and hide the modal
    issueForm.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("addModal"));
    modal.hide();
  });

// Event listener for the issue form submission
replyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const issueInput = document.getElementById("replyInput").value;
    
    
    // Create the issue container
    createReplyContainer(issueInput);
    
    // Reset the form and hide the modal
    replyForm.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("replyModal"));
    modal.hide();
    const backdrop = document.querySelector('.modal-backdrop');
    document.body.style.overflow = "";  // Remove the "overflow" property


if (backdrop) {
  backdrop.remove();
}
 
    });


    // Function to create a reply container
function createReplyContainer(input) {
    const container = document.createElement("div");
    container.classList.add("reply-item");
  
    const profilePicture = document.createElement("div");
    profilePicture.classList.add("profile-picture");
     
    const issueDetails = document.createElement("div");
    issueDetails.classList.add("issue-details");
  
    const name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = "Happy Prince";

    issueDetails.appendChild(name);
    issueDetails.innerHTML += `<span class="issue-value">${input}</span><br>`;
  
    // const replyMessage = document.createElement("p");
    // replyMessage.classList.add("reply-message");
    // replyMessage.textContent = input;
  
    container.appendChild(profilePicture);
    container.appendChild(issueDetails);
    // container.appendChild(replyMessage);
  
    const issueContainer = document.getElementById("issueContainer");
    const helloElements = issueContainer.querySelectorAll(".issue-item");
    // helloElements[index].appendChild(container);

    if(helloElements[index + 1]){
        issueContainer.insertBefore(container, helloElements[index+1]);
    }else{
        issueContainer.appendChild(container);

    }
  }

