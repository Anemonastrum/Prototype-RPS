// RPS LIST DATA
const data = [
  { nomor: 1, kode: 'DT-001', matakuliah: 'Pendidikan Pancasila', semester: '1', sks: '2T' },
  { nomor: 2, kode: 'DT-002', matakuliah: 'Pendidikan Agama (Etika Muslim)', semester: '1', sks: '2T' },
  { nomor: 3, kode: 'DT-003', matakuliah: 'Pendidikan Agama (Etika Non Muslim)', semester: '1', sks: '2T' },
  { nomor: 4, kode: 'DT-008', matakuliah: 'Bahasa Inggris I', semester: '1', sks: '2T' },
  { nomor: 5, kode: 'DT-060', matakuliah: 'Logika Informatika', semester: '1', sks: '2T' },
  { nomor: 6, kode: 'DT-003', matakuliah: 'Sistem Operasi', semester: '1', sks: '2T 2P' },
  { nomor: 7, kode: 'DT-055', matakuliah: 'Etika Profesi', semester: '1', sks: '2T' },
  { nomor: 8, kode: 'DT-095', matakuliah: 'Pengantar IT & Instalasi Komputer', semester: '1', sks: '2P' },
  { nomor: 9, kode: 'DT-096', matakuliah: 'Ekonomi Kreatif', semester: '1', sks: '2T' },
  { nomor: 10, kode: 'DT-097', matakuliah: 'Fotografi', semester: '1', sks: '2T' },
  { nomor: 11, kode: 'DT-013', matakuliah: 'Lingkungan Bisnis', semester: '2', sks: '2T' },
  { nomor: 12, kode: 'DT-016', matakuliah: 'Bahasa Inggris II', semester: '2', sks: '2T' },
  { nomor: 13, kode: 'DT-057', matakuliah: 'Algoritma & Pemrograman', semester: '2', sks: '2T' },
  { nomor: 14, kode: 'DT-064', matakuliah: 'Pendidikan Kewarganegaraan', semester: '2', sks: '2T' },
  { nomor: 15, kode: 'DT-100', matakuliah: 'Jaringan Komputer I', semester: '2', sks: '2T 2P' },
  { nomor: 10, kode: 'DT-101', matakuliah: 'Perancangan Web I', semester: '2', sks: '2T 2P' }
];

// Items per page
const itemsPerPage = 8;

// Calculate the total number of pages
const totalPages = Math.ceil(data.length / itemsPerPage);

// Function to display the data based on the current page
function displayData(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  const container = $('#list-rps');
  container.empty();

  const table = $('<table class="table table-hover table-striped mt-3 align-middle"></table>');
  const tableHead = $('<thead><tr><th>No</th><th>Kode</th><th>Mata Kuliah</th><th>Semester</th><th>SKS</th><th>Actions</th></tr></thead>');
  const tableBody = $('<tbody></tbody>');

  $.each(pageData, function(index, item) {
    const row = $('<tr><td>' + item.nomor + '</td><td>' + item.kode + '</td><td>' + item.matakuliah + '</td><td>' + item.semester + '</td><td>'+ item.sks + '</td><td><button class="btn btn-primary btn-sm">View</button><button class="btn btn-success btn-sm">Edit</button><button class="btn btn-danger btn-sm">Save</button></td></tr>');
    tableBody.append(row);
  });

  table.append(tableHead);
  table.append(tableBody);
  container.append(table);
}

// Function to generate the pagination links
function generatePagination() {
  const pagination = $('#pagination');
  pagination.empty();

  for (let i = 1; i <= totalPages; i++) {
    const listItem = $('<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>');
    pagination.append(listItem);
  }

  pagination.find('li').first().addClass('active');
}

// Function to generate the pagination links
function generatePagination() {
    const pagination = $('#pagination');
    pagination.empty();

    for (let i = 1; i <= totalPages; i++) {
      const listItem = $('<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>');
      pagination.append(listItem);
    }

    pagination.find('li').first().addClass('active');
  }

  // Function to handle pagination click event
  function handlePaginationClick() {
    $('#pagination').on('click', '.page-link', function(event) {
      event.preventDefault();

      const selectedPage = parseInt($(this).text());
      displayData(selectedPage);

      $('#pagination li').removeClass('active');
      $(this).parent().addClass('active');
    });
  }

  // Display initial data and generate pagination on page load
  displayData(1);
  generatePagination();
  handlePaginationClick();