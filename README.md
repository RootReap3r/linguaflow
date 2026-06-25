🌐 LinguaFlow

A personal AI-powered language tutor. Built for daily conversation practice in Spanish, French, Russian, German, and Portuguese.

Features


Conversation Practice — Talk with an AI tutor that keeps responses short and natural. You do the talking, corrections come at the end.
Daily Content — Fresh lesson and conversation topic every day based on real news and cultural events from the target country.
Learning Path — A1 through C2 skill tree with locked/unlocked nodes. Complete levels or test out early.
Test-Out System — Short conversation test evaluated by AI. Pass 70+ to unlock a node or entire level instantly.
Verb Drills — Full conjugation tables with example sentences. Present, past, and future tenses.
Word Reference — Core vocabulary by category: pronouns, conjunctions, adverbs, prepositions, question words, numbers, adjectives, connectors.
Topic Lessons — AI-generated lessons on World Cup, food, travel, opinions, and more.
Progress Tracking — Streak counter, activity heatmap, CEFR level progress bars.
Yuki — Animated tutor avatar with lip sync and blink animation tied to audio playback.


Tech Stack


Pure HTML/CSS/JS — no framework, no build step
Claude (Anthropic) — conversation, corrections, test scoring
DeepSeek — verb conjugation drills (cheaper, faster for structured output)
Qwen (Alibaba) — daily content generation with web search
ElevenLabs — natural multilingual text-to-speech
OpenAI Whisper — speech-to-text that works on iPhone Safari
PWA — installable on iPhone home screen, works like a native app


API Keys Required

All keys are entered in the app's Settings modal and saved to your device only. They are never stored in this code.

ServiceUsed ForGet KeyAnthropic (Claude)Conversation + evaluationconsole.anthropic.comDeepSeekVerb drillsplatform.deepseek.comQwenDaily contentdashscope.aliyuncs.comElevenLabsVoice outputelevenlabs.ioOpenAIiPhone microphone (Whisper)platform.openai.com

Installation on iPhone


Open the deployed URL in Safari (not Chrome)
Tap the Share button → Add to Home Screen
Tap Add
Open the app → tap 🔊 in the header → paste your API keys → Save


Deployment

Deployed via Netlify from this repository. No build process required — static files served directly.

Privacy

No data is sent to any server except the respective AI APIs when features are used. API keys are stored in browser localStorage on your device only. No analytics, no tracking, no ads
