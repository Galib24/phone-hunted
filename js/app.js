const loadPhone =async(searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     const res = await fetch(url);
     const data = await res.json();
     displayPhones(data.data, dataLimit)
}

const displayPhones = (phones, dataLimit) =>{
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';
    
    // display 10 phone only
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
      phones = phones.slice(0, 10);
     showAll.classList.remove('d-none')
    }else{
      showAll.classList.add('d-none')
    }

    // display no phone found
    const noPhone = document.getElementById('no-found-message');
    if(phones.length ===0){
      noPhone.classList.remove('d-none')
    }else{
      noPhone.classList.add('d-none')
    }
    // display all phones
    
    phones.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML =`
        
        <div class="card">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
                        
                          

                        
                          </div>
                      </div>
        `;
        phoneContainer.appendChild(phoneDiv)
    });
    // stop spinner loader
    toggleSpinner(false)

}
const processSearch = (dataLimit) =>{
  toggleSpinner(true)
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhone(searchText, dataLimit);
}
// handler search button click
document.getElementById('btn-search').addEventListener('click', function(){
  // start loader
processSearch(10)
})
// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
processSearch(10)
  }
});
const toggleSpinner = isLoading =>{
  const loaderSection = document.getElementById('loader')
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }else{
    loaderSection.classList.add('d-none')
  }
}

// not best solution for load all data in api
document.getElementById('btn-show-all').addEventListener('click', function(){
  processSearch()
})

const loadPhoneDetails =async id =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json()
  displayPhoneDetails(data.data)
}

const displayPhoneDetails = phone =>{
console.log(phone);
const modalTitle = document.getElementById('phoneDetailsModalLabel');
modalTitle.innerText = phone.name;

const modalContainer = document.getElementById('modal-container');
modalContainer.innerHTML = `

<img  src="${phone.image}" alt="">
<p>Brand:  ${phone.brand}</p>
<p>mainFeatures:  ${phone.mainFeatures.chipSet}</p>
<p>displaySize:  ${phone.mainFeatures.displaySize}</p>
<p>memory:  ${phone.mainFeatures.memory}</p>
<p>sensors:  ${phone.mainFeatures.sensors[0]}</p>
<p>sensors:  ${phone.mainFeatures.sensors[1]}</p>
<p>sensors:  ${phone.mainFeatures.sensors[2]}</p>
<p>sensors:  ${phone.mainFeatures.sensors[3]}</p>
<p>sensors:  ${phone.mainFeatures.sensors[4]}</p>
<p>sensors:  ${phone.mainFeatures.sensors[5]}</p>
<p>Storage:  ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information found'}</p>
<p>Others:  ${phone.others.Bluetooth}</p>
<p>GPS:  ${phone.others.GPS}</p>
<p>NFC:  ${phone.others.NFC}</p>
<p>Radio:  ${phone.others.Radio}</p>
<p>USB:  ${phone.others.USB}</p>
<p>WLAN:  ${phone.others.WLAN}</p>
<p>Release Date:  ${phone.releaseDate ? phone.releaseDate : 'No release Date found'}</p>


`;

}
// loadPhone();