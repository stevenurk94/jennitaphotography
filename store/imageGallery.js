export const state = () => ({
    activeImage: 0,
})

export const mutations = ({
    setActiveImage ( state, value ) {
        state.activeImage = value;
    },
});