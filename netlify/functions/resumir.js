async function resumir() {

    let texto = document.getElementById("textoIA").value;

    if(texto.trim() === ""){
        alert("Escribe algo primero 😅");
        return;
    }

    document.getElementById("resultadoIA").innerText = "Pensando... 🤖";

    const res = await fetch("/.netlify/functions/resumir", {
        method: "POST",
        body: JSON.stringify({ texto })
    });

    const data = await res.json();

    document.getElementById("resultadoIA").innerText =
    "🧠 " + data.respuesta;
}
