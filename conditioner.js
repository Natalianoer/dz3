function Conditioner(model, currentTemperature) {
    Devices.call(this, model);
    this._currentTemperature = currentTemperature;

    this.plusTemterature = function() {
        if ((this._currentTemperature < 25) && (this._state == true)) {
            this._currentTemperature += 2; 
        }
    };
    
    this.minusTemterature = function() {
        if ((this._currentTemperature > -5) && (this._state == true)) {
            this._currentTemperature -= 2; 
        }
    };

    this.getCurrentTemterature = function() {
        return this._currentTemperature;
    };
}