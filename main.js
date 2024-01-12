function play(audio_name) {
    var audio = new Audio(`sounds\\${audio_name}`);
    audio.play();
  }