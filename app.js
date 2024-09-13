// app.js

function calculateDiscountOrIncrease() {
    const originalPrice = parseFloat(document.getElementById('original-price').value);
    const desiredPrice = parseFloat(document.getElementById('desired-price').value);

    if (isNaN(originalPrice) || isNaN(desiredPrice) || originalPrice <= 0 || desiredPrice <= 0) {
        alert('Por favor, insira valores válidos e positivos.');
        return;
    }

    let resultMessage = "";

    if (desiredPrice < originalPrice) {
        // Calcular desconto necessário
        const discountPercentage = ((originalPrice - desiredPrice) / originalPrice) * 100;
        resultMessage = `Você precisa dar um desconto de: ${discountPercentage.toFixed(2)}%`;
    } else if (desiredPrice > originalPrice) {
        // Calcular aumento necessário
        const increasePercentage = ((desiredPrice - originalPrice) / originalPrice) * 100;
        resultMessage = `Você precisa aumentar o preço em: ${increasePercentage.toFixed(2)}%`;
    } else {
        resultMessage = 'O preço desejado é igual ao preço original. Não é necessário nenhum ajuste.';
    }

    document.getElementById('result').innerHTML = `<p>${resultMessage}</p>`;
}
