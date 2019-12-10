function userLogin(param) {
    let data = JSON.parse(param.body);
    if (data.name === undefined || data.name === "" || data.password === undefined || data.password === "") {
        return {
            'success': false,
            'errorMessage': 'Please input username/password !',
            'systemDate': new Date().getTime()
        }
    }
    else if (data.password === "111111") {
        return {
            'success': true,
            'errorMessage': '',
            'systemDate': new Date().getTime()
        }
    } else {
        return {
            'success': false,
            'errorMessage': 'Incorrect username/password !',
            'systemDate': new Date().getTime()
        }
    }
}

export { userLogin }