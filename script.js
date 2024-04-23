document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const role = document.getElementById('role').value.trim();

        if (name === '' || email === '') {
            alert('Name and Email fields cannot be empty');
            return;
        }

        appendValues(name, email, role);
        form.reset();
    });

    tableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('bx-trash')) {
            event.target.closest('tr').remove();
        } else if (event.target.classList.contains('bx-edit')) {
            // Handle edit action here
            console.log('Edit clicked');
        }
    });

    function appendValues(name, email, role) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="p-3 border-b border-gray-300">-</td>
            <td class="p-3 border-b border-gray-300">${name}</td>
            <td class="p-3 border-b border-gray-300">${email}</td>
            <td class="p-3 border-b border-gray-300">${role}</td>
            <td class="p-3 border-b border-gray-300">
                <button class="text-red-500 hover:text-red-700 hover:underline mr-2">
                    <i class='bx bx-trash'></i>
                </button>
                <button class="text-blue-500 hover:text-blue-700 hover:underline mr-2">
                    <i class='bx bx-edit'></i>
                </button>
            </td>
        `;
        tableBody.appendChild(newRow);
    }
});
