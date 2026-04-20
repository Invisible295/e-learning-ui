import type { Assignment, FeedbackItem, QuickSubmitConfig } from "./types";

export const ASSIGNMENTS: Assignment[] = [
  {
    id: "assignment-quantum-gates",
    badgeLabel: "Due in 3 days",
    badgeTone: "danger",
    title: "Quantum Gates Implementation",
    moduleLabel: "Module 3 • Practical Exercise",
    description:
      "Implement basic quantum gates (Pauli-X, Y, Z, Hadamard) using Qiskit and demonstrate their effects on single-qubit states. Submit your Jupyter notebook.",
    dueLabel: "Oct 24, 11:59 PM",
    status: "in_progress",
  },
  {
    id: "assignment-entanglement-analysis",
    badgeLabel: "Next Week",
    badgeTone: "neutral",
    title: "Entanglement Analysis",
    moduleLabel: "Module 4 • Essay",
    description:
      "Analyze a Bell state circuit. Discuss the implications of quantum entanglement in information theory and provide mathematical proofs for non-locality.",
    dueLabel: "Oct 31, 11:59 PM",
    status: "not_started",
  },
  {
    id: "assignment-linear-algebra",
    title: "Linear Algebra Basics",
    moduleLabel: "Module 1 • Quiz",
    description: "",
    dueLabel: "Submitted on Oct 15",
    status: "submitted",
  },
];

export const QUICK_SUBMIT: QuickSubmitConfig = {
  assignmentTitle: "Quantum Gates Implementation",
  acceptedFileTypesLabel: ".ipynb, .pdf, .py",
  submitDisabled: true,
};

export const RECENT_FEEDBACK: FeedbackItem[] = [
  {
    id: "feedback-qubit-superposition",
    title: "Qubit Superposition",
    scoreLabel: "95/100",
    metaLabel: "Module 2 • Graded Oct 10",
    feedbackText:
      '"Excellent work on the visualization portion. Ensure you double-check the normalization constraints in section 3."',
  },
];
