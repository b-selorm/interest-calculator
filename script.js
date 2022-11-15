//variables
let slider = document.querySelector('#interestRate');

// display interest rates
var output = document.querySelector('#rate_percentage')
output.innerHTML = `${slider.value}%`

slider.oninput = function(){
    output.innerHTML = `${slider.value}%`
}
const btn = document.querySelector('button')
btn.addEventListener('click', function(event){
    // variables
    const principalAmount = document.querySelector('#principalAmount').value
    const time = document.querySelector('#years').value
    const interestRate = slider.value / 100;
    const interestAmount = Math.round(principalAmount * time * interestRate)
    const years = Number(new Date().getFullYear()) + Number(time)
    console.log(principalAmount)
    console.log(time)
    console.log(interestRate)
    console.log(interestAmount)
    console.log(years)


    // display results
    if (principalAmount === '' ||  time === '' || interestRate === ''){
        alert('Fields must not be empty')
    }
    else{
        const resultsField = document.querySelector('#results')
        resultsField.innerHTML = `
        <p>
            If you deposit ${principalAmount}, at an interest rate of ${slider.value}%, You will receive an amount of ${interestAmount} in the year ${years}
        </p>
        `
        resultsField.classList.add("border", "bg-light", "text-dark")
    }

    event.preventDefault();
})



