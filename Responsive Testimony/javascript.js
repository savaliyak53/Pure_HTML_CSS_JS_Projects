function call() {

    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')

    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let img = `./image/${img}.jpg`
        let customer = new Customer(img, name, text)
        customers.push(customer)
    }



    createCustomer(0, 'john', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit molestias officiis beatae blanditiis qui labore unde tenetur in quibusdam repudiandae!')
    createCustomer(1, 'sandy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit molestias officiis beatae blanditiis qui labore unde tenetur in quibusdam repudiandae!')
    createCustomer(2, 'medny', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit molestias officiis beatae blanditiis qui labore unde tenetur in quibusdam repudiandae!')
    createCustomer(3, 'jondy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit molestias officiis beatae blanditiis qui labore unde tenetur in quibusdam repudiandae!')
    createCustomer(4, 'lomndy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit molestias officiis beatae blanditiis qui labore unde tenetur in quibusdam repudiandae!')

    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }

                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }

                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
}