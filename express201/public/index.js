

const ourRequest = async () => {
  try {
    const response = await fetch(
  "http://localhost:8080/ajax",
  {
  method: 'POST',
  body: JSON.stringify({name: "Eremes"}),
  headers:{
    'Content-Type': 'application/json',
    }
  })
  const data = await response.json();
  console.log('===data===',data);  
  } catch (error) {
    console.error(error);
  }  
} 

ourRequest()
