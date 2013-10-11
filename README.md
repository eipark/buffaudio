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
    
    buffAudio.initNewBuffer(buffer2);
    buffAudio.play();

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



## Contribute
Please contribute using pull requests. Feel free to email me with questions/critiques/etc. ernie.park@gmail.com

## Issues
Submit issues through GitHub.  

__Length issue__ The current version of the spec states: 

>This interface represents a memory-resident audio asset (for one-shot sounds and other short audio clips). Its format is non-interleaved IEEE 32-bit linear PCM with a nominal range of -1 -> +1. It can contain one or more channels. Typically, it would be expected that the length of the PCM data would be fairly short (usually somewhat less than a minute). For longer sounds, such as music soundtracks, streaming should be used with the audio element and MediaElementAudioSourceNode.

I want to use BuffAudio/AudioBuffers for longer form content that is recorded directly in the browser. It does not seem like MediaElementSourceNode would work very well for this case since I'd have to convert the AudioBuffer I recorded into a format compatible with the <audio> tag first. Is my current method just a hack or is there no real good solution here?
    

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
