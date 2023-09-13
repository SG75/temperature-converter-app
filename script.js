class TemperatureConverter {
  constructor() {
    this.result = "";
  }

  convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  convert(value, scale) {
    switch (scale) {
      case "celsius":
        return this.convertToCelsius(value);
      case "fahrenheit":
        return this.convertToFahrenheit(value);
      default:
        throw new Error("Invalid scale.");
    }
  }

  displayResult(value, scale) {
    this.result = `Result: ${value} ${scale}`;
  }
}

const converter = new TemperatureConverter();

function convertTemperature() {
  const tempValue = parseFloat(document.getElementById("tempValue").value);
  const tempScale = document.getElementById("tempScale").value;
  const resultElement = document.getElementById("result");

  try {
    if (isNaN(tempValue)) {
      throw new Error(
        "Invalid temperature value. Please enter a valid number."
      );
    }

    const convertedValue = converter.convert(tempValue, tempScale);
    converter.displayResult(convertedValue, tempScale);

    resultElement.textContent = converter.result;
    resultElement.classList.remove("error");
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
    resultElement.classList.add("error");
  } finally {
    document.getElementById("tempValue").value = "";
  }
}
