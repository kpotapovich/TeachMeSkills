const employeers = [
    {
        dept_unit_id: 0,
        id: 0,
        name: "YarikHead",
        tel: "123-123-3",
        salary: 3000
    },
    {
        id: 1,
        name: "MashaLead",
        dept_unit_id: 1,
        tel: "123-123-3",
        salary: 2000
    },
    {
        id: 2,
        name: "SashaLead",
        dept_unit_id: 1,
        tel: "123-123-3",
        salary: 2200
    },
    {
        id: 3,
        name: "MirraDev",
        dept_unit_id: 2,
        tel: "123-123-3",
        salary: 1200
    },
    {
        id: 4,
        name: "IraDev",
        dept_unit_id: 2,
        tel: "123-123-3",
        salary: 1000
    },
    {
        id: 5,
        name: "DanikHead3",
        dept_unit_id: 3,
        tel: "123-123-33",
        salary: 3000
    },
    {
        id: 7,
        name: "KoliaLead",
        dept_unit_id: 4,
        tel: "123-123-3",
        salary: 2000
    },
    {
        id: 6,
        name: "OliaLead3",
        dept_unit_id: 4,
        tel: "123-123-3",
        salary: 2200
    },
    {
        id: 9,
        name: "SienaTest",
        dept_unit_id: 5,
        tel: "123-123-3",
        salary: 1000
    },
    {
        id: 8,
        name: "LenaTest",
        dept_unit_id: 5,
        tel: "123-123-3",
        salary: 1200
    }
];

//-------------------------------

let developer = {
    name: 'Developers',
    id: 2,
    dept_units: [],
};
let devLead = {
    name: 'Lead Developers',
    id: 1,
    dept_units: [developer]
};
let devDeptHead = {
    name: 'Development Management',
    id: 0,
    dept_units: [devLead],
};
let qaTester = {
    name: 'Testers',
    id: 5,
    dept_units: [],
};
let qaLead = {
    name: 'Lead QA',
    id: 4,
    dept_units: [qaTester],
};
let qaDeptHead = {
    name: 'Quality Assurance Management',
    id: 3,
    dept_units: [qaLead]
};

//-------------------------------
let board = document.getElementById('board');
let root = document.getElementById('employees');
let elements = root.getElementsByClassName('btn');

let unitId = null;
let rate = 1;

[devDeptHead, qaDeptHead].forEach(item => buildMenu(item, root));

for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = e => {
        let activeList = root.getElementsByClassName('active');
        for (let j = 0; j < activeList.length; j++) {
            activeList[j].classList.remove('active');
        }
        e.target.classList.add('active');
        unitId = parseInt(e.target.getAttribute('unit_id'));
        updateTable();
    };
}

document.getElementById('clear-list').onclick = () => {
    let activeList = root.getElementsByClassName('active');
    for (let j = 0; j < activeList.length; j++) {
        activeList[j].classList.remove('active');
    }
    unitId = null;
    updateTable();
};

const selectOption = document.getElementsByClassName('currency')[0];
selectOption.onchange = () => {
    let curId = parseInt(selectOption.options[selectOption.selectedIndex].getAttribute('value'));
    if (curId === 0) {
        rate = 1;
        updateTable();
    } else {
        fetch(`http://www.nbrb.by/api/exrates/rates/${curId}`)
            .then(response => response.json())
            .then(currency => {
                console.log(currency);
                rate = currency.Cur_Scale / currency.Cur_OfficialRate;
                updateTable();
            });
    }

};

//-------------------------------

function buildMenu(currentItem, parent) {
    let arrow = document.createElement('span');
    let text = document.createElement('span');
    text.classList.add('btn');
    text.setAttribute('unit_id', currentItem.id);
    text.classList.add('table');
    text.innerText = currentItem.name;

    let menuItem = document.createElement('li');
    menuItem.appendChild(arrow);
    menuItem.appendChild(text);

    parent.appendChild(menuItem);

    if (currentItem.dept_units.length > 0) {
        arrow.classList.add('arrow');
        let newList = document.createElement('ul');
        newList.classList.add('list');
        menuItem.appendChild(newList);
        arrow.onclick = (e) => {
            if (arrow  === e.target) {
                arrow.classList.toggle('open');
                newList.classList.toggle('open');
            }
        };

        currentItem.dept_units.forEach(child => buildMenu(child, newList))
    }
}

function updateTable() {
    let board = document.getElementById('board');
    let employees = unitId == null ? [] : employeers.filter(e => e.dept_unit_id === unitId);

    //clean table
    while (board.childElementCount > 1) {
        board.lastChild.remove();
    }

    //fill table
    employees.forEach(employee => {
        let id = document.createElement('td');
        id.innerText = employee.id;
        let name = document.createElement('td');
        name.innerText = employee.name;
        let phone = document.createElement('td');
        phone.innerText = employee.tel;
        let salary = document.createElement('td');
        salary.innerText = (employee.salary * rate).toFixed(2);
        let row = document.createElement('tr');
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(phone);
        row.appendChild(salary);
        board.appendChild(row);
    });
}