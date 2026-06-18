
  const radios = document.querySelectorAll('input[name="color"]');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.body.style.backgroundColor = radio.value;
    });
  });

  
  document.body.style.backgroundColor =
    document.querySelector('input[name="color"]:checked').value;




const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")
 
  input.addEventListener("input", () => {
    output.textContent = input.value.trim() || "незнайомець";
  });