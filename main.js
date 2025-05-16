const rows = 8;
const cols = 12;
const seatContainer = document.getElementById('seats');
const selectedList = document.getElementById('selectedList');
const continueBtn = document.getElementById('continueBtn');
let selectedSeats = [];

function renderSeats() {
  seatContainer.innerHTML = '';
  for (let i = 0; i < rows * cols; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');

    const r = Math.random();
    if (r < 0.1) seat.classList.add('occupied');
    else if (r < 0.2) seat.classList.add('wheelchair');
    else seat.classList.add('available');

    seat.dataset.id = i;
    seat.addEventListener('click', () => selectSeat(seat));
    seatContainer.appendChild(seat);
  }
}

function selectSeat(seat) {
  if (seat.classList.contains('occupied')) return;

  seat.classList.toggle('selected');
  const id = seat.dataset.id;

  if (seat.classList.contains('selected')) {
    selectedSeats.push(id);
  } else {
    selectedSeats = selectedSeats.filter(s => s !== id);
  }
  selectedList.textContent = selectedSeats.join(', ');
  continueBtn.classList.toggle('enabled', selectedSeats.length > 0);
}

continueBtn.addEventListener('click', () => {
  if (selectedSeats.length === 0) return;
  alert('Guardado exitoso.\nButacas seleccionadas: ' + selectedSeats.join(', '));

  // Aquí puedes agregar la lógica de conexión a Railway en otro archivo o función externa.
});

renderSeats();
