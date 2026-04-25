import React, { useState, useCallback } from 'react';

import type { ScriptGenerationResult, Script } from '../steps/step1-script-generation';
import { ScriptGenerationPipeline } from '../steps/step1-script-generation/pipeline-controller';

interface Props {
  onScriptGenerated?: (script: Script) => void;
}

export const ScriptGenerationView: React.FC<Props> = ({ onScriptGenerated }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ScriptGenerationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!text.trim()) {
      setError('请输入小说文本');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setProgress(0);
    setResult(null);

    try {
      const pipeline = new ScriptGenerationPipeline();

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(p => Math.min(p + 10, 90));
      }, 500);

      const output = await pipeline.process({ text, title: title || '未命名剧本' });
      clearInterval(progressInterval);
      setProgress(100);

      const scriptResult = (output as any).scriptGeneration as ScriptGenerationResult;
      setResult(scriptResult);
      onScriptGenerated?.(scriptResult.script);
    } catch (err) {
      setError(err instanceof Error ? err.message : '生成失败');
    } finally {
      setIsGenerating(false);
    }
  }, [text, title, onScriptGenerated]);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600';
      case 'B': return 'text-blue-600';
      case 'C': return 'text-yellow-600';
      case 'D': return 'text-orange-600';
      default: return 'text-red-600';
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">📝 AI 脚本生成</h2>

      {/* Input Section */}
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="script-title" className="block text-sm font-medium mb-2">剧本标题（可选）</label>
          <input
            id="script-title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="输入剧本标题"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            disabled={isGenerating}
          />
        </div>

        <div>
          <label htmlFor="script-text" className="block text-sm font-medium mb-2">小说原文</label>
          <textarea
            id="script-text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="粘贴小说文本，支持第X章、Chapter X 等章节标记..."
            rows={12}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 font-mono text-sm"
            disabled={isGenerating}
          />
          <p className="text-xs text-gray-500 mt-1">
            {text.length} 字符 | {text.split(/第\S*章|Chapter \d+/i).length - 1} 章节
          </p>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating || !text.trim()}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? '生成中...' : '🎬 生成剧本'}
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          ❌ {error}
        </div>
      )}

      {/* Progress Bar */}
      {isGenerating && (
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span>生成中...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Result Section */}
      {result && !isGenerating && (
        <div className="space-y-6">
          {/* Metadata */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">📊 生成统计</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-500">章节</span>
                <p className="text-lg font-medium">{result.metadata.chaptersCount}</p>
              </div>
              <div>
                <span className="text-gray-500">事件</span>
                <p className="text-lg font-medium">{result.metadata.eventsCount}</p>
              </div>
              <div>
                <span className="text-gray-500">角色</span>
                <p className="text-lg font-medium">{result.metadata.charactersCount}</p>
              </div>
              <div>
                <span className="text-gray-500">场景</span>
                <p className="text-lg font-medium">{result.metadata.scenesCount}</p>
              </div>
            </div>
          </div>

          {/* Evaluation Score */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">⭐ 质量评分</h3>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className={`text-5xl font-bold ${getGradeColor(result.metadata.grade)}`}>
                  {result.metadata.grade}
                </p>
                <p className="text-sm text-gray-500">等级</p>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>综合评分</span>
                  <span className="font-medium">{result.metadata.evaluationScore}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      result.metadata.evaluationScore >= 80 ? 'bg-green-500' :
                      result.metadata.evaluationScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${result.metadata.evaluationScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Script Preview */}
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold mb-3">🎬 剧本预览</h3>
            <div className="space-y-3">
              {result.script.scenes.slice(0, 5).map(scene => (
                <div key={scene.id} className="border-b pb-3 last:border-b-0">
                  <div className="flex gap-2 text-xs text-gray-500 mb-1">
                    <span>场景{scene.sceneNumber}</span>
                    <span>•</span>
                    <span>{scene.location}</span>
                    <span>•</span>
                    <span>{scene.timeOfDay}</span>
                    <span>•</span>
                    <span className={
                      scene.emotion === 'happy' ? 'text-green-500' :
                      scene.emotion === 'sad' ? 'text-blue-500' :
                      scene.emotion === 'tense' ? 'text-orange-500' :
                      scene.emotion === 'angry' ? 'text-red-500' : 'text-gray-500'
                    }>
                      {scene.emotion}
                    </span>
                  </div>
                  <p className="text-sm">{scene.content.slice(0, 100)}...</p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">
                      {scene.cameraHint}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">
                      {scene.type}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">
                      {scene.transition}
                    </span>
                  </div>
                </div>
              ))}
              {result.script.scenes.length > 5 && (
                <p className="text-sm text-gray-500 text-center">
                  还有 {result.script.scenes.length - 5} 个场景...
                </p>
              )}
            </div>
          </div>

          {/* Characters */}
          {result.script.characters.length > 0 && (
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold mb-3">👥 角色列表</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {result.script.characters.map(char => (
                  <div key={char.id} className="border rounded p-3">
                    <p className="font-medium">{char.name}</p>
                    <p className="text-xs text-gray-500">{char.personality}</p>
                    <p className="text-xs text-gray-400 mt-1">{char.speakingStyle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScriptGenerationView;