/**
 * features/storyboard/index.ts
 * Storyboard feature exports - Storyboard editing
 */

// Component
export { StoryboardEditor } from './components/StoryboardEditor';

// Service
export { getStoryboardService, resetStoryboardService } from '@/core/services/storyboard.service';
export type { StoryboardFrame } from '@/shared/types';
