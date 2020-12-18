const cars = [
  {
    id: 1,
    pic: "./IMG/car.jpeg",
    carBrand: "Toyota",
    model: "Avanza",
    color: "#7143B6",
    age: 2018,
    price: 250000,
  },
  {
    id: 2,
    pic: "./IMG/car.jpeg",
    carBrand: "Nissan",
    model: "March",
    color: "#FAFA10",
    age: 2018,
    price: 250000,
  },
  {
    id: 3,
    pic: "./IMG/car.jpeg",
    carBrand: "Volkswagen",
    model: "Sedan",
    color: "#00FCDB",
    age: 2018,
    price: 250000,
  },
  {
    id: 4,
    pic: "./IMG/car.jpeg",
    carBrand: "Suzuki",
    model: "Swift",
    color: "#002AFC",
    age: 2018,
    price: 250000,
  },
  {
    id: 5,
    pic: "./IMG/car.jpeg",
    carBrand: "General Motors",
    model: "Tracker",
    color: "#F100FC",
    age: 2018,
    price: 250000,
  },
];

function readCars() {
  const container = document.getElementById("container-users");
  let html = "";
  cars.forEach((car) => {
    html += `<tr>
                    <td><img src="${car.pic}" alt="Car"  height=40 width=60></img></td>                
                    <td class="text-white">${car.carBrand}</td>
                    <td class="text-white">${car.model}</td>
                    <td  style="background-color:${car.color}"></td>
                    <td class="text-white">${car.age}</td>
                    <td class="text-white">${car.price}</td>
                    <td>
                    <button data-bs-toggle="modal"
        data-bs-target="#staticBackdrop" onclick="addCar(event)" data-bs-whatever="Agregar32 Carro"  class="btn btn-success me-md-2">
                            Agregar
                        </button>
                        <button onclick="deleteCar(${car.id})" class="btn btn-danger me-md-2">
                            Delete
                        </button>
                        <button data-bs-toggle="modal"
        data-bs-target="#staticBackdrop" onclick="updateCar(event,${car.id})" data-bs-whatever="Actualizar32 Carro"  class="btn btn-success">
                            Update
                        </button>
                    </td>
                </tr>`;
  });
  container.innerHTML = html;
}

function deleteCar(id) {
  const index = cars.findIndex((car) => car.id == id);
  cars.splice(index, 1);
  readCars();
}

function addCar(event) {
  //var modalTitle = exampleModal.querySelector(".modal-title");
  //modalTitle.textContent = "Agregar Carro";
  //document.getElementById("form-user").reset();

  alert("Entre a Agregar carro ");
  const pic = "./IMG/car.jpeg";
  const color = document.querySelector("[type='color']").value;
  const carBrand = document.getElementById("inputCarBrand").value;
  const model = document.getElementById("inputModel").value;
  const age = document.getElementById("inputYear").value;
  const price = document.getElementById("inputPrice").value;
  const id = cars[cars.length - 1].id + 1;

  const newCar = {
    pic,
    id,
    carBrand,
    model,
    color,
    age,
    price,
  };
  cars.push(newCar);
  readCars();

  // limpiamos el formulario
  document.getElementById("form-user").reset();
  event.preventDefault();
}

function updateCar(event, id) {
  //exampleModal.addEventListener('show.bs.modal', function (event) {
  //alert("Actualizar el id; " + id);
  event.preventDefault();
  var modalTitle = exampleModal.querySelector(".modal-title");
  modalTitle.textContent = "Actualizar Carro";

  alert("Actualizar el id " + id);
  document.getElementById("inputCarBrand").value = cars[id - 1].carBrand;
  document.getElementById("inputModel").value = cars[id - 1].model;
  document.querySelector("[type='color']").value = cars[id - 1].color;
  document.getElementById("inputYear").value = cars[id - 1].age;
  document.getElementById("inputPrice").value = cars[id - 1].price;

  cars[id - 1].carBrand = document.getElementById("inputCarBrand").value;

  readCars();
}

var exampleModal = document.getElementById("staticBackdrop");
exampleModal.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute("data-bs-whatever");
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector(".modal-title");
  var modalBodyInput = exampleModal.querySelector(".modal-body input");

  modalTitle.textContent = "New message to " + recipient;
  modalBodyInput.value = recipient;
});

readCars();
