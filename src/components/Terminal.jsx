import Terminal from 'react-animated-term'

const termLines = [
  {
    text: 'kubectl get nodes',
    cmd: true,
  },
  {
    text: `NAME             STATUS   ROLES    AGE   VERSION
    node-1           Ready    master   10d   v1.25.3
    node-2           Ready    <none>   10d   v1.25.3
    node-3           Ready    <none>   10d   v1.25.3`,
    cmd: false,
  },
  {
    text: `kubectl annotate pod my-pod region.kapy.sh=es-mad1`,
    cmd: true,
  },
  {
    text: `kapy up --join-url='https://kapy.sh/x123'`,
    cmd: true,
  },
  {
    text: 'Clusters Up!',
    cmd: false,
  },
]

export function AnimatedTerminal({
  class: classList = '',
  height = '240px',
  ...props
} = {}) {
  return (
    <div class={classList}>
      <Terminal lines={termLines} interval={80} {...props} />
    </div>
  )
}
