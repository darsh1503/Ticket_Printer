function printTickets() {
    let pageCountNumber = parseInt(pageCount);
    if (isNaN(pageCountNumber) || pageCountNumber <= 0) {
        alert("Please enter a valid number of tickets.");
        return;
    }

    let content = '';
    for (let i = 0; i < pageCountNumber; i++) {
        content += `<div class="ticket">Ticket ${i + 1}</div>`;
    }

    let printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write(`<html><head><title>Tickets</title><link rel="stylesheet" href="styles.css"></head><body>${content}</body></html>`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}
