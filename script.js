
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  const loginNav = document.getElementById('login-nav');
  const userIcon = document.getElementById('user-icon');
  const userDropdown = document.getElementById('user-dropdown');
    const myAccount = document.getElementById('my-account');
    const logoutBtn = document.getElementById('logout-btn');
    console.log(logoutBtn);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // const username = localStorage.getItem('username');

  if (isLoggedIn) {
      if (loginNav) loginNav.style.display = 'none';
      if (userIcon) {
          userIcon.classList.remove('hidden');
          // userIcon.textContent = username ? username.charAt(0).toUpperCase() : 'U'; // Show user initial
      }
  } //else {
  //     if (loginNav) loginNav.style.display = 'block';
  //     if (userIcon) userIcon.classList.add('hidden');
  // }
  userIcon.addEventListener('click' , function() {
    // e.preventDefault();
    userDropdown.classList.remove('hidden');
  })
 
// My Account click handler
myAccount.addEventListener('click', () => {
  window.location.href = 'profileSec.html'; // Replace with actual account page
});
// Logout click handler
  logoutBtn.addEventListener('click', () => {
    console.log("Logout button clicked");
    localStorage.removeItem('isLoggedIn');
    userIcon.classList.add('hidden');
    loginNav.style.display = 'block';
    userDropdown.classList.add('hidden');

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 100);
  });

///// about us page 
document.getElementById('more-info-btn').addEventListener('click', function() {
  window.location.href = 'aboutus.html'; // Replace with your actual More Info page link
});


//// rentout page 

document.getElementById('upload-details-butn').addEventListener('click', function() {
  window.location.href = 'rent-out-form.html'; // Replace with your actual More Info page link
});

