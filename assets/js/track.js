async function getUserIP() {
    try {
        let response = await fetch("https://api.ipify.org?format=json");
        let data = await response.json();
        return data.ip;
    } catch (error) {
        console.error("Failed to fetch IP:", error);
        return "Unknown IP";
    }
}

getUserIP().then(ip => {
    fetch("https://script.google.com/macros/s/AKfycbwSQn510tSig9Fc_HOco7KqxxZBeFd84sbzWwD0WS85QqHBRFSyfkJWeCKwtnaBFWKVqA/exec", { 
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ip: ip,
            userAgent: navigator.userAgent,
            page: window.location.href
        }),
    }).then(() => console.log("Visit logged"))
    .catch(error => console.error("Error logging visit:", error));
});
