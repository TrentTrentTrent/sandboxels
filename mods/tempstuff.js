var temptouse = 0
elements.customtemp = {
    color: ["#ff0000", "#ffbf4f", "#ff0000", "#4fbfff", "#0000ff", "#4fbfff"],
    tool: function(pixel) {
    pixel.temp = temptouse
		pixelTempCheck(pixel)
    },
    category: "tools",
};
