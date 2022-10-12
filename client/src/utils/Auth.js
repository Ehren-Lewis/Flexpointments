import decode from "jwt-decode";


class AuthService {

    getInfo() {
        return decode(this.getToken());
    }

    isLoggedIn() {


    }

    getToken() {
        return localStorage.getItem("_id")

    }

    setLogin(token) {
        localStorage.setItem("_id", token);
        window.location.replace("/user");

    }

    setLogOut() {
        
        localStorage.removeItem("_id")

    }

}

export default new AuthService();