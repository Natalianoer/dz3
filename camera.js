function Camera(state, mode) {
    Devices.call(this, state);
    this._mode = mode;
    this.dayMode = function() {
      this.style.backgrounColor = 'white';
    };

    this.nightMode = function() {
      this.style.backgrounColor = 'black';
    };
    
    this.getMode = function () {
      return this._mode;
    };
}
