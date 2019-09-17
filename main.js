import businesses from "./object.js";

/*
Lightning Exercise: Add another section sibling to the current one and use object dot 
notation to display each company's city. Use square bracket notation to display the 
state code. Use dynamic square bracket notation to add the zip code.
*/

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
    outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
    ${business.addressCity} 
    ${business["addressStateCode"]}
    ${business["addressZipCode"]}
    </section>
  `
    outEl.innerHTML += "<hr/>"
});

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false

    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
})

/*
Lightning Exercise: Use filter() to create another array named manufacturingBusinesses
that will contain all businesses in the manufacturing industry.
Display those to the DOM.
*/

// Array to contain all the New York businesses
outEl.innerHTML += "<h1>Manufacturing Businesses ONLY</h1>"

const manufacturingBusinesses = businesses.filter(business => {
    let companyIndusMan = false;

    if (business.companyIndustry === "Manufacturing") {
        companyIndusMan = true

        outEl.innerHTML += `
            <h2>${business.companyName}</h2>
            <section>
              ${business.addressFullStreet}
            </section>
            <section>
              ${business.addressCity} 
              ${business["addressStateCode"]}
              ${business["addressZipCode"]}
            </section>
        `
        outEl.innerHTML += "<hr/>"
    }
    return companyIndusMan
})


outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
Lightning Exercise: Instead of just returning the purchasing agent object,return a new object that has
the full name of the purchasing agent, the company name, and the phone number. The data structure is 
shown below. Use that new data structure to display the agent with their company and phone number.
 */

const agentInfo = businesses.map(business => {
    const agents = business.purchasingAgent;
    const companyName = business.companyName;
    const phoneWork = business.phoneWork;
    return { agents, companyName, phoneWork }
})

agentInfo.forEach(agent => {
    outEl.innerHTML += `<h2>${agent.agents.nameFirst} ${agent.agents.nameLast}</h2>`;
    outEl.innerHTML += `<h2>${agent.companyName}</h2>`;
    outEl.innerHTML += `<h2>${agent.phoneWork}</h2>`;
    outEl.innerHTML += "<hr/>";
});

/* Lightning Exercise 1: Refactor your code to search for purchasing 
agents instead.If the search text is found in the first name of any 
purchasing agent, show that agent.

Lightning Exercise 2: Refactor your code so that if the search text
 is found in the first name, or last name, of any purchasing agent, 
 show that agent.
 */

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                business.purchasingAgent.nameLast.search(/keyPressEvent.target.value/i)
            );
            const foundBusinesses = businesses.find(
                business =>
                business.purchasingAgent.nameFirst.search(/keyPressEvent.target.value/i)
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameLast}
                ${foundBusinesses.purchasingAgent.nameFirst}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `

        }
    });


/* REDUCE- CALCULATE ORDER SUMMARY */
/*
let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
) */


// Array to contain all the big spenders larger than 9,000
const bigSpenders = businesses.filter(business => {

})

/*
Lightning Exercise 1: Use the reduce method on the 
following array to determine how much total rain 
fell last month.
*/

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(totalRainfall)

/*
Lightning Exercise 2: Use the reduce method on the 
following array to build a sentence.
*/

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue)

console.log(sentence)