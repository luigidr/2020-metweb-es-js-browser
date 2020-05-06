class App {

    constructor(examContainer, sidebarContainer) {
        // reference to the two main containers (HTML elements)
        this.examContainer = examContainer;
        this.sidebarContainer = sidebarContainer;

        // init the exam manager and get the exam list
        this.examManager = new ExamManager();
        this.exams = this.examManager.exams;

        // add an event listener (click) for each link in the left sidebar
        this.sidebarContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                // the HTML element that was clicked
                const el = event.target;
                // the 'data-id' property of that element
                const filterType = el.dataset.id;
                // removing and adding the 'active' class
                this.sidebarContainer.querySelector('a.active').classList.remove('active');
                el.classList.add('active');

                // what happens to our table when I click on the link
                this.onYearSelected(filterType);
            });
        });

        // finally, show all the exams
        this.showExams(this.exams);
    }

    /**
     * Prepare the exam list after selecting a year from the sidebar
     * @param {*} year 
     */
    onYearSelected(year) {
        let exams = [];

        // empty the exam table
        if(this.examContainer.innerHTML !== '') {
            this.examContainer.innerHTML = '';
        }

        // properly fill up the exams array
        if(year === 'all') {
            exams = this.exams;
        }
        else {
            exams = this.examManager.getByYear(year);
        }

        // show all the things!
        this.showExams(exams);
    }

    /**
     * Create the HTML table for showing the exams
     * @param {*} exams 
     */
    showExams(exams) {
        for(let exam of exams) {
            const tr = document.createElement('tr');

            const tdDate = document.createElement('td');
            tdDate.innerText = exam.date.format('DD/MM/YYYY');

            const tdName = document.createElement('td');
            tdName.innerText = exam.name;

            const tdCredits = document.createElement('td');
            tdCredits.innerText = exam.credits;

            const tdGrade = document.createElement('td');
            tdGrade.innerText = exam.grade;

            tr.appendChild(tdDate);
            tr.appendChild(tdName);
            tr.appendChild(tdCredits);
            tr.appendChild(tdGrade);
            this.examContainer.appendChild(tr);
        }
    }
}