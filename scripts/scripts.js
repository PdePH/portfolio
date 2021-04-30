// RESPONSIVE MENU

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;

    const menuNav = document.getElementById("nav-action")

        menuNav.addEventListener("click", () => {

        document.body.style.overflow = show ? "hidden" : "initial"

        menuSection.classList.toggle("on", show)
        })
})

// main-form
var form = document.getElementById("contact");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.classList.add('success');
        status.innerHTML = "Mensagem enviada com sucesso. Obrigado!";
        form.reset()
    }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Ops! Hove um problema ao enviar."
    });
}
form.addEventListener("submit", handleSubmit)
