import { PipelineStep, StepInput, StepOutput } from '../../../../core/pipeline/step.interface';

import { analyzeNarrativeStructure, buildCharacterGraph, detectConflicts } from './analyzer';
import { evaluateScript } from './evaluator';
import { splitChapters, classifyParagraphs, extractEvents } from './parser';
import { generateCharacterCards , generateScenes, integrateScript } from './script-writer';
import { Script } from './types/script';

export interface ScriptGenerationInput {
  text: string;
  title?: string;
}

export interface ScriptGenerationResult {
  script: Script;
  metadata: {
    chaptersCount: number;
    eventsCount: number;
    charactersCount: number;
    scenesCount: number;
    evaluationScore: number;
    grade: string;
  };
}

export class ScriptGenerationPipeline implements PipelineStep {
  id = 'script-generation';
  name = 'AI Script Generation';

  private _checkpoint: any = null;

  async process(input: StepInput): Promise<StepOutput> {
    const { text, title = '未命名剧本' } = input as StepInput & ScriptGenerationInput;

    // Step 1: Parse text
    const { chapters } = splitChapters(text);
    const paragraphs = classifyParagraphs(text);
    const events = extractEvents(chapters, paragraphs);

    // Step 2: Analyze narrative
    const narrative = analyzeNarrativeStructure(events, chapters.length);
    const characterGraph = buildCharacterGraph(events, paragraphs);
    const conflicts = detectConflicts(events, narrative);

    // Step 3: Generate character cards
    const characters = generateCharacterCards(text, characterGraph, events);

    // Step 4: Generate scenes
    const scenes = generateScenes(events, narrative, characters);

    // Step 5: Integrate script
    const script = integrateScript(scenes, characters, paragraphs, { title });

    // Step 6: Evaluate
    const evaluation = evaluateScript(script);

    // 构建结果
    const result: ScriptGenerationResult = {
      script,
      metadata: {
        chaptersCount: chapters.length,
        eventsCount: events.length,
        charactersCount: characters.length,
        scenesCount: scenes.length,
        evaluationScore: evaluation.score,
        grade: evaluation.overallGrade,
      },
    };

    return { scriptGeneration: result } as StepOutput;
  }

  getCheckpoint() {
    return this._checkpoint;
  }

  restore(state: any) {
    this._checkpoint = state;
  }
}