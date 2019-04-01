$(function() {
  //Translate text with flask route
  $("#translate").on("click", function(e) {
    e.preventDefault();
    var translateVal = document.getElementById("text-to-translate").value;
    var languageVal = document.getElementById("select-language").value;
    var translateRequest = { 'text': translateVal, 'to': languageVal }

    if (translateVal !== "") {
      $.ajax({
        url: '/translate-text',
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        dataType: 'json',
        data: JSON.stringify(translateRequest),
        success: function(data) {
          for (var i = 0; i < data.length; i++) {
            document.getElementById("translation-result").textContent = data[i].translations[0].text;
            document.getElementById("detected-language-result").textContent = data[i].detectedLanguage.language;
            if (document.getElementById("detected-language-result").textContent !== ""){
              document.getElementById("detected-language").style.display = "block";
            }
            document.getElementById("confidence").textContent = data[i].detectedLanguage.score;
          }
        }
      });
    };
  });
  // Convert text-to-speech
  $("#text-to-speech").on("click", function(e) {
    e.preventDefault();
    var ttsInput = document.getElementById("translation-result").value;
    var ttsVoice = document.getElementById("select-voice").value;
    var ttsRequest = { 'text': ttsInput, 'voice': ttsVoice }

    var xhr = new XMLHttpRequest();
    xhr.open('post', '/text-to-speech', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "blob";
    xhr.onload = function(evt){
      if (xhr.status === 200) {
        audioBlob = new Blob([xhr.response], {type: "audio/mpeg"});
        audioURL = URL.createObjectURL(audioBlob);
        if (audioURL.length > 5){
          var audio = document.getElementById('audio');
          var source = document.getElementById('audio-source');
          source.src = audioURL;
          audio.load();
          audio.play();
        }else{
          console.log("An error occurred getting and playing the audio.")
        }
      }
    }
    xhr.send(JSON.stringify(ttsRequest));
  });

  //Run sentinment analysis on input and translation.
  $("#sentiment-analysis").on("click", function(e) {
    e.preventDefault();
    var inputText = document.getElementById("text-to-translate").value;
    var inputLanguage = document.getElementById("detected-language-result").innerHTML;
    var outputText = document.getElementById("translation-result").value;
    var outputLanguage = document.getElementById("select-language").value;

    var sentimentRequest = { "inputText": inputText, "inputLanguage": inputLanguage, "outputText": outputText, "outputLanguage": outputLanguage };

    if (inputText !== "") {
      $.ajax({
        url: '/sentiment-analysis',
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        dataType: 'json',
        data: JSON.stringify(sentimentRequest),
        success: function(data) {
          for (var i = 0; i < data.documents.length; i++) {
            if (typeof data.documents[i] !== 'undefined'){
              if (data.documents[i].id === "1") {
                document.getElementById("input-sentiment").textContent = data.documents[i].score;
              }
              if (data.documents[i].id === "2") {
                document.getElementById("translation-sentiment").textContent = data.documents[i].score;
              }
            }
          }
          for (var i = 0; i < data.errors.length; i++) {
            if (typeof data.errors[i] !== 'undefined'){
              if (data.errors[i].id === "1") {
                document.getElementById("input-sentiment").textContent = data.errors[i].message;
              }
              if (data.errors[i].id === "2") {
                document.getElementById("translation-sentiment").textContent = data.errors[i].message;
              }
            }
          }
          if (document.getElementById("input-sentiment").textContent !== '' && document.getElementById("translation-sentiment").textContent !== ''){
            document.getElementById("sentiment").style.display = "block";
          }
        }
      });
    }
  });
  // Automatic voice font selection based on translation output.
  $('select[id="select-language"]').change(function(e) {
    if ($(this).val() == "ar"){
      document.getElementById("select-voice").value = "(ar-SA, Naayf)";
    }
    if ($(this).val() == "ca"){
      document.getElementById("select-voice").value = "(ca-ES, HerenaRUS)";
    }
    if ($(this).val() == "zh-Hans"){
      document.getElementById("select-voice").value = "(zh-HK, Tracy, Apollo)";
    }
    if ($(this).val() == "zh-Hant"){
      document.getElementById("select-voice").value = "(zh-HK, Tracy, Apollo)";
    }
    if ($(this).val() == "hr"){
      document.getElementById("select-voice").value = "(hr-HR, Matej)";
    }
    if ($(this).val() == "en"){
      document.getElementById("select-voice").value = "(en-US, Jessa24kRUS)";
    }
    if ($(this).val() == "fr"){
      document.getElementById("select-voice").value = "(fr-FR, HortenseRUS)";
    }
    if ($(this).val() == "de"){
      document.getElementById("select-voice").value = "(de-DE, HeddaRUS)";
    }
    if ($(this).val() == "el"){
      document.getElementById("select-voice").value = "(el-GR, Stefanos)";
    }
    if ($(this).val() == "he"){
      document.getElementById("select-voice").value = "(he-IL, Asaf)";
    }
    if ($(this).val() == "hi"){
      document.getElementById("select-voice").value = "(hi-IN, Kalpana, Apollo)";
    }
    if ($(this).val() == "it"){
      document.getElementById("select-voice").value = "(it-IT, LuciaRUS)";
    }
    if ($(this).val() == "ja"){
      document.getElementById("select-voice").value = "(ja-JP, HarukaRUS)";
    }
    if ($(this).val() == "ko"){
      document.getElementById("select-voice").value = "(ko-KR, HeamiRUS)";
    }
    if ($(this).val() == "pt"){
      document.getElementById("select-voice").value = "(pt-BR, HeloisaRUS)";
    }
    if ($(this).val() == "ru"){
      document.getElementById("select-voice").value = "(ru-RU, EkaterinaRUS)";
    }
    if ($(this).val() == "es"){
      document.getElementById("select-voice").value = "(es-ES, HelenaRUS)";
    }
    if ($(this).val() == "th"){
      document.getElementById("select-voice").value = "(th-TH, Pattara)";
    }
    if ($(this).val() == "tr"){
      document.getElementById("select-voice").value = "(tr-TR, SedaRUS)";
    }
    if ($(this).val() == "vi"){
      document.getElementById("select-voice").value = "(vi-VN, An)";
    }
  });
});
