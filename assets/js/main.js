document.addEventListener("DOMContentLoaded", () => {

    /* Reveal Animation on Scroll */

    const revealElements = document.querySelectorAll(
        ".card, .feature, .process-card, .timeline-item"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-up");
                    observer.unobserve(entry.target);
                }
            });
        },

        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

    /* Contact Form Validation*/

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {

                alert("Please complete all required fields.");

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value)) {

                alert("Please enter a valid email address.");

                email.focus();

                return;

            }

            alert("Thank you! Your message has been sent.");

            form.reset();

        });

    }

    /*  Scroll To Top Button */

    const scrollButton = document.createElement("button");

    scrollButton.innerHTML = "↑";

    scrollButton.className = "scroll-top";

    document.body.appendChild(scrollButton);

    Object.assign(scrollButton.style, {

        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        background: "#2563eb",
        color: "#fff",
        fontSize: "20px",
        cursor: "pointer",
        display: "none",
        boxShadow: "0 10px 25px rgba(0,0,0,.2)",
        zIndex: "999"

    });

    window.addEventListener("scroll", () => {

        scrollButton.style.display =
            window.scrollY > 300 ? "block" : "none";

    });

    scrollButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*  FAQ Accordion */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const answer = item.querySelector("p");

        if (!answer) return;

        answer.style.display = "none";

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

            const visible =
                answer.style.display === "block";

            faqItems.forEach((faq) => {

                const p = faq.querySelector("p");

                if (p) p.style.display = "none";

            });

            answer.style.display =
                visible ? "none" : "block";

        });

    });

    /* Lazy Loading Images */

    const images = document.querySelectorAll("img");

    images.forEach((image) => {

        image.loading = "lazy";

    });

    /* Image Hover Effect */

    images.forEach((image) => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.03)";
            image.style.transition = ".4s";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });

    /* Current Year in Footer */

    const year = new Date().getFullYear();

    document.querySelectorAll(".copyright").forEach((item) => {

        item.innerHTML =
            `© ${year} BrandName. All Rights Reserved.`;

    });

    /* Console Welcome Message */

    console.log(
        "%cWebsite Loaded Successfully",
        "color:#2563eb;font-size:16px;font-weight:bold;"
    );

});