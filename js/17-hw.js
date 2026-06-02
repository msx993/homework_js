  // 1. Зміна тексту кнопки
  const input = document.getElementById("inputText");
  const button = document.getElementById("myButton");

  button.textContent = input.value;

  // 2. Зміна зображення
  const image = document.getElementById("myImage");

  image.src = "image2.jpg";

  // 3. Зміна посилання та додавання alt
  const link = document.getElementById("myLink");

  link.href = "https://youtube.com";