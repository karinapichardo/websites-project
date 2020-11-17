function toScottishScreaming(inputStr) {
    var inputStr = document.getElementById("sentence").value;
    alert(inputStr.replace(/[aiou]/gi, 'e').toUpperCase());
}
