const cars = [
  {
    id: 1,
    carBrand: "Erik",
    model: 29,
    color: "#7143b6",
    age: 2018,
    price: 250000,
  },
  {
    id: 2,
    carBrand: "Robe",
    model: 29,
    color: "#7143b6",
    age: 2018,
    price: 250000,
  },
  {
    id: 3,
    carBrand: "Alex",
    model: 29,
    color: "#7143b6",
    age: 2018,
    price: 250000,
  },
  {
    id: 4,
    carBrand: "Mau",
    model: 29,
    color: "#7143b6",
    age: 2018,
    price: 250000,
  },
  {
    id: 5,
    carBrand: "Jhon",
    model: 29,
    color: "#7143b6",
    age: 2018,
    price: 250000,
  },
];

function readCars() {
  // 1. Obtengo el elemento html en el que quiero poner los usuarios
  // 2. Genero el html de los usuarios
  // 3. Pongo el html en el elemento obtenido
  const container = document.getElementById("container-users");
  let html = "";
  cars.forEach((car) => {
    html += `<tr>
                    <td class="text-white">${car.carBrand}</td>
                    <td class="text-white">${car.model}</td>
                    <td class="text-white">${car.color}</td>
                    <td class="text-white">${car.age}</td>
                    <td class="text-white">${car.price}</td>
                    <td>
                        <button onclick="deleteCar(${car.id})" class="btn btn-danger">
                            Eliminar
                        </button>
                    </td>
                </tr>`;
  });
  container.innerHTML = html;
}

function deleteCar(id) {
  // Como elimino un valor de un arreglo? 1. pop -> shift -> splice
  // necesito el índice -> ¿cómo obtengo el índice del elemento si lo que yo recibo es el id? -> findIndex
  const index = cars.findIndex((car) => car.id == id);
  cars.splice(index, 1);
  readCars();
}

function addCar() {
  // obtner el valor del input
  // agregar el usuario al arreglo
  // imprimo nuevamente los usuarios

  const carBrand = document.getElementById("inputCarBrand").value;
  const model = document.getElementById("inputModel").value;
  const color = document.getElementById("inputColor").value;
  const age = document.getElementById("inputYear").value;
  const price = document.getElementById("inputPrice").value;
  const id = cars[cars.length - 1].id + 1;

  const newCar = {
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
}

readCars();
