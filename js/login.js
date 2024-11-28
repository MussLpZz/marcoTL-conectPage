/* Team */
const AuthManager = {
    async login(e) {
        e.preventDefault(); 

        const correo = document.getElementById('cro').value.trim();
        const contraseña = document.getElementById('psw').value.trim();

        if (!correo || !contraseña) {
            this.displayError("Por favor completa todos los campos.");
            return;
        }
        try {
            const response = await this.simulateServerRequest({ cro: correo, psw: contraseña });
            if (response.status) {
                window.location.href = response.redirect;
            } else {
                this.displayError(response.mensaje);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            this.displayError("Hubo un error en la conexión.");
        }
    },
    async simulateServerRequest(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const { cro, psw } = data;
                if (cro === "p1@gmail.com" && psw === "123") {
                    resolve({
                        mensaje: "Redirigiendo",
                        status: true,
                        redirect: "../src/panel_usuario.html",
                    });
                } else {
                    resolve({
                        mensaje: "Las credenciales son incorrectas",
                        status: false,
                    });
                }
            }, 1000); 
        });
    },
    displayError(message) {
        document.getElementById('error').innerText = message;
    },
};

document.getElementById('frw').addEventListener('submit', (e) => AuthManager.login(e));