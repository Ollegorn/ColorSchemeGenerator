document.getElementById("get-scheme").addEventListener("click", function(){
  const selectedColor = document.querySelector(".color-picker").value.substring(1);
  const selectedScheme = document.querySelector("#color-schemes").value;

  const url = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedScheme}&count=6&format=json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const colors = data.colors;
      
      document.getElementById("pallete").innerHTML = '';

      colors.forEach((color) => {
        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = color.hex.value;
        colorDiv.style.width = "100px";
        colorDiv.style.height = "300px";

        const hexValue = document.createElement("p");
        hexValue.innerText = color.hex.value;
        hexValue.style.textAlign = "center";

        const container = document.createElement("div");
        container.appendChild(colorDiv);
        container.appendChild(hexValue);

        document.getElementById("pallete").appendChild(container);
      });
    })
});