let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartSidebar = document.getElementById("cartSidebar");

document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
        alert("One or more fields are empty!");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return;
    }

    alert("Login successful!");
});

document.getElementById("registerBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirmPassword = document.getElementById("registerConfirmPassword").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password || !confirmPassword) {
        alert("One or more fields are empty!");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration successful!");
});

document.getElementById("registerPassword").addEventListener("input", function() {
    const pwd = this.value;
    let strength = "Weak";
    let color = "red";

    if (pwd.length >= 6 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
        strength = "Strong";
        color = "green";
    } else if (pwd.length >= 6) {
        strength = "Medium";
        color = "orange";
    }
    document.getElementById("passwordStrength").innerText = `Strength: ${strength}`;
    document.getElementById("passwordStrength").style.color = color;
});

document.querySelectorAll(".buy").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".card");
        const gameName = card.querySelector("h4").innerText;
        const priceText = card.querySelector("p").innerText;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
        cart.push({ gameName, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`You bought:\n${gameName}\nPrice: $${price.toFixed(2)}`);
    });
});

document.getElementById("searchBtn").addEventListener("click", () => {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        const gameName = card.querySelector("h4").innerText.toLowerCase();
        card.style.display = gameName.includes(searchValue) ? "block" : "none";
    });
});

function updateCartSidebar() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const tr = document.createElement("tr");

        const tdIndex = document.createElement("td");
        tdIndex.innerText = index + 1;
        tr.appendChild(tdIndex);

        const tdName = document.createElement("td");
        tdName.innerText = item.gameName;
        tr.appendChild(tdName);

        const tdPrice = document.createElement("td");
        tdPrice.innerText = `$${item.price.toFixed(2)}`;
        tr.appendChild(tdPrice);

        const tdRemove = document.createElement("td");
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("removeBtn");
        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartSidebar();
        });
        tdRemove.appendChild(removeBtn);
        tr.appendChild(tdRemove);

        cartItems.appendChild(tr);

        total += item.price;
    });

    document.getElementById("cartTotal").innerText = `Total: $${total.toFixed(2)}`;
}

document.getElementById("emptyCart").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is already empty!");
        return;
    }
    
    if (confirm("Are you sure you want to empty the cart?")) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartSidebar();
    }
});

document.addEventListener("keydown", e => {
    if (e.ctrlKey) {
        cartSidebar.classList.add("show");
        updateCartSidebar();
    }
});

document.getElementById("closeCart").addEventListener("click", () => {
    cartSidebar.classList.remove("show");
});

function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.textContent = "visibility_off"; 
    } else {
        input.type = "password";
        icon.textContent = "visibility";
    }
}

document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", function() {
        const input = document.querySelector(this.getAttribute("toggle"));
        if (input.type === "password") {
            input.type = "text";
            this.textContent = "visibility_off";
        } else {
            input.type = "password";
            this.textContent = "visibility";
        }
    });
});

document.getElementById("registerPassword").addEventListener("input", function() {
    const pwd = this.value;
    let width = 20;
    let color = "red";

    if (pwd.length >= 6 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
        width = 100;
        color = "green";
    } else if (pwd.length >= 6) {
        width = 60;
        color = "orange";
    }

    document.getElementById("strength").style.width = width + "%";
    document.getElementById("strength").style.background = color;
});


