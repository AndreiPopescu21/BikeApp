self.addEventListener('custom-geolocation', e=>{
    console.log("This is a test message. If you see this the service worker is functional.")
    navigator.geolocation.getCurrentPosition(
        (position) => {},
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      )
})