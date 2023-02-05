window.addEventListener('load', () => {
	const form = document.querySelector("#new-task");
	const input = document.querySelector("#new-task-input");
	const list_item = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content = document.createElement('div');
		task_content.classList.add('content');

		task_el.appendChild(task_content);

		const task_input = document.createElement('input');
		task_input.classList.add('text');
		task_input.type = 'text';
		task_input.value = task;
		task_input.setAttribute('readonly', 'readonly');

		task_content.appendChild(task_input);

		const task_actions = document.createElement('div');
		task_actions.classList.add('actions');
		
		const edit_task = document.createElement('button');
		edit_task.classList.add('edit');
		edit_task.innerText = 'Edit';

		const delete_task = document.createElement('button');
		delete_task.classList.add('delete');
		delete_task.innerText = 'Delete';

		task_actions.appendChild(edit_task);
		task_actions.appendChild(delete_task);

		task_el.appendChild(task_actions);

		list_item.appendChild(task_el);

		input.value = '';

		edit_task.addEventListener('click', (e) => {
			if (edit_task.innerText.toLowerCase() == "edit") {
				edit_task.innerText = "Save";
				task_input.removeAttribute("readonly");
				task_input.focus();
			} else {
				edit_task.innerText = "Edit";
				task_input.setAttribute("readonly", "readonly");
			}
		});

		delete_task.addEventListener('click', (e) => {
			list_item.removeChild(task_el);
		});
	});
});