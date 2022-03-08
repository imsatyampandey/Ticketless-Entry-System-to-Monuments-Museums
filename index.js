function checkAppender(data) {
    let list = document.getElementById("monumentsList");

    for (var value of data) {
        $('#monumentsList')
            .append(`<input type="checkbox" id="${value}" name="interest" value="${value}">`)
            .append(`<label for="${value}">${value}</label></div>`)
            .append(`<br>`);
    }
}

let data;

$(document).ready(function () {
    $('input[name=cities]').on('change', function () {
        var n = $(this).val();
        // console.log(n);
        switch (n) {
            case "delhi":
                // console.log("in delhi");
                data = [
                    "Hauzkhas",
                    "Humayuns Tomb",
                    "Jantar Mantar",
                    "Khan-I-Khana",
                    "Kotla Firoz Shah",
                    "Purana Qila",
                    "Purana Qila Lake",
                    "Purana Qila Museums",
                    "Qutub Minar",
                    "Red Fort",
                    "Safdarjung Tomb",
                    "Sultan Garhi",
                    "Tughlaqabad Fort"
                ];
                checkAppender(data);




                break;
            case "agra":
                data = [
                    "Agra Fort",
                    "Akbar Tomb Sikandra",
                    "Fatehpur Sikri",
                    "Itimad-Ud-Daulah Tomb",
                    "Mariam Tomb Sikandra",
                    "Mehtab Bagh",
                    "Ram Bagh",
                    "Taj Mahal",

                ];
                checkAppender(data);
                break;
            case "mumbai":
                data = [
                    "Aga Khan Palace Building, Pune",
                    "Buddhist Caves, Kanheri",
                    "Cave, Temple & Inscriptions, Bhaja",
                    "Cave, Temple And Inscriptions, Junnar",
                    "Caves, Temples And Inscriptions, Karla",
                    "Elephanta Caves",
                    "Janjira Fort, Murd",
                    "Kolaba Fort, Alibag",
                    "Kondivte Caves",
                    "Lohgad Fort",
                    "Old Fort, Sholapur",
                    "Raigad Fort",
                    "Shaniwarwada"
                ]
                checkAppender(data);
                break;
        }
    });
});