// import { invoke } from '@tauri-apps/api/tauri'
// With the Tauri global script, enabled when `tauri.conf.json > build > withGlobalTauri` is set to true:
const invoke = window.__TAURI__.invoke

//Function to show image when a file is chosen
function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

function get_message() {
  const text = document.getElementById("code-message");
  console.log("I was clicked");
  invoke('my_custom_command', { invokeMessage: text.value }).then((message) => encode(message));
}

function encode(message) {
  const text = document.getElementById("encode");
  text.value = message;
}

