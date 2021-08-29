const lodeSportBD=()=>{
fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
.then(res=>res.json())
.then(data => displySportsDb(data))
}
lodeSportBD();
const displySportsDb=sports=>{
               const countdiv= document.getElementById('legend')
               //console.log(countdiv);
               sports.forEach(sport => {
                               console.log(sport);
                               const div = document.createElement('div');
                               div.classList.add('spote')
                               div.innerHTML = `${league.idLeague}`
}
               )};