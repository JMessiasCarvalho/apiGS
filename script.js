function testGS(){

    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=PegXBljZ3hpIOpgeh3X03LTkhkbimFsujGeZP6-bklzpzFXVO9RxaA2QhMPIujvLRIGtCJId46sxWloU5p9QTvRMT6IRpLDwm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKcHGmcu7soLnHq4J9fR2GG6nuXmFvGLmomjQ-jyG-6KbvGkhSVIkoXTZyWRJnLY5y68fdha70iJ&lib=MWuEeDFkziPd-T0gEti1BN8bJB2L9fJ0k"
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
    });

}


document.getElementById("btn").addEventListener("click", testGS);