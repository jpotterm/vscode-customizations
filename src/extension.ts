import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext): void {
    vscode.commands.executeCommand('setContext', 'listAutomaticKeyboardNavigation', false);
}

export function deactivate(): void {
    vscode.commands.executeCommand('setContext', 'listAutomaticKeyboardNavigation', true);
}
