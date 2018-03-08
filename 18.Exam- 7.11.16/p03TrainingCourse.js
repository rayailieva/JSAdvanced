class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topicsList = [];
    }

    addTopic(title, date) {
        this.topicsList.push({title, date});
        this.topicsList.sort((t1, t2) => t1.date - t2.date);
        return this;
    }

    get firstTopic() {
        return this.topicsList[0];
    }

    get lastTopic() {
        return this.topicsList[this.topicsList.length - 1];
    }

    toString() {
        let topicsStr = this.topicsList.map(m =>
            ' * ' + m.title + ' - ' + m.date)
            .join("\n");
        return 'Course "' + this.title + '" by ' +
            this.trainer + '\n' + topicsStr;
    }
}