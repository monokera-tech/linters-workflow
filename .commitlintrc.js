module.exports = {
    plugins: ['commitlint-plugin-jira-rules'],
    extends: ['jira'],
    rules: {
        'jira-task-id-project-key': [2, 'always', ['SRE', 'OPS', 'AF', 'AA', 'ALFA', 'ACC', 'SEG', 'RES', 'QA', 'CSY', 'BETA']],
        'jira-task-id-case': [2, 'always', 'uppercase'],
        'jira-task-id-max-length': [2, 'always', 10],
        'jira-task-id-separator': [2, 'always', '-'],
        'jira-commit-message-separator': [2, 'always', ': '],
        'jira-commit-status-case': [2, 'always'],
    },
}
