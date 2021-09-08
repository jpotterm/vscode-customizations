import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.commands.executeCommand('setContext', 'listAutomaticKeyboardNavigation', false);

    let disposable = vscode.commands.registerCommand('customizations.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from customizations!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    vscode.commands.executeCommand('setContext', 'listAutomaticKeyboardNavigation', true);
}
