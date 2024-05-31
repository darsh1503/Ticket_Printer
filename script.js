//let pageCount = 0;



/*function addNumber(number) {
    pageCount = number;
    document.getElementById('pageCount').innerText = pageCount;
}*/



let pageCount = '';

function addNumber(number) {
    // Check if the input is a number
    if (!isNaN(number)) {
        // Check if the count exceeds a certain limit (if needed)
        if (pageCount.length < 2) {
            if (pageCount === '0') {
                pageCount = number.toString();
            } else {
                pageCount += number.toString();
            }
        } else {
            alert('Maximum ticket count reached (99).');
        }
    } else {
        alert('Please enter a valid number.');
    }

    // Update the display
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
            '<div class="ticket-line"></div>' + 
            '<div class="ticket-line"></div>' + 
            '<div class="ticket-line"></div>' + 
            '<div class="ticket-line"></div>' + 
            '</div>' ; // Add a page break after each ticket
    }

    let printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Tickets</title><link rel="stylesheet" href="styles.css"></head><body>' + content + '</body></html>');
    printWindow.document.close();
    printWindow.print();
}
