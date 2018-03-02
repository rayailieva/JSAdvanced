function tickets(tickets, criteria) {

    let result = [];

    class Ticket{

        constructor(destination, price, status){

            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for(let ticketData of tickets){

        let tokens = ticketData.split('|');
        let [destination, price, status] = tokens;

        result.push(new Ticket(destination, Number(price), status));
    }

    switch (criteria) {
        case 'destination':
            result = result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result = result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result = result.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return result;

}

