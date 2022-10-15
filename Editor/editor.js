function run() {
  const editor = document.getElementById('editor').value;
  let output=document.getElementById('output').srcdoc = editor;
  //console.log(output)
  const container=document.querySelector('.container');
  container.style.flexDirection='column-reverse';
  
}
