
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