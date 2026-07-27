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
      # 60m GitHub App installation token,
      # minted by External Secrets, not a PAT
      - github-token
    egress:
      - api.anthropic.com
      - api.github.com
  timeout: 20m
`;

export const installSnippet = `# Install the operator
kubectl apply -f https://github.com/openconveyor/openconveyor/releases/download/v0.2.0/install.yaml

# Or install via Helm
helm install conveyor oci://ghcr.io/openconveyor/charts/conveyor \\
  --version 0.2.0 --namespace conveyor-system --create-namespace

# Apply a Task
kubectl apply -f task.yaml
`;
