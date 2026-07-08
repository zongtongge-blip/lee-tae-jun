# Edge TTS audio

`edge-tts`는 별도 API key 없이 설치해서 사용할 수 있습니다. 다만 Microsoft Edge의 온라인 TTS 서비스를 호출하므로 음성 생성 시 인터넷 연결이 필요합니다.

## 설치

```powershell
python -m pip install edge-tts
```

## 음성 파일 생성

```powershell
node sound/generate-edge-tts-audio.mjs
```

이미 만들어진 파일까지 다시 생성하려면 다음처럼 실행합니다.

```powershell
node sound/generate-edge-tts-audio.mjs --force
```

화자 음성은 다음처럼 분리되어 있습니다.

- `A`: `zh-CN-YunxiNeural`
- `B`: `zh-CN-XiaoxiaoNeural`
- 주요 표현: `zh-CN-XiaoxiaoNeural`
