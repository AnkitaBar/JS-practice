document.getElementById('userForm').addEventListener('submit', saveUser);
document.getElementById('fetchData').addEventListener('click', fetchData);
document.addEventListener('DOMContentLoaded', loadUsers);

function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function setUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function saveUser(event) {
  event.preventDefault();

  const id = document.getElementById('userId').value;
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const hobbies = document.getElementById('hobbies').value.split(',').map(hobby => hobby.trim());

  const user = { id: id ? parseInt(id) : Date.now(), fname, lname, hobbies };

  let users = getUsers();

  if (id) {
    users = users.map(u => u.id === user.id ? user : u);
  } else {
    users.push(user);
  }

  setUsers(users);
  document.getElementById('userForm').reset();
  loadUsers();
}

function loadUsers() {
  const users = getUsers();
  const userTable = document.getElementById('userTable');
  userTable.innerHTML = '';

  users.forEach(user => {
    const row = userTable.insertRow();
    row.insertCell(0).innerText = user.fname;
    row.insertCell(1).innerText = user.lname;
    row.insertCell(2).innerText = user.hobbies.join(', ');

    const actionsCell = row.insertCell(3);
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = () => editUser(user.id);
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => deleteUser(user.id);
    actionsCell.appendChild(deleteButton);
  });
}

function editUser(id) {
  const users = getUsers();
  const user = users.find(u => u.id === id);

  document.getElementById('userId').value = user.id;
  document.getElementById('fname').value = user.fname;
  document.getElementById('lname').value = user.lname;
  document.getElementById('hobbies').value = user.hobbies.join(', ');
}

function updateUser() {
  saveUser(new Event('submit'));
}

function deleteUser(id) {
  let users = getUsers();
  users = users.filter(user => user.id !== id);
  setUsers(users);
  loadUsers();
}

function searchUser() {
  const query = document.getElementById('search').value.toLowerCase();
  const users = getUsers();
  const filteredUsers = users.filter(user =>
    user.fname.toLowerCase().includes(query) || user.lname.toLowerCase().includes(query)
  );

  const userTable = document.getElementById('userTable');
  userTable.innerHTML = '';

  filteredUsers.forEach(user => {
    const row = userTable.insertRow();
    row.insertCell(0).innerText = user.fname;
    row.insertCell(1).innerText = user.lname;
    row.insertCell(2).innerText = user.hobbies.join(', ');

    const actionsCell = row.insertCell(3);
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = () => editUser(user.id);
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => deleteUser(user.id);
    actionsCell.appendChild(deleteButton);
  });
}

async function fetchData() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products.map(product => ({
      id: product.id,
      fname: product.title,
      lname: product.category,
      hobbies: product.description.split(' ').slice(0, 3) // Taking first 3 words as hobbies
    }));

    let users = getUsers();
    users = users.concat(products);
    setUsers(users);
    loadUsers();
    alert('Products data fetched and saved to local storage');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
