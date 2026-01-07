var services = {};

fetch("http://localhost:3000/services")
.then(function(response){
  return response.json();
})
.then(function(data){
  data.forEach(function(item){
    services[item.name] = item.description;
  });
});

function loadService(service){
  document.getElementById("details").innerText = services[service];
}
