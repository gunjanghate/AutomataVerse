import { KonvaEventObject } from 'konva/lib/Node';

// Node Types
export interface Transition {
    targetid: string;
    label: string; // Can include epsilon (ε) for NFA
  }
  
  export interface Node {
    id: string;
    x: number;
    y: number;
    transitions: Transition[];
  }
  
  export interface NodeMap {
    [key: string]: Node;
  }
  
  export interface HighlightedTransition {
    d?: Transition;
    target?: string;
  }
  
  // Stage Props
  export interface StageProps {
    x: number;
    y: number;
    scale: number;
    draggable: boolean;
  }
  
  // Control Panel Props
  export interface ControlPanelProps {
    onAddNode: () => void;
    onSetFinite: () => void;
    onRun: () => void;
    onStep: () => void;
    onInputChange: (value: string) => void;
    onReset: () => void;
    onToggleGrid: () => void;
    onLoadJson: () => void;
    onValidate: () => void;
    inputString: string;
    validationResult: string | null;
    selectedNode: Node | null;
    isRunning: boolean;
    isRunningStepWise: boolean;
    showGrid: boolean;
    stepIndex: number;
  }
  
  // Input Popup Props
  export interface InputPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (symbol: string) => void;
  }
  
  // Grid Props
  export interface GridProps {
    size: number;
    color: string;
    stageProps: StageProps;
  }
  
  // Node Canvas Props
  export interface NodeCanvasProps {
    nodes: Node[];
    showGrid: boolean;
    stageProps: StageProps;
    nodeMap: NodeMap;
    highlightedTransitions: HighlightedTransition[]; // Changed to array for NFA
    highlightedNodes: Set<string>; // New for NFA to highlight multiple active states
    selectedNode: Node | null;
    finiteNodes: Set<string>;
    currNodes: Set<string>; // Changed from currNode to currNodes for NFA
    showQuestion: boolean;
    handleNodeClick: (node: Node) => void;
    handleDragMove: (e: KonvaEventObject<DragEvent>, nodeId: string) => void;
    handleDragStart?: (e: KonvaEventObject<DragEvent>, nodeId: string) => void;
    handleDragEnd?: (e: KonvaEventObject<DragEvent>, nodeId: string) => void;
    isDraggingNode?: boolean;
    nodeMouseDown?: () => void;
    nodeMouseUp?: () => void;
  }