// redirect to paypal checkout when click a package card

const cards = document.querySelectorAll('article.card')
for (const card of cards) {
    card.addEventListener ("click", function (e) {

        if (card.classList.contains("custom")) {
            // rediret to contect form in custom cards
            let page = window.location.href
            base_page = page.split("#")[0]
            page = base_page + "#contact"
            window.location.href = page

        } else {
            // submit paypal form
            const form = card.querySelector ("form")
            form.submit ()
        }

    })
}