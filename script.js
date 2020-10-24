$(() => {



    $('#btn').click(() => {
        let city = $('#inp').val()
        let temperature;
        console.log(city)
        let res = $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b0511b434c662647a69686ef23c49fc`, (data) => {
            temperature = data.main.temp
            console.log(temperature)
            $('body').append(
                $(`<div>`).text(temperature)

            )


        })


    })
})