const tasks = document.querySelectorAll("#todo-list li");

tasks.forEach(function(task) {

    // Add click event to each task
    task.onclick = function() {

        task.classList.toggle("completed");

    };

});
