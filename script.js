document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".info-row");

    function checkVisibility() {
        rows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                row.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check
});
