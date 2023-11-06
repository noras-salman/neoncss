export class AvatarGenerator {
  static ImageFormat = {
    PNG: "image/png",
  };

  static DefaultConfig = {
    foregroundColor: "white",
    backgroundColor: "black",
    size: 200,
    font: "bold 80px Arial",
    format: AvatarGenerator.ImageFormat.PNG,
  };

  constructor(text, config = AvatarGenerator.DefaultConfig) {
    if (!text || text.length == 0) {
      throw new Error("Avatar text can't be empty");
    }
    this.text = text;
    this.config = { ...AvatarGenerator.DefaultConfig, config };
  }

  static get({ text, config = AvatarGenerator.DefaultConfig }) {
    const avatar = new AvatarGenerator(text, config);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = avatar.config.size;
    canvas.height = avatar.config.size;

    // Draw background
    context.fillStyle = avatar.config.backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = avatar.config.font;
    context.fillStyle = avatar.config.foregroundColor;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    return canvas.toDataURL(avatar.config.format);
  }
}
