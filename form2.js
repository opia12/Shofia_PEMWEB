const style = document.createElement('style');
style.textContent = `
    body {
        font-family: 'Poppins', sans-serif;
        background-color: #ffe4e1; /* Pink blush */
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        flex-grow: 1;
        margin-top: 20px;
    }
    header {
        width: 100%;
        background-color: #ff69b4; /* Hot pink */
        padding: 20px;
        color: white;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(255, 105, 180, 0.5);
    }
    footer {
        width: 100%;
        background-color: #ff69b4; /* Hot pink */
        color: white;
        text-align: center;
        padding: 10px;
        position: relative;
        bottom: 0;
        box-shadow: 0 -4px 12px rgba(255, 105, 180, 0.5);
    }
    h2, h3 {
        color: #ff69b4; /* Hot pink */
        text-align: center;
        width: 100%;
        font-weight: 600;
    }
    form, .output-container {
        background-color: #fff0f5; /* Lavender blush */
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(255,182,193,0.3); /* Light Pink Shadow */
        width: 100%;
        max-width: 400px;
        margin-bottom: 20px;
        border: 1px solid #ffb6c1; /* Light Pink Border */
    }
    .submitted-data-container {
        background-color: #fff0f5; /* Lavender blush */
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(255,182,193,0.3); /* Light Pink Shadow */
        width: 100%;
        max-width: 800px;
        margin-top: 20px;
        border: 1px solid #ffb6c1; /* Light Pink Border */
    }
    label {
        display: block;
        margin-bottom: 10px;
        color: #ff69b4;
        font-weight: bold;
    }
    input, select {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ffb6c1;
        border-radius: 8px;
        box-sizing: border-box;
        background-color: #fffafc;
        transition: all .3s ease;
    }
    input[type="date"] {
        appearance: none;
        -webkit-appearance: none;
        color: #444;
        font-family: "Comic Sans MS", cursive, sans-serif;
        font-size: 14px;
        border: 1px solid #ecf0f1;
        background: #FFEBEE; /* Pink background for input */
        padding: 5px;
    }
    input:focus, select:focus {
        outline: none;
        border-color: #D81B60; /* Border color when focused */
        box-shadow: 0 0 5px rgba(216, 27, 96, 0.5); /* Shadow when focused */
    }
    button {
        background-color: #D81B60; /* Dark pink button color */
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        transition: background-color .3s ease; /* Background transition */
    }
    button:hover { background-color: #C2185B; }
    button:disabled { background-color: #FFB6C1; }
    table {
        border-collapse: collapse;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(255, 182, 193, 0.3);
        border: 2px solid #FFB6C1;
    }
    th, td {
        padding: 12px 20px;
        text-align: left;
        border: 1px solid #FFB6C1;
    }
    th {
        background-color: #D81B60;
        color: white;
        font-weight: bold;
    }
    tr:hover { background-color: #FFE4E1; }
    .valid { border: 2px solid #32CD32; }
    .invalid { border: 2px solid #FF4500; }
    @media (max-width: 900px) {
        .container { flex-direction: column; align-items: center; }
        form, .output-container, .submitted-data-container { max-width: 100%; }
    }
`;
document.head.appendChild(style);

// header
const header = document.createElement('header');
header.textContent = 'Pendaftaran Panitia Acara Ulang Tahun Kampus';
document.body.insertBefore(header, document.body.firstChild);

// main container
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

// form creation
const form = document.createElement('form');
const formTitle = document.createElement('h2');
formTitle.textContent = 'Formulir Pendaftaran';
form.appendChild(formTitle);

const fields = ['Nama Lengkap', 'NIM', 'Kelas', 'Tempat Lahir', 'Tanggal Lahir', 'Jenis Kelamin', 'Alamat'];
const inputs = {};

