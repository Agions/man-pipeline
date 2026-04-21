import { CharacterCard } from './character';
import { Scene } from './scene';

export interface ScriptScene extends Scene {
  sceneNumber: number;
  videoNote?: string;  // 视频分镜备注
  bgmSuggestion?: string;
}

export interface Script {
  id: string;
  title: string;
  sourceText: string;
  estimatedDuration: number;  // 分钟
  scenes: ScriptScene[];
  characters: CharacterCard[];
  metadata: {
    generatedAt: number;
    model: string;
    version: string;
  };
}
