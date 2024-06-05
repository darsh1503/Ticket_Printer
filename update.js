let pageCount = '';

function addNumber(number) {
    if (!isNaN(number)) {
        if (pageCount.length < 2) {
            if (pageCount === '0') {
                pageCount = number.toString();
            } else {
                pageCount += number.toString();
            }
            showAlert(convertToWords(pageCount) + ' prints', 'info');
        } else {
            showAlert('Maximum ticket count reached (99).', 'danger');
        }
    } else {
        showAlert('Please enter a valid number.', 'danger');
    }
    document.getElementById('pageCount').innerText = pageCount;
}

function convertToWords(number) {
    const words = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                   'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === '0') {
        return 'zero';
    }

    let num = parseInt(number);
    let result = '';

    if (num < 20) {
        result = words[num];
    } else {
        result = tens[Math.floor(num / 10)];
        if (num % 10 !== 0) {
            result += ' ' + words[num % 10];
        }
    }

    return result;
}

function clearScreen() {
    pageCount = '';
    document.getElementById('pageCount').innerText = '0';
}

function printTickets() {
    let pageCount = parseInt(document.getElementById('pageCount').textContent);

    if (pageCount <= 0 || isNaN(pageCount)) {
        showAlert('Please enter a valid number of tickets.', 'danger');
        return;
    }

    let content = '';
    for (let i = 0; i < pageCount; i++) {
        content += '<div class="ticket">' + 
            '<div class="ticket-line"</div>' + 
            '<div class="ticket-line"></div>' + 
            '<div class="ticket-line"></div>' + 
            '<div class="ticket-line"></div>' + 
            '</div>';
    }

    let printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Tickets</title><link rel="stylesheet" href="styles.css"></head><body>' + content + '</body></html>');
    printWindow.document.close();
    printWindow.print();
    printWindow.onafterprint = function() {
        showAlert('Thank you for printing ' + convertToWords(pageCount) + ' tickets', 'success');
        setTimeout(() => {
            clearScreen();
            location.reload();
        }, 2000); // 2 seconds delay for user to see the alert
    };
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    container.insertBefore(alertDiv, container.firstChild);
    setTimeout(() => alertDiv.remove(), 1000); // 2 seconds alert display
}
