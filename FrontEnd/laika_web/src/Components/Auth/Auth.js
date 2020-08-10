class Auth {
    constructor() {
        this.autenticado = false;
    }

    login(cb) {
        this.autenticado = true;
        cb();
    }

    logout(cb) {
        this.autenticado = false;
        cb();
    }

    esAutenticado() {
        return this.autenticado;
    }
}

export default new Auth();
