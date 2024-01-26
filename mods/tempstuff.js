tempToUse = 0;

elements.custom_temp = {
    color: ["#ff0000", "#ffbf4f", "#ff0000", "#4fbfff", "#0000ff", "#4fbfff"],
    tool: function(pixel) {
        pixel.temp = tempToUse;
        pixelTempCheck(pixel)
    },
    onSelect: function() {
        var value = prompt("Enter the temperature you want to use");
        //if the user backs out of the prompt (value = null) or just types nothing (value = ""), don't change the temperature to 0 (Number turns both into 0)
        if([null,""].includes(value)) { return };
        value = Number(value);
        if(isNaN(value)) {
            alert("Temperature was invalid! Please enter a number.");
            return
        };
        tempToUse = value
    },
    category: "tools",
};
