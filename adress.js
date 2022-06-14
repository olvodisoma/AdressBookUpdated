if(!localStorage.getItem('people_at_the_firm')){
    localStorage['people_at_the_firm']=JSON.stringify(people_at_the_firm)
}
let myContacts=JSON.parse(localStorage.getItem('people_at_the_firm'))
console.log(myContacts)

function megjelenit(){
    document.querySelector("tbody").innerHTML=""
    document.querySelector("tbody").innerHTML+=myContacts.map(people=>`
    <tr><td>${people.country}</td>
    <td>${people.firstname}</td>
    <td>${people.lastname}</td>
    <td>${people.mobilephone}</td>
    <td>${people.email}</td>
    <td>${people.job}</td>
    <td>${people.adress}</td>
    <td><i class="fa fa-trash" onclick="DeleteRow(this)"></i></td>
    </tr>`).join('')
}
megjelenit()

function addContant(){
    let newPeople={}
    let azon=myContacts.length+1
    let orszag=document.getElementById("contantCountry").value
    let knev=document.getElementById("contantFirstName").value
    let vnev=document.getElementById("contantLastName").value
    let telefonszam=document.getElementById("contantMobile").value
    let email=document.getElementById("contantEmail").value
    let munka=document.getElementById("contantJob").value
    let lakcim=document.getElementById("contantAdress").value

    newPeople.id=azon
    newPeople.country=orszag
    newPeople.firstname=knev
    newPeople.lastname=vnev
    newPeople.mobilephone=telefonszam
    newPeople.email=email
    newPeople.job=munka
    newPeople.adress=lakcim
    
    myContacts.push(newPeople)
    localStorage['people_at_the_firm']=JSON.stringify(myContacts)
    
    document.querySelector("form").reset()
    megjelenit()
    console.log(newPeople)

    /*document.querySelector("tbody").innerHTML+=`<tr>
    <td class="uj">${newPeople.country}</td>
    <td class="uj">${newPeople.firstname}</td>
    <td class="uj">${newPeople.lastname}</td>
    <td class="uj">${newPeople.mobilephone}</td>
    <td class="uj">${newPeople.email}</td>
    <td class="uj">${newPeople.job}</td>
    <td class="uj">${newPeople.adress}</td>
    <td class="uj"><i class="fa fa-trash" onclick="DeleteRow(this)"></i></td>
    </tr>`*/

}
function DeleteRow(obj){
    let row=obj.parentNode.parentNode
    row.parentNode.removeChild(row)
    console.log(row)

    localStorage['people_at_the_firm']=JSON.stringify(myContacts)
}
megjelenit()


