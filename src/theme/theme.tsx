import { COLORS } from '../constants/theme.constant'

const themeConfig = {
  token: {
    // Colors
    colorPrimary: COLORS.PRIMARY, // Customize primary color
    colorLink: COLORS.SECONDARY, // Customize link color
    colorText: COLORS.TEXT_PRIMARY, // Text color
    colorBgBase: COLORS.BACKGROUND, // Background color
    colorError: COLORS.ERROR, // Error color

    // Spacing (padding, margin)
    controlHeight: 40, // Default control height (input, button, etc.)

    // Typography
    fontFamily: 'Arial, sans-serif', // Set custom font family
    fontSize: 14, // Set base font size
    fontSizeHeading1: 32, // Heading 1 size
    fontSizeHeading2: 28, // Heading 2 size
    fontSizeHeading3: 24, // Heading 3 size
    fontSizeParagraph: 16, // Paragraph text size

    // Border Radius
    borderRadius: 8, // Rounded corners for elements
    borderRadiusLG: 12, // Larger rounded corners

    // Additional Customizations
    controlOutlineWidth: 2, // Outline width for input elements
    controlOutlineColor: COLORS.OUTLINE, // Outline color for focused elements

    // Custom Shadows (optional)
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Custom box shadow
  },
}

export default themeConfig
