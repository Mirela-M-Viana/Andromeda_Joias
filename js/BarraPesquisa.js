const searchInput = document.querySelector("#searchInput");
        const cards = document.querySelectorAll(".card");

        searchInput.addEventListener("keyup", e => {
            const txt = e.target.value.toLowerCase();

            cards.forEach(card => {
                const title = card.querySelector("h2").textContent.toLowerCase();

                if (title.includes(txt)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });