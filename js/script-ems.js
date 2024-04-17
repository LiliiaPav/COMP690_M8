// CREATE AN ARRAY OF EMPLOYEES
let employees=[];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')!==null){
    employees = JSON.parse(localStorage.getItem('employees'));
}
else {
    employees=[
        [10010010, 'William', 1001, 'William@empl', 'Sales'], 
        [20020020, 'Olivia', 2002, 'Olivia@empl', 'QA'], 
        [30030030, 'Emma', 3003, 'Emma@empl', 'Marketing'], 
        [40040040, 'Henry', 4004, 'Henry@empl', 'Engineering'], 
        [50050050, 'Mia', 5005, 'Mia@empl', 'Executive'],   
        [60060060, 'Noah', 6006, 'Noah@empl', 'Administrative']];
    }

// GET DOM ELEMENTS
const $     = (id) => document.getElementById(id)
let fmEmpl  = $("addForm");
let tblEmpl = $("empTable");
let counter = $("empCount");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.onload = () => {
    buildGrid();
}

// ADD EMPLOYEE
fmEmpl.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let valEmplId   = $("id").value;
    let valEmplName = $("name").value;
    let valEmplExt  = $("extension").value;
    let valEmplEmail= $("email").value;
    let valEmplDep  = $("department").value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmpl = [valEmplId, valEmplName, valEmplExt, valEmplEmail, valEmplDep];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmpl);
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    fmEmpl.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();
});

//To add:
//[70070070, 'Benjamin', 7007, 'Benjamin@empl', 'Sales']
//[80080080, 'Ava', 8008, 'Ava@empl', 'Marketing']

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this task?')){
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const rowToRemove= e.target.parentElement.parentElement.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowToRemove-1, 1);
            // BUILD THE GRID
            buildGrid();
        }}
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tblEmpl.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbodyEl = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let empl of employees){
        tbodyEl.innerHTML +=`
        <tr>
            <td>${empl[0]}</td>
            <td>${empl[1]}</td>
            <td>${empl[2]}</td>
            <td>${empl[3]}</td>
            <td>${empl[4]}</td>
            <td><button class='btn btn-sm bg-danger delete text-white'></button></td>
        </tr>
    `;
    }
    //<td><button class='btn btn-sm bg-danger delete'><i class="fa-regular fa-trash-can text-white"></i></button></td>

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    tblEmpl.appendChild(tbodyEl);
    // UPDATE EMPLOYEE COUNT
    counter.value= `(${employees.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("employees", JSON.stringify(employees));
};