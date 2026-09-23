import { ArrowUpRight, CircleHelp, Search } from 'lucide-react';

const findings = [
  {
    severity: 'High',
    kind: 'high',
    finding: 'Exposed network service',
    source: 'Network',
    next: 'Review service access',
  },
  {
    severity: 'Medium',
    kind: 'medium',
    finding: 'Outdated dependency',
    source: 'Code',
    next: 'Review update path',
  },
  {
    severity: 'Medium',
    kind: 'medium',
    finding: 'Configuration finding',
    source: 'Asset',
    next: 'Review configuration',
  },
] as const;

export function ProductPreview() {
  return (
    <div className="product-preview">
      <div className="preview-head">
        <span className="preview-brand">
          CyfroSec <span>/ Exposure view</span>
        </span>
        <span className="preview-label">ILLUSTRATIVE WORKFLOW</span>
      </div>
      <div className="preview-body">
        <aside className="preview-sidebar" aria-hidden="true">
          <span className="active">Overview</span>
          <span>Findings</span>
          <span>Assets</span>
          <span>Insights</span>
          <span>Reports</span>
        </aside>
        <div className="preview-main">
          <div className="preview-toolbar">
            <div>
              <small>WORKSPACE</small>
              <h3>Exposure overview</h3>
            </div>
            <div className="preview-search">
              <Search size={14} aria-hidden="true" /> Search findings
            </div>
          </div>
          <div className="preview-table-wrap">
            <table className="preview-table">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Finding</th>
                  <th>Source</th>
                  <th>Suggested next step</th>
                </tr>
              </thead>
              <tbody>
                {findings.map((item) => (
                  <tr key={item.finding}>
                    <td>
                      <span className={`severity ${item.kind}`}>{item.severity}</span>
                    </td>
                    <td>{item.finding}</td>
                    <td>{item.source}</td>
                    <td>{item.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="preview-insight">
            <div className="insight-icon">
              <CircleHelp size={20} aria-hidden="true" />
            </div>
            <div>
              <strong>Why this is first</strong>
              <p>
                The example service is reachable and needs review. Inspect the affected asset and
                follow the recommended steps.
              </p>
            </div>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
