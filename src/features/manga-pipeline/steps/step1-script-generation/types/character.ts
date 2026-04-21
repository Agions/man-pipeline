export interface CharacterCard {
  id: string;
  name: string;
  appearance: string;
  personality: string;
  speakingStyle: string;
  voiceSuggestion: string;
  relationships: { name: string; type: string }[];
  firstAppearance: string;
}
