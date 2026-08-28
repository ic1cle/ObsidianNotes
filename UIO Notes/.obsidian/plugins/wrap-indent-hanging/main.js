const { Plugin } = require("obsidian");
const { ViewPlugin, Decoration } = require("@codemirror/view");
const { RangeSetBuilder } = require("@codemirror/state");

// Counts the rendered "column width" of a line's leading tabs/spaces,
// simulating tab stops the same way the editor does (each tab jumps
// to the next multiple of tabSize). Stops at the first real character.
function leadingIndentColumns(text, tabSize) {
	let col = 0;
	for (let i = 0; i < text.length; i++) {
		const ch = text[i];
		if (ch === "\t") {
			col += tabSize - (col % tabSize);
		} else if (ch === " ") {
			col += 1;
		} else {
			break;
		}
	}
	return col;
}

// Synchronous, no DOM layout reads: uses view.defaultCharacterWidth
// (a pre-measured, cached metric) instead of coordsAtPos, since layout
// reads aren't allowed inside a ViewPlugin's update() cycle.
function buildDecorations(view) {
	const builder = new RangeSetBuilder();
	const tabSize = view.state.tabSize;
	const charWidth = view.defaultCharacterWidth;
	let applied = 0;

	for (const { from, to } of view.visibleRanges) {
		let pos = from;
		while (pos <= to) {
			const line = view.state.doc.lineAt(pos);
			const text = line.text;
			const match = text.match(/^[\t ]+/);

			if (match && match[0].length < text.length) {
				const columns = leadingIndentColumns(text, tabSize);
				const indentPx = Math.round(columns * charWidth);
				if (indentPx > 0) {
					applied++;
					builder.add(
						line.from,
						line.from,
						Decoration.line({
							attributes: {
								style: `text-indent: -${indentPx}px; padding-left: ${indentPx}px;`,
							},
						})
					);
				}
			}

			pos = line.to + 1;
		}
	}

	console.debug(`[wrap-indent-hanging] charWidth=${charWidth} tabSize=${tabSize} decorationsApplied=${applied}`);
	return builder.finish();
}

const wrapIndentViewPlugin = ViewPlugin.fromClass(
	class {
		constructor(view) {
			this.decorations = buildDecorations(view);
		}
		update(update) {
			if (update.docChanged || update.viewportChanged || update.geometryChanged) {
				this.decorations = buildDecorations(update.view);
			}
		}
	},
	{
		decorations: (v) => v.decorations,
	}
);

module.exports = class WrapIndentHangingPlugin extends Plugin {
	onload() {
		this.registerEditorExtension([wrapIndentViewPlugin]);
	}
};
