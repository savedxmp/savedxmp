fetch('https://master.333networks.com/json/deusex')
	.then(response => response.json())
	.then(data => {
		// Update the HTML document with the data
		const shit = document.getElementById('deusexlist');
		shit.innerHTML = ''; // Clear the placeholder list items
		data.forEach(item => {
			const ist = document.createElement('ist');
			ist.textContent = item.name;
			shit.appendChild(ist);
		});
	})
			.catch(error => {
				// Handle any errors that occur during the API request/response process
				console.error(error);
				alert('An error occurred while getting the server list.');
			});