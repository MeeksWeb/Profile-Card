const people = [
    {
        name : "Dibor Gabriel",
        age : 25,
        gender : "Male",
        location : "Lagos",
        image :"Crispin.jpg",
        relatioshipStatus : "Married",
        looking : "Male looking for none",
    },
    {
        name : "Funmilayo Kuti",
        age : 22,
        gender : "Female",
        location : "Sagamu",
        image :"Funmi.jpg",
        relatioshipStatus : "Single",
        looking : "Female looking for male",
    },
    {
        name : "Eze Kamsi",
        age : 23,
        gender : "Male",
        location : "Awka",
        image :"Kamsi.jpg",
        relatioshipStatus : "Married",
        looking : "Male looking for none",
    },
    {
        name : "Okonkwo Ruth",
        age : 20,
        gender : "Female",
        location : "Awka",
        image :"Ruth.jpg",
        relatioshipStatus : "Single",
        looking : "Female looking for none",
    },
    {
        name : "Okereke Henry",
        age : 27,
        gender : "Male",
        location : "Lagos",
        image :"Bobby.jpg",
        relatioshipStatus : "Single",
        looking : "Male looking for female",
    },
    {
        name : "Nmerem Onyedika",
        age : 26,
        gender : "Male",
        location : "Onitsha",
        image :"AD.jpg",
        relatioshipStatus : "Single",
        looking : "Male looking for female",
    },
    {
        name : "Michael Victor",
        age : 22,
        gender : "Male",
        location : "Enugu",
        image :"Meek.jpg",
        relatioshipStatus : "Married",
        looking : "Male looking for none",
    },
    {
        name : "Oriowo Tosin",
        age : 27,
        gender : "Male",
        location : "Sagamu",
        image :"Oriowo.jpg",
        relatioshipStatus : "Married",
        looking : "Male looking for none",
    },
    {
        name : "Becky Ann",
        age : 25,
        gender : "Female",
        location : "Awka",
        image :"Becky.jpg",
        relatioshipStatus : "Single",
        looking : "Female looking for none",
    },
    {
        name : "Ken",
        age : 25,
        gender : "Male",
        location : "Awka",
        image :"Ken.jpg",
        relatioshipStatus : "Single",
        looking : "Male looking for Female",
    },
    {
        name : "Chukwu Elvis",
        age : 25,
        gender : "Male",
        location : "Awka",
        image :"Elvis.jpg",
        relatioshipStatus : "Single",
        looking : "Male looking for Female",
    },
    {
        name : "Bella Bella",
        age : 22,
        gender : "Female",
        location : "Awka",
        image :"Bella.jpg",
        relatioshipStatus : "Married",
        looking : "Female looking for none",
    },
    {
        name : "Achor Victor",
        age : 22,
        gender : "Male",
        location : "Abuja",
        image :"Achor.jpg",
        relatioshipStatus : "Single",
        looking : "Male looking for female",
    },

  
]

const container = document.querySelector(".container")
const img = document.querySelector("img")
const profileInfo = document.querySelector(".profile-info")
const nextBtn = document.querySelector("#next")


function* createPeopleIterator() {
     let index = 0;
    while (true) {
        yield people[index++ % people.length]
    }

}


const iterator = createPeopleIterator()

nextBtn.addEventListener("click", () =>{
    const person = iterator.next().value;
    img.src = person.image;
    profileInfo.querySelector("h3").textContent = person.name
    profileInfo.querySelectorAll("p")[0].textContent = `${person.age} years old`;
    profileInfo.querySelectorAll("p")[1].textContent = ` from ${person.location}, Nigeria`;
    profileInfo.querySelectorAll("p")[2].textContent = person.relatioshipStatus;
    profileInfo.querySelectorAll("p")[3].textContent = person.looking;

    if (person.relatioshipStatus == "Married") {
        img.style.borderColor = "red";
    } else{
        img.style.borderColor = "green";
    }
})

nextBtn.click()































