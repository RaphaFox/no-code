interface Window {
    versions: {
        chrome: () => string,
        electron: () => string,
        node: () => string
    }
}

const versionKeys = [
    "chrome",
    "electron",
    "node"
] as const;

for (const key of versionKeys) {
    const versionText = document.querySelector(`#${key}-version`) as HTMLSpanElement;
    versionText.innerText = window.versions[key]();
}
