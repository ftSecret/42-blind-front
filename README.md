# 42BLIND

<center>

**사용 기술**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![RTK-Query](https://img.shields.io/badge/rtk_query-339933?style=for-the-badge&logo=redux&logoColor=white)
![AWS-S3](https://img.shields.io/badge/AWS_S3-ff4444?style=for-the-badge&logo=Amazon&logoColor=white)
![AWS-Cloudfront](https://img.shields.io/badge/AWS_Cloudfront-9999ff?style=for-the-badge&logo=Amazon&logoColor=white)
</center>

<center>

**다크모드 메인화면/ 라이트모드 메인화면**
</br>
<img width="400" height="200" alt="darkmode-main" src="https://user-images.githubusercontent.com/61973070/160445847-e01820a9-8034-46fc-a2d6-c61a0122cc62.png"> <img width="400" height="200" alt="lightmode-main" src="https://user-images.githubusercontent.com/61973070/160446207-57b7e7a0-b5b0-4c26-963e-7c6324f99e37.png"><br />
</center>
<center>

**알림기능/ 마이페이지**
<br />
<img width="400" height="200" alt="darkmode-noti" src="https://user-images.githubusercontent.com/61973070/160446024-dc803abc-215d-487a-b947-9c463e624e34.png"> <img width="400" height="200" alt="darkmode-my" src="https://user-images.githubusercontent.com/61973070/160446119-e7848922-b894-4e65-8442-8b45ccf65adb.png"><br />
</center>
<center>

**모바일 메인페이지 / 모바일 마이페이지**
</br>
<img width="150" height="250" alt="lightmode-main-mobile" src="https://user-images.githubusercontent.com/61973070/160446695-3affb96e-cadd-4693-bb36-eecf470b05da.jpeg">
<img width="150" height="250" alt="lightmode-my-mobile2" src="https://user-images.githubusercontent.com/61973070/160446759-dacb6b78-05b4-4465-9fa6-9a3f28fa60bb.jpeg">
</center>
<br />

## 42BLIND?

**42 서울 내 교육생들이 자유로운 의견을 주고받을 수 있는 익명 커뮤니티 게시판.** <br />

**폴더 구조**
```bash
├── App.tsx
├── api
├── app - redux 사용을 위한 hooks, store.
├── assets
├── components - Atomic Pattern
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   ├── templates
│   └── utils  - Router, Provider
├── constants
├── features - redux slice
├── hooks
├── index.tsx
├── pages
├── styles
├── types
└── utils
```
<br />

**프로젝트 관련 개발 내용**

- TypeScript 적용
- Styled-Component를 이용해서 다크/라이트 모드 개발.
  - theme 를 적용하여 공통적인 스타일을 관리.
- 메인화면 기능 개발.
  - 메인화면에서 메인화면으로 스와이프를 이용하여 화면전환 가능.
  - 무한스크롤.
- 알림 기능 개발.
- 글 작성 수정 기능 개발.
- 댓글, 답글 기능 개발.
  - 댓글, 답글 작성시 포커싱 기능
  - 댓글에 링크 작성시 파싱하여 하이퍼링크로 적용되는 기능.
- 좋아요 기능 개발.
  - 좋아요 버튼이 연속으로 클릭 되는 문제점 해결을 위해서 Timer 를 적용.
- RTK-Query를 적용

  - 1.RTK-Query

  게시판의 경우 사용자들 간에 데이터가 공유되므로 사용자가 모르는 사이에 업데이트가 이루어짐.

  - 실시간으로 데이터가 fetching 되어야 함.
  - 데이터가 업데이트될 때 비동기적으로 API가 필요.

  이에 따라서 해당 페이지에 접속할 때마다 API로 업데이트된 데이터가 필요하다고 생각 → RTK-Query를 이용

  - Auth 관련 로직을 RTK-Query의 prepareHeader 를 이용 하여 처리.

- 아토믹 디자인 패턴 적용
  - 컴포넌트의 재사용성을 늘리기 위해서 아토믹 디자인 패턴을 적용.
  - 최소단위로 나누어 재사용하여 사용.
  - 폴더 구조
    - components - Atomic Pattern
    ```
      │   ├── atoms (제일 작은 최소단위)
      │   ├── molecules (atom + atom)
      │   ├── organisms (도메인 관련 정보가 포함됨)
      │   ├── templates (뼈대)
    ```
- AWS S3, AWS CloudFront를 이용하여 서버구축, 배포
  - Github Actions을 이용한 자동 배포 CI/CD 적용.
