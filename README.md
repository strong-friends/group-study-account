# 개요
계정 로그인 프로로토타입 개발을 위한 스터디 저장소입니다.

## 1. 시작하기
### 최소 준비 사항
* GIT 형상관리 지원 도구
	* [깃허브 데스크탑](https://desktop.github.com/) (다른 것도 괜찮아요)
* 명령 프롬프트 또는 콘솔 에뮬레이터 
	* [Cmder](https://cmder.net/) (다른 것도 괜찮아요)
* [node.js](https://nodejs.org/ko/) LTS 버전
	* npm: Node Package Manager (node.js 설치하면 자동 포함됩니다)

## 2. 개발하기
### 개발 관련 문서
__개발 관련 문서는 `docs`에서 관리합니다.__ 해당 폴더의 문서를 참고해서 개발 진행해 주세요.

### 커밋 규칙
기본 브랜치는 develop을 기준으로 합니다. (master에 직접 커밋 하지 않아요) 자신이 담당한 기능 개발 내용은 develop을 기준으로 브랜치를 추가적으로 생성합니다.

* __브랜치 생성 네이밍 규칙__
	* 단어 구분은 `-`대쉬를 사용, `_` 언더스코어는 사용하지 않아요
	* default(기본) 접두어는 `feature`를 사용
	```
	feature/write-document
	feature/markup
	```
* __풀 리퀘스트는 2명의 리뷰어를 선정__
* 리퀘스트가 정상적으로 __머지된 이후에는 해당 브랜치 삭제__


### 코드 컨벤션
* __들여쓰기는 스페이스 2__
* Prettier - Code formatter (확장자 설치)

### 컴포넌트 스타일링
* 참고 도큐먼트 
	* [styled-jsx](https://github.com/zeit/styled-jsx#getting-started)
	* [styled-jsx-plugin-sass](https://www.npmjs.com/package/styled-jsx-plugin-sass)


## 참고
* [frefetching](https://github.com/zeit/next.js/blob/canary/examples/with-prefetching/)
* [dynamic Routing](https://github.com/zeit/next.js#dynamic-routing)

## 개발 이슈
* 2019/7/27 - 리뷰 없이 머지가 가능한 상황 발생했음
	* 원인은 팀 맴버가 모두 관리자로 설정되어 있었기 때문에 구성원의 role(역할)을 맴버 등급으로 변경, 전체 프로젝트 관리를 위해 2명의 일정 담당자를 별도로 설정 (규식, 주현)