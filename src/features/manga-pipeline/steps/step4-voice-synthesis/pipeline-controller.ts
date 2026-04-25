import { PipelineStep, StepInput, StepOutput } from '../../../../core/pipeline/step.interface';
import { Script } from '../step1-script-generation/types/script';

import { selectBGM, BGMSelection } from './services/bgm-selector';
import { generateDialogueTTS, DialogueSegment } from './services/dialogue-tts-generator';
import { assignVoices, VoiceAssignment } from './services/voice-assigner';

export interface VoiceSynthesisResult {
  script: Script;
  voiceAssignments: VoiceAssignment[];
  dialogueSegments: DialogueSegment[];
  bgmSelections: BGMSelection[];
  totalDuration: number;  // 总时长（秒）
  metadata: {
    generatedAt: number;
    ttsEngine: string;
    voiceCount: number;
  };
}

export class VoiceSynthesisPipeline implements PipelineStep {
  id = 'voice-synthesis';
  name = 'Voice Synthesis';

  private _checkpoint: any = null;

  async process(input: StepInput): Promise<StepOutput> {
    const { script } = input as StepInput & { script: Script };

    // Step 1: 音色分配
    const voiceAssignments = assignVoices(script.characters);

    // Step 2: 生成 TTS 配音序列
    const { segments, totalDuration } = generateDialogueTTS(script, voiceAssignments);

    // Step 3: 选择 BGM
    const bgmSelections = selectBGM(script.scenes);

    const result: VoiceSynthesisResult = {
      script,
      voiceAssignments,
      dialogueSegments: segments,
      bgmSelections,
      totalDuration,
      metadata: {
        generatedAt: Date.now(),
        ttsEngine: 'edge-tts',
        voiceCount: voiceAssignments.length,
      },
    };

    return { voiceSynthesis: result } as StepOutput;
  }

  getCheckpoint() {
    return this._checkpoint;
  }

  restore(state: any) {
    this._checkpoint = state;
  }
}