function calculateDamage() {
    const baseDamage = parseFloat(document.getElementById("baseDamage").value) || 0;
    const critChance = (parseFloat(document.getElementById("critChance").value) || 0) / 100;
    const critMultiplier = parseFloat(document.getElementById("critMultiplier").value) || 1;
    const armor = parseFloat(document.getElementById("armor").value) || 0;

    // Step 1: Expected damage with crit
    const expectedDamage = baseDamage * (1 + critChance * (critMultiplier - 1));

    // Step 2: Armor reduction formula
    const finalDamage = expectedDamage * (100 / (100 + armor));

    document.getElementById("result").innerText = finalDamage.toFixed(2);
}

// Live update
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculateDamage);
});

// Initial calculation
calculateDamage();