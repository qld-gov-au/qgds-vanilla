import { copy } from "esbuild-plugin-copy";

export default function copyPlugin() {

    //Docs: https://www.npmjs.com/package/esbuild-plugin-copy
    return copy({
        resolveFrom: "cwd",
        verbose: false,
        watch: true,
        assets: [

            {from: ["./src/favicon/*"], to: ["./dist/assets/favicon"]},
            {from: ["./src/img/*"], to: ["./dist/assets/img"]},
            {from: ["./src/helpers/README.md"], to: ["./dist/assets/helpers/README.md"]},
            {from: ["./package.json"], to: ["./dist/package.json"]},
            {from: ["./README.md"], to: ["./dist/README.md"]},
        ],
    });

}
