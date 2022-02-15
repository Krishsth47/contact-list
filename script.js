const listElm = document.querySelector("#list");
const apiUrl = "https://randomuser.me/api/?";

const fetchUsers = (params = "results=20") => {
  fetch(apiUrl + params)
    .then((response) => response.json())
    .then((data) => {
      const user = data.results;
      let str = "";

      user.map((usr) => {
        str += `
    <div class="col-md-6 col-lg-3 py-3">
    <div class="card">
        <img src="${usr.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${usr.name.title} ${usr.name.first} ${usr.name.last}</h5>
          <p class="card-text">
          <ul class="list-unstyled">
<li><i class="fa-solid fa-phone" pt-2></i> ${usr.phone}</li>
<li><span class ="i"><i class="fa-solid fa-envelope"></i> ${usr.email}</li>
<li><span class ="i"><i class="fa-solid fa-calendar-days"></i> ${usr.dob.date}</li>
<li><span class ="i"><i class="fa-solid fa-map-location-dot"></i> ${usr.location.city}</li>
          </ul>
          </p>
        </div>
      </div>
</div>
    `;
      });

      listElm.innerHTML = str;
    });
};

fetchUsers();

const handleOnchange = (e) => {
  const params = "results=20&gender=" + e.value;

  fetchUsers(params);
};
