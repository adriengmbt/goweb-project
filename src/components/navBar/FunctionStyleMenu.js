window.addEventListener('scroll', function() {
    var navbarDashboard = document.querySelector('.nav-bar__dashboard');
    var navbarDashboardHeight = navbarDashboard.offsetHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop >= navbarDashboardHeight) {
      navbarDashboard.classList.add('sticky');
    } else {
      navbarDashboard.classList.remove('sticky');
    }
  });
