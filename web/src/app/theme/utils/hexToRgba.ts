export const hexToRgba = (hex: string, alpha = 1): string => {
  // Check if the input is a valid hex color
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
    // Return null for invalid input
    return '#ff0000'
  }

  // Remove the # symbol if it's included
  hex = hex.replace('#', '')

  // Expand shorthand notation (e.g., #123 => #112233)
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  // Parse the hex values for red, green, and blue components
  const red = parseInt(hex.slice(0, 2), 16)
  const green = parseInt(hex.slice(2, 4), 16)
  const blue = parseInt(hex.slice(4, 6), 16)

  // Ensure the alpha value is within the valid range (0 to 1)
  alpha = Math.min(1, Math.max(0, alpha))

  // Construct the RGBA string
  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`

  return rgba
}
