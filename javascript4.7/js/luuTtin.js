document.addEventListener("DOMContentLoaded", () => {
    const studentsData = [];

    const tableBody = document.querySelector("table tbody");
    const studentNameInput = document.getElementById("student-name-filter");
    const subjectSelect = document.getElementById("subject-filter");
    const marksInput = document.getElementById("marks-filter");
    const examTypeSelect = document.getElementById("exam-type-filter");
    const filterButtons = document.querySelectorAll(".nav a");
    const addModal = document.getElementById("add-modal");
    const closeModalBtn = document.querySelector(".close-btn");
    const addBtn = document.getElementById("add-btn");
    const addForm = document.getElementById("add-form");

    // Function to render table
    const renderTable = (data) => {
        tableBody.innerHTML = ""; // Clear existing data
        data.forEach((student, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.name} <span class="grade">${student.grade}</span></td>
                <td>${student.subject}</td>
                <td>${student.marks} / 100</td>
                <td>${student.examType}</td>
                <td><a href="#" class="edit-link">Edit</a></td>
                <td><a href="#" class="delete-link" data-index="${index}">Delete</a></td>
            `;
            tableBody.appendChild(row);
        });

        // Update total students and exams
        document.getElementById("total-students").textContent = studentsData.length;
        document.getElementById("total-exams").textContent = studentsData.reduce((acc, student) => acc + (student.examType !== "Missed Exam" ? 1 : 0), 0);
    };

    // Function to filter table
    const filterTable = () => {
        const nameFilter = studentNameInput.value.toLowerCase();
        const subjectFilter = subjectSelect.value.toLowerCase();
        const marksFilter = marksInput.value;
        const examTypeFilter = examTypeSelect.value.toLowerCase();
        const activeFilter = document.querySelector(".nav a.active").textContent.toLowerCase();

        const filteredData = studentsData.filter(student => {
            const matchesName = !nameFilter || student.name.toLowerCase().includes(nameFilter);
            const matchesSubject = !subjectFilter || student.subject.toLowerCase().includes(subjectFilter);
            const matchesMarks = !marksFilter || student.marks.toString().includes(marksFilter);
            const matchesExamType = !examTypeFilter || student.examType.toLowerCase().includes(examTypeFilter);
            const matchesActiveFilter = activeFilter === "all" || student.examType.toLowerCase().includes(activeFilter);

            return matchesName && matchesSubject && matchesMarks && matchesExamType && matchesActiveFilter;
        });

        renderTable(filteredData);
    };

    // Attach filter event listeners
    studentNameInput.addEventListener("input", filterTable);
    subjectSelect.addEventListener("change", filterTable);
    marksInput.addEventListener("input", filterTable);
    examTypeSelect.addEventListener("change", filterTable);

    filterButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            filterTable();
        });
    });

    // Modal for adding new record
    addBtn.addEventListener("click", () => {
        addModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        addModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === addModal) {
            addModal.style.display = "none";
        }
    });

    // Add form submission
    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newName = document.getElementById("new-name").value;
        const newSubject = document.getElementById("new-subject").value;
        const newMarks = document.getElementById("new-marks").value;
        const newExamType = document.getElementById("new-exam-type").value;
        const newGrade = "Grade 3";

        const newStudent = {
            name: newName,
            subject: newSubject,
            marks: parseInt(newMarks),
            examType: newExamType,
            grade: newGrade
        };

        studentsData.push(newStudent);
        renderTable(studentsData);
        addModal.style.display = "none";
        addForm.reset();
    });

    // Edit functionality
    tableBody.addEventListener("click", (event) => {
        if (event.target.classList.contains("edit-link")) {
            event.preventDefault();
            const row = event.target.closest("tr");
            editRow(row);
        } else if (event.target.classList.contains("delete-link")) {
            event.preventDefault();
            const index = event.target.dataset.index;
            deleteStudent(index);
        }
    });

    // Function to enable inline editing
    const editRow = (row) => {
        const cells = row.cells;
        for (let i = 0; i < cells.length - 2; i++) { // Adjusted index for new Delete column
            const cell = cells[i];
            const originalText = cell.textContent;
            const input = document.createElement("input");
            input.type = "text";
            input.value = originalText;
            cell.textContent = '';
            cell.appendChild(input);
            input.addEventListener("blur", function() {
                cell.textContent = input.value || originalText;
                updateStudentData(row, i, input.value);
            });
        }
    };

    // Update student data after editing
    const updateStudentData = (row, cellIndex, newValue) => {
        const studentIndex = Array.from(tableBody.children).indexOf(row);
        const keys = ["name", "subject", "marks", "examType"];
        studentsData[studentIndex][keys[cellIndex]] = (cellIndex === 2) ? parseInt(newValue) : newValue;
    };

    // Function to delete student
    const deleteStudent = (index) => {
        if (confirm("Are you sure you want to delete this record?")) {
            studentsData.splice(index, 1); // Remove student from the array
            renderTable(studentsData); // Re-render the table
        }
    };

    // Initial render
    renderTable(studentsData);
});
