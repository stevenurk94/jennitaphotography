
export const state = () => ({
    showCookieBanner: false,
    showItems: false,
})

export const mutations = ({
    setCookieBanner ( state, value ) {
        if( value == "accepted" ) {
            state.showCookieBanner = false;
            const data = {
                consent: true,
                expires: Date.now() + 30000000000,
                timestamp: Date.now(),
            }
            localStorage.setItem("stevenCookieConsent", JSON.stringify(data));
            document.querySelector("body").classList.remove("noScroll");
        } else {
            state.showCookieBanner = false;
            const data = {
                consent: document.querySelector("#switch-2").checked,
                expires: Date.now() + 30000000000,
                timestamp: Date.now(),
            }
            localStorage.setItem("stevenCookieConsent", JSON.stringify(data));
            document.querySelector("body").classList.remove("noScroll");
        }
    },
    getCookieBanner ( state ) {
        const stevenCookieConsent = localStorage.getItem("stevenCookieConsent");
        if (stevenCookieConsent) {
            state.showCookieBanner = false;
        } else {
            state.showCookieBanner = true;
            document.querySelector("body").classList.add("noScroll");
        }
    },
    showCookieBanner ( state ) {
        state.showCookieBanner = true;
        document.querySelector("body").classList.add("noScroll");
    },
    showItems ( state, value ) {
        state.showItems = value;
    }
});