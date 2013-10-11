#BuffAudio.js

BuffAudio.js is a wrapper around some of the HTML5 Web Audio API that lets you work easily with an AudioBuffer. The primary goals are to enable play, pause, stop, seek, and volume control.

Here are some helpful docs from Mozilla on the Web Audio API:

* [AudioBuffer](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer)
* [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext)
* [AudioBufferSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode)
* [AudioNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode)

##Usage:

    // audioContext is an AudioContext object: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
    // buffer is an AudioBuffer object: https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer
    var buffAudio = new BuffAudio(audioContext, buffer);
    buffAudio.play();
    buffAudio.pause();
    buffAudio.play();
    buffAudio.seek(5); // seconds
    buffAudio.stop();

##Documentation:
__initNewBuffer(buffer)__  
Sets a new `buffer` (AudioBuffer). Will replace any existing AudioBuffer.

__play()__  
Plays the current buffer. If playback was paused (`pause()`) previously, it will resume where it left off. If playback was stopped (`stop()`) or played the entire AudioBuffer, playback will start from the beginning.

__pause()__  
Pauses playback and keeps track of time.

__seek(time)__  
Moves the current playback time to the `time` (in seconds) passed in. `seek` does not alter the current playback state, i.e. if the buffer is playing, it will continue playing from the new point, and if it is not playing it will not start playing.

__stop()__  
Stops playback. Playback time is set to the beginning of the buffer.


__setVolume()__  
UNIMPLEMENTED. Might add some gain nodes or something...



## Contribute/Issues
Please contribute using pull requests and GitHub issues. I'd love help!

## License
The MIT License (MIT)

Copyright (c) 2013 Ernest Park (ernie.park@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
