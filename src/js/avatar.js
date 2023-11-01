function generateAvatar(
  text,

  foregroundColor = "white",

  backgroundColor = "black"
) {
  const canvas = document.createElement("canvas");

  download = document.getElementById("download");

  const context = canvas.getContext("2d");

  canvas.width = 200;

  canvas.height = 200;

  // Draw background

  context.fillStyle = backgroundColor;

  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text

  context.font = "bold 80px Arial";

  context.fillStyle = foregroundColor;

  context.textAlign = "center";

  context.textBaseline = "middle";

  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
}
