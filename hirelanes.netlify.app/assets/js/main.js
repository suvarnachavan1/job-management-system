const KeepLogin = (((localStorage.getItem("userdata") != "null") || (localStorage.getItem("companydata") != "null")) && ((localStorage.getItem("userdata") != null) || (localStorage.getItem("companydata") != null)));
const DoNotKeepLogin =  (((sessionStorage.getItem("userdata") != "null") || (sessionStorage.getItem("companydata") != "null")) && ((sessionStorage.getItem("userdata") != null) || (sessionStorage.getItem("companydata") != null)));

if(KeepLogin || DoNotKeepLogin){
      if(KeepLogin){
            sessionStorage.setItem("companydata", localStorage.getItem("companydata"));
      }

      try{
            if(((sessionStorage.getItem("userdata") != "null") || (sessionStorage.getItem("userdata") != null)) && JSON.parse(sessionStorage.getItem("userdata"))['login']){
                  document.getElementById("sidebar").innerHTML = '<a class="job-right" href="candidate-details.html">' +
                  '<i class="flaticon-enter"></i>'+ JSON.parse(sessionStorage.getItem("userdata"))['first_name'] + " " +JSON.parse(sessionStorage.getItem("userdata"))['surname']  +'</a>';
                  document.getElementById("appliedJobs").innerHTML = '<a href="applied_jobs.html" class="nav-link">APPLIED JOBS</a>';
                  document.getElementById("logout").innerHTML = '<a href="login.html" onclick="logout()" class="nav-link">LOGOUT</a>';
            }
      }catch(err){
            if((sessionStorage.getItem("companydata") != null || sessionStorage.getItem("companydata") != "null") && JSON.parse(sessionStorage.getItem("companydata"))['login']){
                        document.getElementById("sidebar").innerHTML = '<a class="job-right" href="post-a-job.html">' +
                        '<i class="flaticon-enter"></i>'+ JSON.parse(sessionStorage.getItem("companydata"))['company_name'] + '</a>';
                        document.getElementById("logout").innerHTML = '<a href="login.html" onclick="logout()" class="nav-link">LOGOUT</a>';
            }
      }
      
}else{
      document.getElementById("sidebar").innerHTML = '<a class="job-right" href="login.html">' +
      '<i class="flaticon-enter"></i>Login/Register</a>';
      document.getElementById("appliedJobs").innerHTML = "";
      document.getElementById("logout").innerHTML = '<a href="login.html" class="nav-link">LOGIN/REGISTER</a>';
}

function logout(){
      sessionStorage.setItem("userdata", null);
      sessionStorage.setItem("companydata", null);
      localStorage.setItem("userdata", null);
      localStorage.setItem("companydata", null);
}

function copyLink(){
      // Create a dummy input element
      var dummyInput = document.createElement('input');
  
      // Assign the value of the current URL to the input element
      dummyInput.value = window.location.href;
  
      // Append the input element to the body
      document.body.appendChild(dummyInput);
  
      // Select the text in the input element
      dummyInput.select();
      dummyInput.setSelectionRange(0, 99999); // For mobile devices
  
      // Copy the selected text to the clipboard
      document.execCommand('copy');
  
      // Remove the input element
      document.body.removeChild(dummyInput);
  
      // Notify the user that the link has been copied
      alert('Link copied');
  }