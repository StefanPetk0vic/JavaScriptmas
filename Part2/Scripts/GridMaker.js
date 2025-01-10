//JS
const calendarContainer = document.getElementsByClassName('calendar-container')[0];
let x=1;
for (let i = 0; i < 4; i++) {
    const row = document.createElement('div'); // Use <div> for rows
    row.classList.add('row'); // Add the 'row' class
    for (let j = 0; j < 6; j++) {

        const maincontainer = document.createElement('div'); 
        maincontainer.classList.add('column'); 
        
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
        thecard.appendChild(thefront);
        thefront.appendChild(ptextfront);
        thecard.appendChild(theback);
        theback.appendChild(ptextback);
        x++;
    }
    calendarContainer.appendChild(row); // Add the row to the container
}
//TODO: Dodaj event listner za svaku karticu kad se klikne da se zaustavi tako