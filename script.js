document.getElementById("detect").addEventListener("click", async () => {
  const fileInput = document.getElementById("image");
  const file = fileInput.files[0];
  if (!file) return alert("Please choose an image");

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:3000/api/detect", {
    method: "POST",
    body: formData
  });
  const json = await res.json();
  document.getElementById("result").textContent = JSON.stringify(json, null, 2);
});
