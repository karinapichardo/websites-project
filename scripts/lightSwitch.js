function lightSwitch(switchNumber) {
    var numberOfSwitches = document.getElementById('switchNumber').value;

    document.getElementById('result').innerHTML = 'There are ' + 2 ** numberOfSwitches + ' possible (on / off) combinations!';
}
