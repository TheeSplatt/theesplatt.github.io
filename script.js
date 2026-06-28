async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementById('ip').innerText = `${data.ip}`;

        if (data.ip == "67.166.36.114") {
            document.getElementById("test").remove()
        }
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

getIP()