function Spinner() {
  this.interval = null;

  this.start = function() {
    const spinnerSings = ["\\", "|", "/", "-"];
    let index = 0;
    this.interval = setInterval(function() {
      process.stdout.write("\r" + spinnerSings[(index++) % spinnerSings.length]);
    }, 50);
  };

  this.stop = function() {
    clearInterval(this.interval);
  };
}

module.exports = new Spinner();
