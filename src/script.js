
/** Dark/Light mode */
{
    // Theme doesn't exist
    if (localStorage.getItem("theme") == null)
        localStorage.setItem("theme", "light")

    // Theme is dark
    if (localStorage.getItem("theme") == "dark") {
        $("*").find(".bg-black, .bg-white").each(async function () {
            if ($(this).hasClass("bg-black"))
                $(this).addClass("bg-white").removeClass("bg-black")
            else if ($(this).hasClass("bg-white"))
                $(this).addClass("bg-black").removeClass("bg-white")
        })
    
        $("*").find(".text-black, .text-white").each(async function () {
            if ($(this).hasClass("text-white"))
                $(this).addClass("text-black").removeClass("text-white")
            else if ($(this).hasClass("text-black"))
                $(this).addClass("text-white").removeClass("text-black")
        });
    
        $("*").find(".fill-black, .fill-white").each(async function () {
            if ($(this).hasClass("fill-white"))
                $(this).addClass("fill-black").removeClass("fill-white")
            else if ($(this).hasClass("fill-black"))
                $(this).addClass("fill-white").removeClass("fill-black")
        });
    }

    // Swap between light and dark
    $("#light-or-dark").click(async function () {
        $("*").find(".bg-black, .bg-white").each(async function () {
            if ($(this).hasClass("bg-black")) {
                $(this).addClass("bg-white").removeClass("bg-black")
                localStorage.setItem("theme", "light")
            } else if ($(this).hasClass("bg-white")) {
                $(this).addClass("bg-black").removeClass("bg-white")
                localStorage.setItem("theme", "dark")

            }
        })
    
        $("*").find(".text-black, .text-white").each(async function () {
            if ($(this).hasClass("text-white")) {
                $(this).addClass("text-black").removeClass("text-white")
                localStorage.setItem("theme", "dark")
            } else if ($(this).hasClass("text-black")) {
                $(this).addClass("text-white").removeClass("text-black")
                localStorage.setItem("theme", "light")
            }

        });
    
        $("*").find(".fill-black, .fill-white").each(async function () {
            if ($(this).hasClass("fill-white")) {
                $(this).addClass("fill-black").removeClass("fill-white")
                localStorage.setItem("theme", "dark")
            } else if ($(this).hasClass("fill-black")) {
                $(this).addClass("fill-white").removeClass("fill-black")
                localStorage.setItem("theme", "light")
            }
        });

        $("*").find(".border-black, .border-white").each(async function () {
            if ($(this).hasClass("border-white")) {
                $(this).addClass("border-black").removeClass("border-white")
                localStorage.setItem("theme", "dark")
            } else if ($(this).hasClass("border-black")) {
                $(this).addClass("border-white").removeClass("border-black")
                localStorage.setItem("theme", "light")
            }
        });
    })
}

/** Manages the dropdowns at the navbar */
{
    $(".dropdown").click(async function () {
        if ($(this).find(".dropdown-inner").hasClass("hidden")) {
            $(this).find("svg").addClass("rotate-180")
            $(this).find("svg").addClass("fill-yellow-500")
            $(this).find("a.py-3").addClass("text-yellow-500")
            $(this).find(".dropdown-inner").removeClass("hidden")
        } else {
            $(this).find("svg").removeClass("rotate-180")
            $(this).find("svg").removeClass("fill-yellow-500")
            $(this).find(".dropdown-inner").addClass("hidden")
            $(this).find("a.py-3").removeClass("text-yellow-500")
        }
    })
}

/** Manages the like/dislike buttons on the page */
{
    if (localStorage.getItem("like-dislike") == null)
        localStorage.setItem("like-dislike", "undecided")

    if (localStorage.getItem("like-dislike") == "like") {
        $("#like-article").addClass("bg-green-600")
    } else if (localStorage.getItem("like-dislike") == "dislike") {
        $("#dislike-article").addClass("bg-red-600")
    }

    $("#like-article").click(async function () {
        if ($("#dislike-article").hasClass("bg-red-600"))
            $("#dislike-article").removeClass("bg-red-600");
        
        $(this).addClass("bg-green-600")
        localStorage.setItem("like-dislike", "like")
    })

    $("#dislike-article").click(async function () {
        if ($("#like-article").hasClass("bg-green-600"))
            $("#like-article").removeClass("bg-green-600");

        $(this).addClass("bg-red-600")
        localStorage.setItem("like-dislike", "dislike")
    })
}

/** Makes things fade in if you scroll to it */
{
    $("#main p, #main li, #main h1, #main h2").each(async function () {
        $(this).addClass("fade-in")
    })

    // Select all fade-in elements and add the necessary classes for opacity transition
    $(".fade-in").addClass("opacity-0 transition-opacity duration-1000 ease-in-out");

    // Use IntersectionObserver to detect when an element is in the viewport
    const observerOptions = {
      root: null, // Observe within the viewport
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            // When the element is in view, fade it in by adding opacity-100
                $(entry.target).addClass("opacity-100");
                observer.unobserve(entry.target); // Stop observing the element after it fades in
            }
        });
    }, observerOptions);

    // Start observing each fade-in element
    $(".fade-in").each(function() {
      observer.observe(this);
    });
}