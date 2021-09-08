import * as vscode from 'vscode';
import { v4 as uuidv4 } from 'uuid';

function generateUuidCommand() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    editor.edit((editBuilder) => {
        for (const selection of editor.selections) {
            const uuid = uuidv4().replace(/-/g, '');
            editBuilder.replace(selection, uuid);
        }
    });
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('customizations.generateUuid', generateUuidCommand));
}

export function deactivate() {}
