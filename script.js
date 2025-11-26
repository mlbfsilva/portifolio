document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "arquivos/MARIA-LUIZA-BARBOSA-CV-Analista de Sistemas.pdf";
    link.download = "MARIA-LUIZA-BARBOSA-CV-Analista de Sistemas.pdf";
    link.click();
});
