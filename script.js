const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll('.price');
    let total = 0;

	priceElements.forEach(priceEl => {
        const value = parseFloat(priceEl.textContent);
        if (!isNaN(value)) {
            total += value;
        }
    });

	 const table = document.getElementById('gtable');
	let tabletr=document.createElement("tr");
	let tabletd=document.createElement("td");

	tabletd.setAttribute('colspan', 2);
	tabletd.textContent=total;

	tabletr.appendChild(tabletd);
	table.appendChild(tabletr);
	
	
  
};

getSumBtn.addEventListener("click", getSum);

