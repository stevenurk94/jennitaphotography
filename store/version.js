export const state = () => ({
    currentVersion: "",
    newVersion: 2,
})

// liveVersion == 1

export const mutations = ({
    checkVersion ( state, value ) {

        // Situatie 1: iemand heeft nog geen version 
        // --- Winkelwagen moet geleegd worden + version moet neergezet worden


        // Situatie 2: iemand heeft een version + die version is kleiner dan de huidige version
        // --- Winkelwagen moet geleegd worden + version moet geupdatet worden


        // Situatie 3: iemand heeft een version + die version is gelijk aan de huidige version
        // --- Geen actie

        const version = localStorage.getItem("version");

        if (!version) {
            this.commit("clearCart")
            state.currentVersion = value;
            localStorage.setItem("version", JSON.stringify(value))
        }
        else if (version < value) {
            this.commit("clearCart")
            state.currentVersion = value;
            localStorage.setItem("version", JSON.stringify(value))
        }
    }
})

export const getters = ({})
export const actions = ({})



