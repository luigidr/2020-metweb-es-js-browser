class ExamManager {
    
    constructor() {
        this.exams = [];

        this.buildMyExams();
    }

    /**
     * Build the list of my exams
     */
    buildMyExams() {
        this.exams.push(
            new Exam(moment('2020-02-01', 'YYYY-MM-DD'), 'Algoritmi I', 9, '28'),
            new Exam(moment('2020-02-06', 'YYYY-MM-DD'), 'Basi di dati e sistemi informativi', 6, '30L'),
            new Exam(moment('2020-02-15', 'YYYY-MM-DD'), 'Paradigmi di programmazione', 9, '26'),
            new Exam(moment('2019-09-10', 'YYYY-MM-DD'), 'Programmazione II', 9, '27')
        );

    }

    /**
     * Return a filtered array, with only the exams done in a specific year
     * @param {*} year 
     */
    getByYear(year) {
        return this.exams.filter(ex => ex.date.isBetween(year+'-01-01', year+'-12-31'));
    }
}