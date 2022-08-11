window.onload = () => show_alert()

function show_alert () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    var thanks = urlParams.get('thanks')
    if (thanks) {
        
        // Create alert
        Swal.fire('Thank you for contacting us,', 'we will get back to you shortly')

        // Redirect
        window.location.href = "#header"
    }
}