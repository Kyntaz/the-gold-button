import { execSync } from "child_process";

console.log("Running post-build script");

console.log("Zipping assets into ./build/the-gold-button.zip");
execSync("7z a -tzip ./build/the-golden-button.zip ./build/*");

console.log("Done");
