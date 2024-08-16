document.getElementById('userForm').addEventListener('submit', saveUserData);
document.getElementById('showUserData').addEventListener('click', showUserData);

function saveUserData(event) {
  event.preventDefault();

  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const hobbies = document.getElementById('hobbies').value.split(',').map(hobby => hobby.trim());

  const userData = {
    fname,
    lname,
    hobbies
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  alert('User data saved to local storage');
  document.getElementById('userForm').reset();
}

function showUserData() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userOutput = document.getElementById('userOutput');
  userOutput.innerHTML = ''; // Clear previous output

  if (!userData) {
    userOutput.innerHTML = 'No user data found in local storage';
    return;
  }

  const userDiv = document.createElement('div');
  userDiv.className = 'user';

  userDiv.innerHTML = `
    <h3>${userData.fname} ${userData.lname}</h3>
    <p>Hobbies: ${userData.hobbies.join(', ')}</p>
  `;

  userOutput.appendChild(userDiv);
}