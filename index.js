 const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events"

 const getdata = async () => {
  try{
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json);
    if(json.data){
      return json.data;
    }
  } catch (error){
    console.log("A isssue occured", error);
  }
}
getdata()



const render = async () => {
  try {
    const events = await getdata();
    console.log(events);
    events.forEach((event) => {
      const ul = document.createElement('ul');
      ul.innerHTML = ` Name: ${event.name}; Location: ${(event.location)}; Date & Time : ${event.date}; Description: ${event.description}`
      document.querySelector("#events").appendChild(ul);
    });
    



  } catch (error) {
    console.log("An issue occurred while rendering", error);
  }
}
render();