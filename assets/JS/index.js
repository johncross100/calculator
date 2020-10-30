function insert(num) {
    var exp = document.form.txtview.value
    document.form.txtview.value = exp+num;
}

function equal() {
    var exp = document.form.txtview.value
    document.form.txtview.value = eval(exp);
    console.log(values);
}

function clean() {
    document.form.txtview.value = "";
}

function back() {
    var exp = document.form.txtview.value
    document.form.txtview.value = exp.substring(0, exp.length - 1);
}
