// Services
export { searchMaterial, batchSearch, MaterialMatch, MaterialItem, SearchQuery } from './services/material-searcher';
export { groupMaterials, MaterialGroup, GroupingOptions } from './services/smart-grouper';
export { createAIGenerationPlan, AIGenerationPlan, BatchGenerationPlan } from './services/ai-material-generator';

// Pipeline
export { MaterialMatchingPipeline, MaterialMatchingResult } from './pipeline-controller';
