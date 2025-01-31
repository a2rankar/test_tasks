async function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    if (!name.trim() || !number.trim()) {
        alert("Please fill in all fields");
        return;
    }

    const requestData = {
        stream_code: "wv4uf",
        client: {
            phone: number,
            name: name
        }
    };

    try {
        const response = await fetch("https://order.drcash.sh/v1/order", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer RLPUUOQAMIKSAB2PSGUECA'
            },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            window.location.href = "thanks.html";
        } else {
            alert("error of send");
        } 

    }
    catch (error) {
        alert("Error of conncetion")
    }

}