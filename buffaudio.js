(function(window, document, undefined) {
  var BuffAudio = function(buffer, config) {
    console.log(typeof(buffer));

    // https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode
    this._buffer = buffer; // AudioBufferSourceNode
    this._config = config || {};
    this._playbackTime = 0; // in seconds
    this._isPlaying = false;

    this.setBuffer = function(buffer) {
      this.buffer = buffer;
    }

    this.printBuffer = function() {
      console.log(this.buffer);
    }

    this.play = function(startTime) {
      if (this._isPlaying) return;
      this._isPlaying = true;
      startTime = startTime || 0;
      var when = 0; // when to schedule sound, 0 is immediately
      this._buffer.start(0, startTime);
    }

/*
    this.pause = function() {
      if (!this._isPlaying) return;
      this._isPlaying = false;
      this._buffer.stop();
    }
    */

    this.stop = function() {
      this.buffer.stop();
      this._isPlaying = false;
    }

  };

  // window is a reference, set BuffAudio on global window object
  window.BuffAudio = BuffAudio;

})(window, document);
