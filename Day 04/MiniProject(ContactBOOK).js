let contacts = [
    {
        Name: "Rahul",
        Phone: "2365957546"
    },
    {
        Name: "Aditya",
        Phone: "4689532148"
    },
    {
        Name: "Ganesh",
        Phone: "9687453265"
    }

]

function display(){
    console.log(contacts)
}
display()

function searchByName(name){
    for (const element in contacts) {
        if(contacts[element].Name == name){
            console.log(contacts[element])
            break;
        }
        console.log(`${name} not found in list`)
    }

}
searchByName("Rahul")

function Add(name,phone){
    contacts.push(
        {
            Name: name,
            Phone: phone
        }
    )
}
Add("aadi",'56987562')
console.log(contacts)

function del(name){
    for (const element in contacts) {
        if(contacts[element].Name == name){
            contacts.splice(element,1)
        }
        
    }
}
del("Aditya")
console.log(contacts)