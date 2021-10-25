const { init } = require('./src/index')
const vscode = require('vscode')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const cmdIdPrefix = 'cryptocurrency-reminder'
    
    let disposable = vscode.commands.registerCommand(
        'cryptocurrencyReminder.helloWorld',
        function () {
            vscode.window.showInformationMessage('Hello World from Cryptocurrency Reminder!')
        }
    )

    context.subscriptions.push(disposable)

    console.log(vscode.workspace.getConfiguration('cryptocurrency-reminder'))
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate,
}
