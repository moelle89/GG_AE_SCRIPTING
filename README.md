# GG AE Scripting - Adobe After Effects Template System

A powerful Adobe After Effects scripting system designed to streamline the creation and management of data-driven video and image templates. This tool provides a comprehensive set of features for template creation, management, and automation in After Effects.

## Features

### Template Management
- **Video Template Setup**: Automatically creates all required compositions for video advertisements with custom naming
- **Image Template Setup**: Sets up compositions for image advertisements with custom naming
- **Boilerplate System**: Includes a pre-configured template system for consistent project structure

### Content Management
- **Elements**: Add pre-configured content objects that work with JSON data binding
- **Gallery**: Add gallery objects with JSON data integration
- **FX**: Apply presets and actions with JSON key bindings
- **Scale to Fill**: Automatically scale layers to fit composition while maintaining aspect ratio

### File Management
- **Organized Import System**: Automatically organizes imported files into appropriate footage folders based on file extensions
- **Project Structure**: Maintains a clean and organized project structure with dedicated folders for:
  - Footage
  - Assets
  - Fonts
  - Scripts
  - Builds

### Utility Features
- **JSON Integration**: Full support for JSON data binding and management
- **Hotkeys**: Quick access to common functions:
  - Scale active composition to preview area
  - Wipe expression-based values
  - Open project/footage/JSON folders
  - Various other productivity shortcuts

## Installation

1. Download the latest release from the [releases page](https://github.com/moelle89/GG_AE_SCRIPTING/releases)
2. Run the `_INSTALL.bat` script
3. The script will:
   - Install the Mojo script
   - Set up the template system
   - Configure necessary folders and presets
   - Install required fonts

## Project Structure

```
GG_AE_SCRIPTING/
├── _BOILERPLATES/     # Template files
├── _FONTS/           # Required fonts
├── _HELPER_SCRIPTS/  # Additional utility scripts
├── _HTML/           # HTML resources
├── _img/            # UI images
├── _OM_RM/          # Output management
├── _pseudoEffects/  # Custom effects
├── _scripts/        # Core scripts
├── _TUT/            # Tutorial materials
├── moelles_mojo.jsx # Main script file
└── _INSTALL.bat     # Installation script
```

## Usage

1. Open Adobe After Effects
2. Load the boilerplate template
3. Use the Mojo panel to:
   - Create new templates
   - Manage content
   - Apply effects
   - Import and organize files
   - Handle JSON data

## Requirements

- Adobe After Effects 2023 or 2024
- Windows OS
- Administrator privileges for installation

## Support

For issues, feature requests, or questions, please visit the [GitHub repository](https://github.com/moelle89/GG_AE_SCRIPTING).

## License

This project is proprietary software. All rights reserved.

# AE_SCRIPTING

### Download:
[moelles_mojo.zip](https://github.com/moelle89/GG_AE_SCRIPTING/releases)

__


[moelles_mojo_first_time_installlation__latest.webm](https://github.com/moelle89/GG_AE_SCRIPTING/assets/10669665/613f22d5-fb95-45c9-824b-b83fd8d29632)

![01](https://github.com/moelle89/GG_AE_SCRIPTING/assets/10669665/6ca9e011-5679-45f2-a143-66b2065b7d6b)
![02](https://github.com/moelle89/GG_AE_SCRIPTING/assets/10669665/49631e8d-e5e5-44df-99ad-095bdbf0719a)
![03](https://github.com/moelle89/GG_AE_SCRIPTING/assets/10669665/792f16c3-e14e-40bd-a9b8-59ebd6be4007)


The majority of this panels features only work with the boilerplate.aep

# TEMPLATE

### Video-Templ.

Setup all required compositions for a Video-Ad using a custom name.

### Image-Templ.

Setup all required compositions for an Image-Ad using a custom name.

## ELEMENTS

Add a content objeckt that is already preconfigurated to work with the json keys.

## GALLERY

Add a gallery object that is already preconfigurated to work with the json keys.

## FX

Use certain presets or actions to add values bind to json keys or scale a layer to fit its composition with keeping its ratio.


__


# FILES

Import files you want to include into the template. The files are copied and placed into the footage folder of the project using subfolders based on the files extensions.


--


# Hotkeys

Scale the active composition to fill the available preview area.

Wipe expression based values of a layers transform properties. (revert scale 2 fill)

Open the project folder in windows explorer.

Open the footage folder in windows explorer.

Open the json footage folder in windows explorer.
