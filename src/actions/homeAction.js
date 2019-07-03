export function homeAction() {
    // console.log('Home action');
    // return {type:'ADD',payload:{home:"FromAction"}};

    return dispatch => {
        // setTimeout(() => {
            fetch('https://pwaapiuat.voot.com/pwa_2_0/home.json?platform=Pwa&pId=13&Version=2.0&page=2')
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: 'ADD',
                        payload: {home:data}
                    });
                    console.log(data)
                });
        // }, 1000);
    }
}