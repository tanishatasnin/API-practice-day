const lodeBuddy=()=>{
               fetch('https://randomuser.me/api/?results=5')
.then(res=>res.json())
.then(data =>displayBuddy(data));
}
lodeBuddy();
const displayBuddy=data=>{
               console.log(data)
               const buddys =data.results;
               console.log(buddys);
               const addDiv =document.getElementById('buddies');
              for(const buddy of buddys){
              const p =document.createElement('p');
              p.innertext=` ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
              addDiv.appendChild(p);
              }




}