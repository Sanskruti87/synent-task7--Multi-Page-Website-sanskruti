document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");
    const header = document.querySelector(".header");

    /* Mobile Menu Toggle */

    if (hamburger && navbar) {

        hamburger.addEventListener("click", () => {

            navbar.classList.toggle("active");
            hamburger.classList.toggle("active");

        });

    }

    /* Close Menu When Link Clicked */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");
            hamburger.classList.remove("active");

        });

    });

    /* Close Menu When Clicking Outside */

    document.addEventListener("click", (e) => {

        if (
            navbar &&
            hamburger &&
            !navbar.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {

            navbar.classList.remove("active");
            hamburger.classList.remove("active");

        }

    });

    /* Header Shadow on Scroll */

    function updateHeader() {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow =
                "0 2px 10px rgba(0,0,0,.05)";

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* Smooth Scroll */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    /* Highlight Current Page */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

});