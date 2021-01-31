const initialState={
    slides:[
        {
            id:1,
            title: "Реклама 1",
            color: "#aac3bf"
        },
        {
            id:2,
            title: "Реклама 2",
            color: "#c9b1bd"
        },
        {
            id:3,
            title: "Реклама 3",
            color: "#d5a29c"
        },
        {
            id:4,
            title: "Реклама 4",
            color: "#82a7a6"
        },
        {
            id:5,
            title: "Реклама 5",
            color: "#e6af7a"
        },
        {
            id:6,
            title: "Реклама 6",
            color: "#95be9e"
        },
        {
            id:7,
            title: "Реклама 7",
            color: "#97b5c5"
        }
    ]
}


const productSliderReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}


export default productSliderReducer