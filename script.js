document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("commandInput");

    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const command = inputField.value.trim();
            handleCommand(command);
            inputField.value = ""; // Clear the input
        }
    });
});

// Function to handle commands
function handleCommand(command) {
    switch (command.toLowerCase()) {
        case "cd home":
            window.location.href = "index.html";
            break;
        case "cd about":
            window.location.href = "about.html";
            break;
        case "cd projects":
            window.location.href = "projects.html";
            break;
        case "cd blog":
            window.location.href = "blog.html";
            break;
        case "ls":
            alert("Available commands: cd about, cd projects, cd blog");
            break;
        case "help":
            alert("Use 'cd <tab_name>' to navigate between sections. Use 'ls' to list options.");
            break;
        default:
            alert("Command not recognized. Type 'help' for a list of commands.");
    }
}

