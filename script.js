let categories = [
    {
      title: "Personal",
      img: "8595932.png",
    },
    {
      title: "Work",
      img: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?cs=srgb&dl=pexels-energepic-com-27411-313690.jpg&fm=jpg",
    },
    {
      title: "Shopping",
      img: "https://w7.pngwing.com/pngs/75/407/png-transparent-hand-holding-shopping-bag-silhouette-illustration-online-shopping-shopping-bag-logo-coupon-business-shopping-bags-business-woman-rectangle-retail-thumbnail.png",
    },
    {
      title: "Coding",
      img: "data:image/jpeg;base64,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",
    },
    {
      title: "Health",
      img: "https://media.istockphoto.com/id/1448453929/photo/cardiogram-pulse-trace-with-red-heart-on-pastel-blue-background.jpg?s=612x612&w=0&k=20&c=vROYnUeWCFJQ7uAV0Z_H1gQcwtBTygDg0aIB2YggbY0=",
    },
    {
      title: "Fitness",
      img: "https://e7.pngegg.com/pngimages/982/350/png-clipart-abdominal-exercise-fitness-centre-crunch-physical-fitness-fitness-tshirt-fitness-thumbnail.png",
    },
    {
      title: "Education",
      img: "data:image/jpeg;base64,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",
    },
    {
      title: "Finance",
      img: "data:image/png;base64,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",
    },
  ];
  
  let tasks = [
    {
      id: 1,
      task: "Go to market",
      category: "Shopping",
      completed: false,
    },
    {
      id: 2,
      task: "Read a chapter of a book",
      category: "Personal",
      completed: false,
    },
    {
      id: 3,
      task: "Prepare presentation for meeting",
      category: "Work",
      completed: false,
    },
    {
      id: 4,
      task: "Complete coding challenge",
      category: "Coding",
      completed: false,
    },
    {
      id: 5,
      task: "Take a 30-minute walk",
      category: "Health",
      completed: false,
    },
    {
      id: 6,
      task: "Do a 20-minute HIIT workout",
      category: "Fitness",
      completed: false,
    },
    {
      id: 7,
      task: "Watch an educational video online",
      category: "Education",
      completed: false,
    },
    {
      id: 8,
      task: "Review monthly budget",
      category: "Finance",
      completed: false,
    },
    {
      id: 9,
      task: "Buy groceries for the week",
      category: "Shopping",
      completed: false,
    },
    {
      id: 10,
      task: "Write in a journal",
      category: "Personal",
      completed: false,
    },
    {
      id: 11,
      task: "Send follow-up emails",
      category: "Work",
      completed: false,
    },
    {
      id: 12,
      task: "Work on a coding side project",
      category: "Coding",
      completed: false,
    },
    {
      id: 13,
      task: "Try a new healthy recipe",
      category: "Health",
      completed: false,
    },
    {
      id: 14,
      task: "Attend a yoga class",
      category: "Fitness",
      completed: false,
    },
    {
      id: 15,
      task: "Read an article about a new topic",
      category: "Education",
      completed: false,
    },
    {
      id: 16,
      task: "Set up automatic bill payments",
      category: "Finance",
      completed: false,
    },
    // Additional tasks for each category
    {
      id: 17,
      task: "Buy new clothes",
      category: "Shopping",
      completed: false,
    },
    {
      id: 18,
      task: "Meditate for 10 minutes",
      category: "Personal",
      completed: false,
    },
    {
      id: 19,
      task: "Prepare agenda for team meeting",
      category: "Work",
      completed: false,
    },
    {
      id: 20,
      task: "Debug a software issue",
      category: "Coding",
      completed: false,
    },
    {
      id: 21,
      task: "Try a new recipe for lunch",
      category: "Health",
      completed: false,
    },
    {
      id: 22,
      task: "Go for a run",
      category: "Fitness",
      completed: false,
    },
    {
      id: 23,
      task: "Learn a new language online",
      category: "Education",
      completed: false,
    },
    {
      id: 24,
      task: "Read about history",
      category: "Education",
      completed: false,
    },
    {
      id: 25,
      task: "Review investment portfolio",
      category: "Finance",
      completed: false,
    },
    // Add more tasks for each category as desired
  ];
  
  // Define functions
  const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
  const getLocal = () => {
    const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
    if (tasksLocal) {
      tasks = tasksLocal;
    }
  };
  
  const toggleScreen = () => {
    screenWrapper.classList.toggle("show-category");
  };
  
  const updateTotals = () => {
    const categoryTasks = tasks.filter(
      (task) =>
        task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    numTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
  };
  
  const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
      const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === category.title.toLowerCase()
      );
      const div = document.createElement("div");
      div.classList.add("category");
      div.addEventListener("click", () => {
        screenWrapper.classList.toggle("show-category");
        selectedCategory = category;
        updateTotals();
        categoryTitle.innerHTML = category.title;
        categoryImg.src = `${category.img}`;
        renderTasks();
      });
  
      div.innerHTML = `
                    <div class="left">
                  <img src="${category.img}"
                   alt="${category.title}"
                    />
                  <div class="content">
                    <h1>${category.title}</h1>
                    <p>${categoryTasks.length} Tasks</p>
                  </div>
                </div>
                <div class="options">
                  <div class="toggle-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </div>
                </div>
      `;
  
      categoriesContainer.appendChild(div);
    });
  };
  
  const renderTasks = () => {
    tasksContainer.innerHTML = "";
    const categoryTasks = tasks.filter(
      (task) =>
        task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    if (categoryTasks.length === 0) {
      tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
    } else {
      categoryTasks.forEach((task) => {
        const div = document.createElement("div");
        div.classList.add("task-wrapper");
        const label = document.createElement("label");
        label.classList.add("task");
        label.setAttribute("for", task.id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = task.id;
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
          const index = tasks.findIndex((t) => t.id === task.id);
          tasks[index].completed = !tasks[index].completed;
          saveLocal();
        });
        div.innerHTML = `
        <div class="delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                `;
        label.innerHTML = `
                <span class="checkmark"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>${task.task}</p>
          `;
        label.prepend(checkbox);
        div.prepend(label);
        tasksContainer.appendChild(div);
  
        const deleteBtn = div.querySelector(".delete");
        deleteBtn.addEventListener("click", () => {
          const index = tasks.findIndex((t) => t.id === task.id);
          tasks.splice(index, 1);
          saveLocal();
          renderTasks();
        });
      });
  
      renderCategories();
      updateTotals();
    }
  };
  
  const toggleAddTaskForm = () => {
    addTaskWrapper.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
  };
  
  const addTask = (e) => {
    e.preventDefault();
    const task = taskInput.value;
    const category = categorySelect.value;
  
    if (task === "") {
      alert("Please enter a task");
    } else {
      const newTask = {
        id: tasks.length + 1,
        task,
        category,
        completed: false,
      };
      taskInput.value = "";
      tasks.push(newTask);
      saveLocal();
      toggleAddTaskForm();
      renderTasks();
    }
  };
  
  // Initialize variables and DOM elements
  let selectedCategory = categories[0];
  const categoriesContainer = document.querySelector(".categories");
  const screenWrapper = document.querySelector(".wrapper");
  const menuBtn = document.querySelector(".menu-btn");
  const backBtn = document.querySelector(".back-btn");
  const tasksContainer = document.querySelector(".tasks");
  const numTasks = document.getElementById("num-tasks");
  const categoryTitle = document.getElementById("category-title");
  const categoryImg = document.getElementById("category-img");
  const categorySelect = document.getElementById("category-select");
  const addTaskWrapper = document.querySelector(".add-task");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const taskInput = document.getElementById("task-input");
  const blackBackdrop = document.querySelector(".black-backdrop");
  const addBtn = document.querySelector(".add-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const totalTasks = document.getElementById("total-tasks");
  
  // Attach event listeners
  menuBtn.addEventListener("click", toggleScreen);
  backBtn.addEventListener("click", toggleScreen);
  addTaskBtn.addEventListener("click", toggleAddTaskForm);
  blackBackdrop.addEventListener("click", toggleAddTaskForm);
  addBtn.addEventListener("click", addTask);
  cancelBtn.addEventListener("click", toggleAddTaskForm);
  
  // Render initial state
  getLocal();
  renderTasks();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
  });
  