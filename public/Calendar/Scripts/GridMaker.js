//JS
const calendarContainer = document.getElementsByClassName('calendar-container')[0];
let maxDaysInMos = new Date();
let currYearAndMos = new Date(maxDaysInMos.getFullYear(), (maxDaysInMos.getMonth() + 1), 0);
maxDaysInMos = currYearAndMos.getDate();
currYearAndMos = null;
maxDaysInMos = 31;
let x = 1;
function CreateGrid() {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement('div'); // Use <div> for rows
        row.classList.add('row'); // Add the 'row' class
        for (let j = 0; j < 8; j++) {
            //Changed the logic to make the arr have the monthly number of days
            if (x > maxDaysInMos) {
                break;
            }
            const maincontainer = document.createElement('div');
            maincontainer.classList.add('column');
            //const hoverDiv = document.createElement('div');
            //hoverDiv.classList.add("hover-div");
            maincontainer.addEventListener('mouseover', MouseEnter);

            const thecard = document.createElement('div');
            thecard.classList.add('thecard');

            const thefront = document.createElement('div');
            thefront.classList.add('thefront');

            const ptextfront = document.createElement('p');
            ptextfront.classList.add('p-text-front');
            ptextfront.innerHTML = x;
            const ptextback = document.createElement('p');
            ptextback.classList.add('p-text-back')
            ptextback.innerHTML = x;

            const theback = document.createElement('div');
            theback.classList.add('theback');

            row.appendChild(maincontainer);
            maincontainer.appendChild(thecard);
            //maincontainer.appendChild(hoverDiv);
            //hoverDiv.appendChild(thecard);
            thecard.appendChild(thefront);
            thefront.appendChild(ptextfront);
            thecard.appendChild(theback);
            theback.appendChild(ptextback);
            
            x++;
        }
        calendarContainer.appendChild(row); // Add the row to the container
    }
}

function RemoveGridQuery() {
    let rows = calendarContainer.querySelectorAll('.row');
    if (rows) {
        rows.forEach(element => {
            element.remove();
        });
    }
}
function MouseEnter(event) {
    const target = event.target.closest('.thecard');
    if (target) {
        target.style.transform = "rotateY(180deg)";
    }
    const MouseLeave = () => {
        if (target) {
            target.style.transform = "rotateY(0deg)";
        }

        this.removeEventListener("mouseleave", MouseLeave);
    };
    this.addEventListener("mouseleave", MouseLeave);
}
// function MouseLeave(event) {
//     const target = event.target.closest('.thecard');
//     console.log(target);
//     if (target) {
//         target.style.color = "red";
//     }
// }

CreateGrid();
//TODO: In Node.js make a montly reset of the 2d arr using cron.schedule()
//TODO: Dodaj event listner za svaku karticu kad se klikne da se zaustavi tako