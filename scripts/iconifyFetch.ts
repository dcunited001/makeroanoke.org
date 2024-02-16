import { promises as fs } from "fs";
import {
  importDirectory,
  cleanupSVG,
  runSVGO,
  parseColors,
  isEmptyColor,
  IconSet,
} from "@iconify/tools";

import * as flowbite from "@iconify-json/flowbite";

const args = process.argv.slice(2);
(args.length < 1) && process.exit(1);

const outputDir = args[0];
// TODO: mkdir -p
// const outputDir = "src/assets/icons/flowbite";

// based on https://iconify.design/docs/libraries/tools/export/svg.html
(async () => {
  // Import icons
  const iconSet = new IconSet(flowbite.icons);

  // Validate, clean up, fix palette and optimise
  iconSet.forEach((name, type) => {
    if (type !== "icon") {
      return;
    }
    const svg = iconSet.toSVG(name);
    if (!svg) {
      // Invalid icon
      iconSet.remove(name);
      return;
    }

    // Clean up and optimise icons
    try {
      // Cleanup icon code
      cleanupSVG(svg);

      // Assume icon is monotone: replace color with currentColor, add if missing
      // If icon is not monotone, remove this code
      parseColors(svg, {
        defaultColor: "currentColor",
        callback: (attr, colorStr, color) => {
          return !color || isEmptyColor(color) ? colorStr : "currentColor";
        },
      });

      // Optimise
      runSVGO(svg);
    } catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err);
      iconSet.remove(name);
      return;
    }

    // Update icon
    iconSet.fromSVG(name, svg);
  });

  // Export all icons
  await iconSet.forEach(async (name) => {
    const svg = iconSet.toString(name);
    if (!svg) {
      return;
    }

    // Save to file
    await fs.writeFile(`${outputDir}/${name}.svg`, svg, "utf8");
    console.log(`Saved ${outputDir}/${name}.svg (${svg.length} bytes)`);
  });
})();
