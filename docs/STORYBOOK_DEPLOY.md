# Storybook 배포 가이드

디자이너, 기획자, QA 등 **개발 환경 없이도** Storybook을 브라우저에서 바로 볼 수 있도록 배포하는 방법입니다.

두 가지 방식을 제공합니다. 팀 상황에 맞게 선택하세요.

---

## 방법 A. Chromatic (추천)

Storybook 공식 클라우드 배포 서비스입니다.  
PR마다 자동으로 미리보기 링크가 생성되고, 컴포넌트 변경 사항을 시각적으로 비교하는 **비주얼 리그레션 테스트** 기능도 포함되어 있습니다.

### A-1. Chromatic 계정 및 프로젝트 등록

1. [chromatic.com](https://www.chromatic.com) 에 접속합니다.
2. GitHub 계정으로 로그인합니다.
3. `Add project` → 이 저장소를 선택합니다.
4. 프로젝트 토큰(Project Token)을 복사해 둡니다.

### A-2. 최초 1회 수동 배포 (테스트)

```bash
npx chromatic --project-token=여기에_토큰_입력
```

터미널에 아래와 같은 URL이 출력되면 성공입니다.

```
✔ Published Storybook
  Permalink: https://xxxx-storybook.chromatic.com
```

이 Permalink URL을 디자이너분들께 공유하시면 됩니다.

### A-3. GitHub Actions로 자동 배포

`.github/workflows/chromatic.yml` 파일이 이미 저장소에 포함되어 있습니다.  
아래 단계로 **GitHub Secret**만 등록하면 `main` 브랜치 push 시 자동 배포됩니다.

**Secret 등록 방법:**

1. GitHub 저장소 → `Settings` → `Secrets and variables` → `Actions`
2. `New repository secret` 클릭
3. Name: `CHROMATIC_PROJECT_TOKEN`
4. Value: A-1에서 복사한 토큰 붙여넣기

이후부터 PR을 올리면 Chromatic 봇이 미리보기 링크를 댓글로 달아줍니다.

---

## 방법 B. GitHub Pages (무료)

별도 외부 서비스 없이 GitHub Pages만으로 배포합니다.  
PR별 미리보기는 지원되지 않지만, `main` 브랜치 기준 최신 상태가 항상 공개됩니다.

### B-1. GitHub Pages 활성화

1. 저장소 → `Settings` → `Pages`
2. Source를 `GitHub Actions` 로 선택하고 저장합니다.

### B-2. 자동 배포 워크플로우 확인

`.github/workflows/deploy-storybook.yml` 파일이 이미 포함되어 있습니다.  
`main` 브랜치에 push할 때마다 Storybook이 자동으로 빌드 및 배포됩니다.

배포 후 아래 URL에서 Storybook을 확인할 수 있습니다.

```
https://your-org.github.io/react-storybook-demo/
```

`your-org` 부분을 실제 GitHub 계정/조직명으로 변경해 주세요.

### B-3. 수동 빌드 확인 (로컬)

```bash
npm run build-storybook
```

`storybook-static/` 폴더가 생성되며, 이 폴더를 정적 호스팅 서비스에 올리면 됩니다.

---

## 배포 방식 비교

| 항목 | Chromatic | GitHub Pages |
|------|-----------|--------------|
| 비용 | 무료 플랜 있음 (5,000 스냅샷/월) | 완전 무료 |
| PR 미리보기 | ✅ 지원 | ❌ 미지원 |
| 비주얼 리그레션 테스트 | ✅ 지원 | ❌ 미지원 |
| 설정 난이도 | 보통 (토큰 등록 필요) | 쉬움 |
| 권장 상황 | 디자이너와 협업이 잦은 팀 | 빠르게 공유만 필요한 경우 |
