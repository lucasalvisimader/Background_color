let colors = document.getElementById('color_letters');
colors.style.color = '#456789';
let simple_hex = false;

function change_simple_hex_color() {
    if (!simple_hex) {
        let number = ["black", "darkblue", "green", "purple", "yellow", "orange", "beige", "crimson", "brown", "darkcyan", "darkgreen", "gray", "gold", "darkorange", "violet"]
        change_color(number[Math.floor(Math.random() * 15)]);
    } else {
        change_color("#" + Math.floor(Math.random() * 16777216).toString(16))
    }
}

function change_to_simple() {
    simple_hex = false;
    let new_color = '#456789';
    change_color(new_color);
}

function change_to_hex() {
    simple_hex = true;
    let new_color = '#456789';
    change_color(new_color);
}

function change_color(new_color) {
    document.getElementById('body').style.backgroundColor = new_color;
    document.getElementById('color_letters').innerText = new_color;
    document.getElementById('color_letters').style.color = new_color;
}