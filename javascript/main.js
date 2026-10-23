// --- Shared Utility Functions & Dynamic Interactivity --- //

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hemanshu Web Hospital Management System Loaded.');
    
    // Auto-highlight active navigation tab
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (currentPath.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        } else if (currentPath.endsWith('/') && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
});

// Patient Form Handling
function handlePatientSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const gender = document.getElementById('patientGender').value;
    const status = document.getElementById('patientStatus').value;

    const table = document.getElementById('patientTableBody');
    if (!table) return;

    const newRow = `
        <tr>
            <td>#P-${Math.floor(1000 + Math.random() * 9000)}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td><span class="badge ${status === 'Admitted' ? 'badge-success' : 'badge-warning'}">${status}</span></td>
        </tr>
    `;

    table.innerHTML += newRow;
    event.target.reset();
    alert('Patient record registered successfully!');
}

// Appointment Booking Handling
function handleAppointmentSubmit(event) {
    event.preventDefault();
    const patientName = document.getElementById('appPatientName').value;
    const doctorName = document.getElementById('appDoctor').value;
    const date = document.getElementById('appDate').value;
    const time = document.getElementById('appTime').value;

    const table = document.getElementById('appointmentTableBody');
    if (!table) return;

    const newRow = `
        <tr>
            <td>${patientName}</td>
            <td>${doctorName}</td>
            <td>${date} ${time}</td>
            <td><span class="badge badge-warning">Confirmed</span></td>
        </tr>
    `;

    table.innerHTML += newRow;
    event.target.reset();
    alert('Appointment booked successfully!');
}

// Billing Generation Handling
function handleBillingSubmit(event) {
    event.preventDefault();
    const patientName = document.getElementById('billPatient').value;
    const amount = document.getElementById('billAmount').value;
    const status = document.getElementById('billStatus').value;

    const table = document.getElementById('billingTableBody');
    if (!table) return;

    const badgeClass = status === 'Paid' ? 'badge-success' : (status === 'Pending' ? 'badge-warning' : 'badge-danger');

    const newRow = `
        <tr>
            <td>#INV-${Math.floor(10000 + Math.random() * 90000)}</td>
            <td>${patientName}</td>
            <td>$${parseFloat(amount).toFixed(2)}</td>
            <td><span class="badge ${badgeClass}">${status}</span></td>
        </tr>
    `;

    table.innerHTML += newRow;
    event.target.reset();
    alert('Invoice generated successfully!');
}