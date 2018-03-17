class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value < Date.now()) {
            throw new Error('Date is in the past!');
        }

        this._deadline = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get isOverdue() {
        if (this.status === 'Complete') {
            return false;
        }

        return this.deadline < Date.now();
    }

    static comparator(a, b) {
        if (a.isOverdue === true && b.isOverdue === true) {
            return a.deadline - b.deadline;
        }
        if (a.isOverdue === true && b.isOverdue === false) {
            return -1;
        }
        if (a.isOverdue === false && b.isOverdue === true) {
            return 1;
        }

        if (a.status === b.status) {
            return a.deadline - b.deadline;
        }

        if (a.status === 'In Progress' && b.status !== 'In Progress') {
            return -1;
        }
        if (a.status !== 'In Progress' && b.status === 'In Progress') {
            return 1;
        }

        if (a.status === 'Open' && b.status !== 'Open') {
            return -1;
        }
        if (a.status !== 'Open' && b.status === 'Open') {
            return 1;
        }

        if (a.status === 'Complete' && b.status !== 'Complete') {
            return -1;
        }
        if (a.status !== 'Complete' && b.status === 'Complete') {
            return 1;
        }
    }

    toString() {
        if (this.isOverdue) {
            return `[\u26A0] ${this.title} (overdue)`;
        }

        switch (this.status) {
            case 'Complete':
                return `[\u2714] ${this.title}`;
            case 'Open':
                return `[\u2731] ${this.title} {(deadline: ${this.deadline})}`;
            case 'In Progress':
                return `[\u219D] ${this.title} {(deadline: ${this.deadline})}`;
        }
    }
}