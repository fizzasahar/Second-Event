// Task 1: Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display data
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPassword').textContent = password;

    // Show the data
    document.getElementById('displayData').classList.remove('hidden');

    // Clear form
    document.getElementById('signupForm').reset();
});

// Task 2: "Read More" Feature
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const fullDescription = document.querySelector('.full-description');
    const dots = document.querySelector('.dots');

    readMoreBtn.addEventListener('click', function() {
        if (fullDescription.style.display === 'none') {
            fullDescription.style.display = 'inline';
            dots.style.display = 'none';
            readMoreBtn.textContent = 'Read less';
        } else {
            fullDescription.style.display = 'none';
            dots.style.display = 'inline';
            readMoreBtn.textContent = 'Read more';
        }
    });
});

// Task 3: Student Details Form
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('studentName').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const gradeCell = newRow.insertCell(2);
    const actionsCell = newRow.insertCell(3);

    nameCell.textContent = name;
    ageCell.textContent = age;
    gradeCell.textContent = grade;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn');
    editButton.addEventListener('click', function() {
        document.getElementById('editFormContainer').classList.remove('hidden');
        document.getElementById('editName').value = name;
        document.getElementById('editAge').value = age;
        document.getElementById('editGrade').value = grade;
        document.getElementById('editIndex').value = newRow.rowIndex;
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn');
    deleteButton.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1);
    });

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    document.getElementById('studentForm').reset();
});

document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const index = document.getElementById('editIndex').value;
    const name = document.getElementById('editName').value;
    const age = document.getElementById('editAge').value;
    const grade = document.getElementById('editGrade').value;

    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const row = table.rows[index - 1];

    row.cells[0].textContent = name;
    row.cells[1].textContent = age;
    row.cells[2].textContent = grade;

    document.getElementById('editFormContainer').classList.add('hidden');
});
