let myLeads = [] // initiating an empty array
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) // pushes the value in the input feild into myLeads Array
    inputEl.value = "" // clears the content of the input feild. Basically sets it to null
    renderLeads() // runs renderleads function
}) 

// this function displays the leads in the bullet points form with link
function renderLeads() {
    let listItems = "" // an empty block to store the urls (aquired through myLeads array)
    for (let i = 0; i < myLeads.length; i++) {
        // This is called as template literal. They are denoted by backticks. As we can see, we can breakdown the statement into multiple lines. The good thing is that, we can use HTML elements in this lines
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    } // if we see the above code, it will display the URLs in bullent points formate. Gives an anchor tag to it. and it will set the its redirect link as the URL of that current array. If we do not do that, the URLs will be pasted in the bullet list as a plain text
    ulEl.innerHTML = listItems
}
