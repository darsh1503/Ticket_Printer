let pageCount = 0;

function addNumber(number) {
    pageCount = number;
    document.getElementById('pageCount').innerText = pageCount;
}

function clearScreen() {
    pageCount = 0;
    document.getElementById('pageCount').innerText = pageCount;
}

function printTickets() {
    let pageCount = parseInt(document.getElementById('pageCount').textContent);

    let content = '';
    for (let i = 0; i < pageCount; i++) {
        content += '<div class="ticket">' + 
            '<div class="ticket-line">Name: Darsh Patel</div>' + 
            '<div class="ticket-line">Date: 2024-08-12</div>' + 
            '<div class="ticket-line">Time: 10:00 AM</div>' + 
            '<div class="ticket-line">Price: $20</div>' + 
            '</div>' ; // Add a page break after each ticket
    }

    let printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Tickets</title><link rel="stylesheet" href="styles.css"></head><body>' + content + '</body></html>');
    printWindow.document.close();
    printWindow.print();
}