fields.forEach(field => {
    const label = document.createElement('label');
    label.textContent = field;

    const input = document.createElement(field === 'Jenis Kelamin' ? 'select' : 'input');

    if (field === 'Tanggal Lahir') {
        input.type = 'date';
    } else if (field === 'Jenis Kelamin') {
        const optionMale = document.createElement('option');
        optionMale.value = 'Laki-laki';
        optionMale.textContent = 'Laki-laki';
        const optionFemale = document.createElement('option');
        optionFemale.value = 'Perempuan';
        optionFemale.textContent = 'Perempuan';
        input.appendChild(optionMale);
        input.appendChild(optionFemale);
    } else {
        input.type = 'text';
    }

    input.id = field.toLowerCase().replace(/\s+/g, '-');
    input.placeholder = field === 'Tanggal Lahir' ? '' : `Masukkan ${field}`;
    form.appendChild(label);
    form.appendChild(input);
    inputs[field] = input;
});

// submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Kirim';
form.appendChild(submitButton);

// result container
const resultContainer = document.createElement('div');
resultContainer.className = 'output-container';

// individual result table
const resultTitle = document.createElement('h3');
resultTitle.textContent = 'Data Output';
const resultTable = document.createElement('table');
const tbodyResults = document.createElement('tbody');
resultTable.appendChild(tbodyResults);

fields.forEach(field => {
    const row = tbodyResults.insertRow();
    const cellLabel = row.insertCell(0);
    cellLabel.textContent = field;
    const cellColon = row.insertCell(1);
    cellColon.textContent = ':';
    const cellValue = row.insertCell(2);
    cellValue.id = `result-${field.toLowerCase().replace(/\s+/g, '-')}`;
});

resultContainer.appendChild(resultTitle);
resultContainer.appendChild(resultTable);

// submitted data container
const submittedDataContainer = document.createElement('div');
submittedDataContainer.className = 'submitted-data-container';

const submittedDataTitle = document.createElement('h3');
submittedDataTitle.textContent = 'Data Terkumpul';
const submittedDataTable = document.createElement('table');
const submittedDataTbody = document.createElement('tbody');
submittedDataTable.appendChild(submittedDataTbody);

submittedDataContainer.appendChild(submittedDataTitle);
submittedDataContainer.appendChild(submittedDataTable);

// Add elements to the main container
container.appendChild(form);
container.appendChild(resultContainer);
container.appendChild(submittedDataContainer);

// Event handlers
form.addEventListener('submit', function(e) {
    e.preventDefault();
    updateResult();
    addToSubmittedData();
    clearForm();
});

function validateInput(input) {
    if (input.value.trim() != '') {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

function isFormValid() {
    return Object.values(inputs).every(input => input.value.trim() != '');
}

function updateResult() {
    fields.forEach(field => {
        const resultCell = document.getElementById(`result-${field.toLowerCase().replace(/\s+/g, '-')}`);
        resultCell.textContent = inputs[field].value;
    });
}

function addToSubmittedData() {
    const row = submittedDataTbody.insertRow();
    fields.forEach(field => {
        const cell = row.insertCell();
        cell.textContent = inputs[field].value;
    });
}

function clearForm() {
    form.reset();
    Object.values(inputs).forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
    submitButton.disabled = true;
}

Object.values(inputs).forEach(input => {
    input.addEventListener('input', function() {
        validateInput(this);
        submitButton.disabled = !isFormValid();
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '#D81B60'; // Change border color on focus
    });

    input.addEventListener('blur', function() {
        this.style.borderColor = '#FFB6C1'; // Reset border color on blur
    });

    if (input.id === 'jenis-kelamin') {
        input.addEventListener('change', function() {
            alert(`Anda memilih ${this.value}`); // Alert when gender is selected
        });
    }
});

resultTable.addEventListener('mouseover', function() {
    resultTable.style.backgroundColor = '#ffe4e1'; // Change background on hover
});

resultTable.addEventListener('mouseout', function() {
    resultTable.style.backgroundColor = '#ffffff'; // Reset background
});

submittedDataTitle.addEventListener('click', function() {
    if (submittedDataTable.style.display === 'none' || submittedDataTable.style.display === '') {
        submittedDataTable.style.display = 'table';
    } else {
        submittedDataTable.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    const tables = document.querySelectorAll('.output-container table, .submitted-data-container table');
    tables.forEach(table => {
        table.style.width = window.innerWidth < 900 ? '100%' : 'auto';
    });
});

submittedDataTable.addEventListener('dblclick', function() {
    submittedDataTbody.innerHTML = '';
});

submitButton.disabled = true;