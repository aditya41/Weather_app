$(() => {



    $('#btn').click(() => {
        let city = $('#inp').val()
        let temperature;
        const unit = "metric";
        console.log(city)
        let res = $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b0511b434c662647a69686ef23c49fc&units=${unit}`, (data) => {
            temperature = data.main.temp
            console.log(temperature)
            $('.box_1').append(
                $(`<div>`).text(temperature)

            )


        })


    })
})