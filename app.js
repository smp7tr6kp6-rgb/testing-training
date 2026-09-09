const tasks = [
	{ title: "Read the Git guide", done: true },
	{ title: "Create a practice branch", done: false },
	{ title: "Make a small change", done: false },
];

function addTask(title) {
	tasks.push({ title, done: false });
}

function completeTask(title) {
	const task = tasks.find((item) => item.title === title);

	if (task) {
		task.done = true;
	}
}

function printSummary() {
	const completed = tasks.filter((task) => task.done).length;
	console.log(`Completed ${completed} of ${tasks.length} tasks.`);

	tasks.forEach((task, index) => {
		const status = task.done ? "x" : " ";
		console.log(`${index + 1}. [${status}] ${task.title}`);
	});
}

addTask("Review the diff");
completeTask("Create a practice branch");
printSummary();
