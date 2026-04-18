export const taskYaml = `apiVersion: openconveyor.ai/v1alpha1
kind: Task
metadata:
  name: fix-null-check
spec:
  agent:
    ref: claude-code-implementer
  prompt:
    inline: "Fix the null-pointer on line 42 of internal/auth/token.go."
  permissions:
    secrets:
      - anthropic-api-key
      - github-token
    egress:
      - api.anthropic.com
      - api.github.com
  timeout: 20m
`;

export const installSnippet = `# Install the operator
kubectl apply -k github.com/openconveyor/openconveyor/config/default

# Apply a Task
kubectl apply -f task.yaml
`;
