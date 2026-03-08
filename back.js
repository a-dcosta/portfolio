function goBack() {
    // Check if the previous page was on your domain
    // If you are testing locally, use '127.0.0.1' or 'localhost'
    if (document.referrer.indexOf(window.location.host) !== -1) {
        window.history.back();
    } else {
        // If they typed the URL or came from Google, just send them Home
        window.location.href = "/";
    }
}