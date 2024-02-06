 //add extra
 const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/auth/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        check1,
        currentTime: new Date(), // Assuming your backend generates `id`
        category
      })
    })
    .then(response => response.json())
    .then(data => {
      // Update context or state here with the new task
      console.log(data);
    })
    .catch(error => console.error("Failed to add task", error));
  };
